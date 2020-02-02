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
import BrandCard from '../components/organisms/BrandCard';
import { CardContent, Section, Form, FormTitle } from '../components/atoms/Form';

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
            <BrandCard title="새해 소망을 이룰 수 있는 희망, Spes™" />
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
