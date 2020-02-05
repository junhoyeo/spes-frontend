import * as React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Rank from '../pages/Rank';
import Room from '../pages/Room';
import Link from '../pages/Link';
import Create from '../pages/Create';

export const Router: React.FC = () => {
  return (
    <Container>
      <Route exact={true} path="/" component={Home} />
      <Route path="/auth/login" component={Login} />
      <Route path="/rank" component={Rank} />
      <Route path="/create" component={Create} />
      <Route path="/link" component={Link} />
      <Route path="/room" component={Room} />
    </Container>
  );
};

export default Router;

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f8f9fa;
  min-height: 100vh;
`;
