import * as React from 'react';
import styled from 'styled-components';

import {
  NeuButton,
  NeuCard,
  NeuInput,
} from 'neumorphic-ui';

import { Page } from '../components/atoms/Page';
import { Text } from '../components/atoms/Text';

import logo from '../assets/logo.svg';

export const Login: React.FC = () => {
  return (
    <LoginPage>
      <NeuCard
        height="100%"
      >
        <CardContent>
          <Section>
            <BrandWrap>
              <LogoImage>
                <Image
                  src={logo}
                />
              </LogoImage>
              <Title>
                새해 소망을 이룰 수 있는 희망, Spes™
              </Title>
            </BrandWrap>
          </Section>
          <Form>
            <FormTitle>
              쉽고 간단하게 로그인.
            </FormTitle>
            <NeuInput placeholder="아이디" />
            <NeuInput placeholder="비밀번호" />
            <NeuButton text="로그인" />
            <NeuButton text="회원가입" />
          </Form>
        </CardContent>
      </NeuCard>
    </LoginPage>
  );
};

export default Login;

const LoginPage = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  /* for overriding styles in neumorphic-ui */
  & > div {
    width: fit-content !important;
    height: fit-content !important;
  }
`;

const CardContent = styled.div`
  display: flex;
`;

const Section = styled.section`
  margin: 0.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BrandWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImage = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 5rem;
  border: 5px solid rgb(232, 238, 247);
  box-shadow:
    rgba(163, 177, 198, 0.7) 3px 3px 3px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 4px inset,
    rgba(163, 177, 198, 0.6) 9px 9px 16px;
  margin-bottom: 2rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 6.8rem;
  height: 6.8rem;
  margin-top: 3.5px;
  margin-left: 3.5px;
`;

const Title = styled(Text)`
  color: #1B2944;
  margin-bottom: 0;
`;

const FormTitle = styled(Title)`
  width: 100%;
  text-align: start;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  color: #78879A;
`;

const Form = styled(Section)`
  display: flex;
  flex-direction: column;
  width: 30rem;

  div {
    /* for overriding styles in neumorphic-ui */
    width: inherit !important;
    font-size: 0.85rem;
    margin-bottom: 0.5rem;

    input {
      width: inherit !important;
      font-size: 0.8rem;
      padding: 1.5rem 0.8rem !important;
    }
  }
`;
