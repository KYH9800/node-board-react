import styled from 'styled-components';

export const AddPostsWrapper = styled.div`
  form {
    margin: 3% auto;
    width: 95%;
    max-width: 500px;
  }

  .please-add-post {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .info-box {
    width: 95%;
    max-width: 550px;
    margin: auto;
  }

  label {
    display: none;
  }

  input {
    width: 95%;
    max-width: 450px;
    margin: 5px 10px;
    height: 25px;
  }

  button {
    margin: 5px 5px;
    width: 100px;
    height: 27px;
  }
`;

export const TeaxtArea = styled.textarea`
  width: 95%;
  max-width: 440px;
  height: 300px;
  padding: 10px;
`;
