import React from 'react';
import { HashRouter } from 'react-router-dom';

import Router from './client/Router';

const App = () => {
  return (
    <>
      <HashRouter basename={window.location.pathname || ''}>
        <Router />
      </HashRouter>
    </>
  );
}

export default App;
