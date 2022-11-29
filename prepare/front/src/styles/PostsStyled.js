import styled from 'styled-components';

export const PostsWrapper = styled.div`
  margin-top: 2%;

  div {
    width: 95%;
    max-width: 700px;
    margin: auto;
    display: block;
    text-align: right;
  }

  div button {
    margin-bottom: 5px;
    width: 100px;
    height: 30px;
  }

  table {
    width: 95%;
    max-width: 700px;
    text-align: center;
    margin: auto;

    border-spacing: 0px;
    border-collapse: separate;

    td {
      border: solid 1px black;
      height: 25px;
    }

    tbody tr {
      cursor: pointer;
    }

    tbody tr:hover {
      background-color: #dcdcdc;
    }

    .titleTd {
      width: 400px;
      text-align: start;
      padding-left: 7px;
    }
  }
`;
