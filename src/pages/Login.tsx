import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import {
  NeuButton,
  NeuInput,
} from 'neumorphic-ui';

import { Page } from '../components/atoms/Page';
import BrandCard from '../components/organisms/BrandCard';
import { CardContent, Section, Form, FormTitle } from '../components/atoms/Form';
import Footer from '../components/organisms/Footer';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [modeForJoin, setModeForJoin] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onClickJoin = async () => {
    const payload = {
      email,
      username,
      password,
    };
    axios.defaults.baseURL = 'http://spes-psbxv.run.goorm.io/';
    axios.defaults.headers.common['Accept'] = '*/*';
    try {
      const { data } = await axios.post('/api/auth/register', payload);
      console.log(data);
      toast("회원가입 성공! 이제, 로그인 해주세요.");
    } catch (error) {
      console.log(error);
      toast("회원가입 실패!");
      return;
    }
    setModeForJoin(false);
  };

  const onClickLogin = async () => {
    const payload = {
      email,
      password,
    };
    axios.defaults.baseURL = 'http://spes-psbxv.run.goorm.io/';
    axios.defaults.headers.common['Accept'] = '*/*';
    try {
      const { data: { token } } = await axios.post('/api/auth/login', payload);
      console.log(token);
      localStorage.setItem('token', token);
    } catch (error) {
      console.log(error);
      toast('로그인 실패');
      return;
    }
    history.push('/');
  };

  const onClickMoveToJoin = () => setModeForJoin(true);
  const onClickMoveToLogin = () => setModeForJoin(false);

  return (
    <Page>
      <CardContent>
        <Section>
          <BrandCard title="새해 소망을 이룰 수 있는 희망, Spes™" />
        </Section>
        <Form>
          <FormTitle>
            { modeForJoin ? '빠르게 회원가입 진행.' : '쉽고 간단하게 로그인.' }
          </FormTitle>
          <NeuInput
            type="email"
            value={email}
            placeholder="이메일"
            onChange={(e: any) => setEmail(e.target.value)}
          />
          {
            modeForJoin &&
              <NeuInput
                type="text"
                value={username}
                placeholder="사용자 이름"
                onChange={(e: any) => setUsername(e.target.value)}
              />
          }
          <NeuInput
            type="password"
            value={password}
            placeholder="비밀번호"
            onChange={(e: any) => setPassword(e.target.value)}
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
      <Footer />
    </Page>
  );
};

export default withRouter(Login);
