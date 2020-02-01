import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { NeuButton, NeuCard } from 'neumorphic-ui';

const Footer: React.FC<RouteComponentProps> = ({ history }) => {
  const onClickLogout = () => history.push('/auth/login');

  return (
    <Container>
      <NeuCard>
        <ButtonWrapper>
          <NeuButton
            text="로그아웃"
            onClick={onClickLogout}
          />
        </ButtonWrapper>
      </NeuCard>
    </Container>
  );
};

export default withRouter(Footer);

const Container = styled.footer`
  height: 10rem;
  width: 100%;

  & > div {
    height: 100% !important;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ButtonWrapper = styled.div`
  width: 83%;
  max-width: 1200px;

  & > div {
    width: 256px !important;
    border: 3px solid rgb(224, 229, 236) !important;
    transition: border-color 0.3s ease-in-out;

    &:hover {
      border: 3px solid rgba(255, 255, 255, 0.4) !important;
    }
  }
`;
