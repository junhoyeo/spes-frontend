import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Router from './client/Router';

import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
  *,
  button,
  input {
    box-sizing: border-box;
    font-family: 'Poppins', 'Noto Sans KR', sans-serif;
    user-select: none;

    &:focus {
      outline: none;
    }
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
      <BrowserRouter basename="/">
        <Router />
      </BrowserRouter>
      <ToastContainer position={toast.POSITION.TOP_RIGHT} />
    </>
  );
}

export default App;
