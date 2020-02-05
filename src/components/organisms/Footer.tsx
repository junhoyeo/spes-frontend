import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import Text from '../atoms/Text';

interface IFooter extends RouteComponentProps {
  className?: string;
}

const Footer: React.FC<IFooter> = ({ history, className = '' }) => {
  const onClickLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    history.push('/auth/login');
  };

  return (
    <Container className={className}>
      <Content>
        <Text>© 2020 Spes. All rights reserved.</Text>
      </Content>
    </Container>
  );
};

export default withRouter(Footer);

const Container = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(224, 229, 236);
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;

  span {
    font-size: 0.85rem;
    color: rgba(27, 41, 68, 0.5);
  }
`;
