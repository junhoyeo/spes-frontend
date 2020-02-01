import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

import {
  NeuButton,
  NeuCard,
  NeuInput,
} from 'neumorphic-ui';

import { Page } from '../components/atoms/Page';
import { Text } from '../components/atoms/Text';

import logo from '../assets/logo.svg';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [modeForJoin, setModeForJoin] = useState<boolean>(false);

  const onClickJoin = () => {
    toast("회원가입 성공! 이제, 로그인 해주세요.");
    setModeForJoin(false)
  };
  const onClickLogin = () => history.push('/');

  const onClickMoveToJoin = () => setModeForJoin(true);
  const onClickMoveToLogin = () => setModeForJoin(false);

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
              { modeForJoin ? '빠르게 회원가입 진행.' : '쉽고 간단하게 로그인.' }
            </FormTitle>
            <NeuInput
              placeholder="이메일"
            />
            {
              modeForJoin &&
                <NeuInput
                  placeholder="사용자 이름"
                />
            }
            <NeuInput
              placeholder="비밀번호"
            />
            {(() => {
              if (modeForJoin) {
                return (
                  <>
                    <NeuButton
                      text="회원가입"
                      onClick={onClickJoin}
                    />
                    <NeuButton
                      text="또는 로그인"
                      onClick={onClickMoveToLogin}
                    />
                  </>
                );
              }

              return (
                <>
                  <NeuButton
                    text="로그인"
                    onClick={onClickLogin}
                  />
                  <NeuButton
                    text="또는 회원가입"
                    onClick={onClickMoveToJoin}
                  />
                </>
              );
            })()}
          </Form>
        </CardContent>
      </NeuCard>
    </LoginPage>
  );
};

export default withRouter(Login);

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

  @media (max-width: 820px) {
    flex-direction: column;
  }
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

    &:nth-last-child(1),
    &:nth-last-child(2) {
      border: 3px solid rgb(224, 229, 236) !important;
      transition: border-color 0.3s ease-in-out;

      &:hover {
        border: 3px solid rgba(255, 255, 255, 0.4) !important;
      }

      @media (max-width: 1000px) {
        padding: 10px 0 !important;
      }
    }
  }

  @media (max-width: 1000px) {
    width: 20rem;
  }
`;
