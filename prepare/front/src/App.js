import React from 'react';
// components
import Header from './components/header';
import Posts from './components/posts';
// styled-components
import { AppTag } from './styles/App';

const App = () => {
  return (
    <AppTag>
      <Header />
      <Posts />
    </AppTag>
  );
};

export default App;
