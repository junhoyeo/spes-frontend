import React from 'react';
import { HashRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Router from './client/Router';

const GlobalStyle = createGlobalStyle`
  *,
  button,
  input {
    box-sizing: border-box;
    font-family: 'Poppins', 'Noto Sans KR', sans-serif;
  }

  html,
  body,
  div#root {
    margin: 0;
    height: 100%;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <HashRouter basename={window.location.pathname || ''}>
        <Router />
      </HashRouter>
    </>
  );
}

export default App;
