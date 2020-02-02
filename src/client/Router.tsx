import * as React from 'react';
import { Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Rank from '../pages/Rank';
import Room from '../pages/Room';
import Link from '../pages/Link';
import Create from '../pages/Create';

export const Router: React.FC = () => {
  return (
    <>
      <Route exact={true} path="/" component={Home} />
      <Route path="/auth/login" component={Login} />
      <Route path="/rank" component={Rank} />
      <Route path="/create" component={Create} />
      <Route path="/link" component={Link} />
      <Route path="/room" component={Room} />
    </>
  );
};

export default Router;
