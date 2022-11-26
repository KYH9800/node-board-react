import { useCallback, useState, useEffect } from 'react';
import axios from 'axios';
// CSS
import './App.css';

const App = () => {
  const [state, setState] = useState(false);
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(posts);
  console.log(error);
  console.log(loading);

  const fetchUsers = async () => {
    try {
      setError(null); // 요청이 시작 할 때에는 error 를 초기화
      setPosts(null); // 요청이 시작 할 때 users 를 초기화
      setLoading(true); // loading 상태를 true 로 바꿉니다.
      const response = await axios.get('http://localhost:3000/posts');
      setPosts(response.data); // 데이터는 response.data 안에 들어있습니다.
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  const testFuc = useCallback(() => {
    setState((state) => !state);
  }, [state]);

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  // 아직 users가 받아와 지지 않았을 때는 아무것도 표시되지 않도록
  if (!posts) return null;

  return (
    <div className="App">
      <header className="App-header">
        <p>start react!!</p>
      </header>
      <main>
        <button onClick={testFuc}>{state ? '고윤혁' : '이름 등장!!'}</button>
        {posts.posts.map((post, idx) => (
          <div>
            <br />
            <p>{post.title}</p>
            <p>{post.user}</p>
            <p>{post.content}</p>
            <br />
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;
