import * as React from 'react';
import styled from 'styled-components';
import { NeuButton, NeuCard } from 'neumorphic-ui';

export const Footer: React.FC = () => {
  return (
    <Container>
      <NeuCard>
        <ButtonWrapper>
          <NeuButton
            text="로그아웃"
          />
        </ButtonWrapper>
      </NeuCard>
    </Container>
  );
};

export default Footer;

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

  & > div {
    width: 256px !important;
    border: 3px solid rgba(255, 255, 255, 0.4) !important;
  }
`;
