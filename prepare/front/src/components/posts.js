import { useCallback, useState, useEffect } from 'react';
import axios from 'axios'; // http://koyunhyeok.shop
// styled-components
import { PostsWrapper } from '../styles/PostsStyled';

const Posts = () => {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log('posts: ', posts);
  console.log('error:', error);
  console.log('loading: ', loading);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setError(null); // 요청이 시작 할 때에는 error 를 초기화
      setPosts(null); // 요청이 시작 할 때 users 를 초기화
      setLoading(true); // loading 상태를 true 로 바꿉니다.
      const response = await axios.get('http://koyunhyeok.shop/posts');
      setPosts(response.data); // 데이터는 response.data 안에 들어있습니다.
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  const onClickBtn = () => {
    console.log('click');
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!posts) return null; // 아직 posts 받아와 지지 않았을 때는 아무것도 표시되지 않도록

  return (
    <PostsWrapper>
      <div>
        <button onClick={onClickBtn}>게시글 작성</button>
      </div>
      <table>
        <thead>
          <tr>
            <td>번호</td>
            <td>작성자</td>
            <td>제목</td>
            <td>작성일</td>
          </tr>
        </thead>
        {posts.posts.map((post, idx) => (
          <tbody key={post._id}>
            <tr>
              <td>{idx + 1}</td>
              <td>{post.user}</td>
              <td>{post.title}</td>
              <td>{post.createdAt.slice(0, 10)}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </PostsWrapper>
  );
};

export default Posts;
