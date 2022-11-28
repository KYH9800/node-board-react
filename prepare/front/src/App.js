import { useCallback, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios'; // http://koyunhyeok.shop
// components
import Header from './components/header';
import Posts from './components/posts';
import AddPost from './AddPostPage';
// styled-components
import { AppTag } from './styles/App';

const App = () => {
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

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!posts) return null; // 아직 posts 받아와 지지 않았을 때는 아무것도 표시되지 않도록

  return (
    <AppTag>
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/addPost" element={<AddPost posts={posts} />} />
      </Routes>
    </AppTag>
  );
};

export default App;
