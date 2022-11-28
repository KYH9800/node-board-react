import { useNavigate } from 'react-router-dom';
import { PostsWrapper } from '../styles/PostsStyled';

const Posts = ({ posts }) => {
  const navigate = useNavigate();
  console.log('add posts: ', posts);

  const onClickBtn = () => {
    console.log('click');
    navigate('/addPost');
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
        {/* {posts.posts.map((post, idx) => (
          <tbody key={post._id}>
            <tr>
              <td>{idx + 1}</td>
              <td>{post.user}</td>
              <td>{post.title}</td>
              <td>{post.createdAt.slice(0, 10)}</td>
            </tr>
          </tbody>
        ))} */}
      </table>
    </PostsWrapper>
  );
};

export default Posts;
