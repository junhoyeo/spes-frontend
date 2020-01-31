import * as React from 'react';
import { Route } from 'react-router-dom';

import { Home } from '../pages/Home';

export const Router: React.FC = () => {
  return (
    <>
      <Route exact={true} path="/" component={Home} />
    </>
  );
};

export default Router;
