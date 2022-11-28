import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// styled-components

const AddPost = () => {
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate('/');
  };

  return (
    <>
      <div>게시글을 작성해주세요.</div>
      <button onClick={onClickHome}>홈으로</button>
    </>
  );
};

export default AddPost;
