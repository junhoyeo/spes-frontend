import * as React from 'react';
import { Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';

export const Router: React.FC = () => {
  return (
    <>
      <Route exact={true} path="/" component={Home} />
      <Route path="/auth/login" component={Login} />
    </>
  );
};

export default Router;
