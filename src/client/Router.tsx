import * as React from 'react';
import { Route } from 'react-router-dom';

import { Login } from '../pages/Home';

export const Router: React.FC = () => {
  return (
    <>
      <Route exact={true} path="/login" component={Login} />
    </>
  );
};

export default Router;
