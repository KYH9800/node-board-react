import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostsWrapper } from '../styles/PostsStyled';

const Posts = ({ posts, setPostId }) => {
  // console.log('props posts: ', posts);
  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate('/addPost');
    // console.log('click');
  };

  const onClickReadPage = (postId) => () => {
    setPostId(postId);
    // console.log('postId in Posts: ', postId);
  };

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
        {posts.map((post, idx) => (
          <tbody key={post._id}>
            <tr onClick={onClickReadPage(post._id)}>
              <td>{idx + 1}</td>
              <td>{post.user}</td>
              <td className="titleTd">{post.title}</td>
              <td>{post.createdAt.slice(0, 10)}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </PostsWrapper>
  );
};

export default Posts;
