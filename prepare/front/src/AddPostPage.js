import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// custom-hooks
import useInput from './hooks/useInput';
// styled-components
import { AddPostsWrapper, TeaxtArea } from './styles/AddPostStyled';

const AddPost = () => {
  // state
  const [user, setUser] = useInput('');
  const [password, setPassword] = useInput('');
  const [title, setTitle] = useInput('');
  const [content, setContent] = useInput('');
  // navigate
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate('/');
  };

  const onClickSubmit = useCallback(
    async (e) => {
      try {
        e.preventDefault();
        // 서버로 보낼 정보
        console.log('user: ', user);
        console.log('password: ', password);
        console.log('content: ', content);

        if (!user) {
          return alert('작성자 이름을 적어주세요.');
        }
        if (!password) {
          return alert('비밀번호를 입력하세요.');
        }
        if (!title) {
          return alert('제목을 입력해주세요.');
        }
        if (!content) {
          return alert('게시글을 입력하세요.');
        }

        const response = await axios.post('http://koyunhyeok.shop/posts', {
          user: user,
          password: password,
          title: title,
          content: content,
        });
        alert(response.data.message);
        navigate('/');
      } catch (error) {
        console.error(error);
      }
    },
    [user, password, title, content]
  );

  return (
    <AddPostsWrapper>
      <form onSubmit={onClickSubmit}>
        <div className="please-add-post">게시글을 작성해주세요.</div>
        <div className="info-box">
          <label>작성자</label>
          <input type="text" placeholder="이름을 입력하세요." value={user} onChange={setUser}></input>
          <br />
          <label>비밀번호</label>
          <input type="password" placeholder="비밀번호를 입력하세요." value={password} onChange={setPassword}></input>
          <label>제목</label>
          <input type="text" placeholder="제목" value={title} onChange={setTitle}></input>
        </div>
        <div>
          <TeaxtArea placeholder="게시글을 입력하세요." value={content} onChange={setContent}></TeaxtArea>
        </div>
        <button onClick={onClickHome}>홈으로</button>
        <button type="submit">업로드</button>
      </form>
    </AddPostsWrapper>
  );
};

export default AddPost;
