import styled from 'styled-components';

export const PostsWrapper = styled.div`
  margin-top: 2%;

  div {
    width: 95%;
    max-width: 500px;
    margin: auto;
    display: block;
    text-align: right;
  }

  div button {
    margin-bottom: 3px;
    width: 100px;
    height: 30px;
  }

  table {
    width: 95%;
    max-width: 500px;
    text-align: center;
    margin: auto;

    border-spacing: 0px;
    border-collapse: separate;

    td {
      border: solid 1px black;
    }
  }
`;
