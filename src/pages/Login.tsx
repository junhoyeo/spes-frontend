import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import { Page } from '../components/atoms/Page';
import BrandCard from '../components/organisms/BrandCard';
import Footer from '../components/organisms/Footer';
import Input from '../components/molecules/Input';
import Button from '../components/atoms/Button';
import Text from '../components/atoms/Text';
import SuggestJoin from '../components/templates/SuggestJoin';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [modeForJoin, setModeForJoin] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onClickJoin = async (event: any) => {
    event.preventDefault();
    const payload = {
      email,
      username,
      password,
    };
    axios.defaults.baseURL = 'https://spes-psbxv.run.goorm.io/';
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

  const onClickLogin = async (event: any) => {
    event.preventDefault();
    const payload = {
      email,
      password,
    };
    axios.defaults.baseURL = 'https://spes-psbxv.run.goorm.io/';
    axios.defaults.headers.common['Accept'] = '*/*';
    try {
      const { data: { token } } = await axios.post('/api/auth/login', payload);
      console.log(token);
      axios.defaults.headers.common['Authorization'] = token;
      localStorage.setItem('token', token);
    } catch (error) {
      console.log(error);
      toast('로그인 실패');
      return;
    }
    history.push('/');
  };

  const onClickMoveToJoin = (event: any) => {
    event.preventDefault();
    setModeForJoin(true);
  };

  const onClickMoveToLogin = (event: any) => {
    event.preventDefault();
    setModeForJoin(false);
  }

  return (
    <Page>
      <Header>
        {((showJoin: boolean) => {
          if (showJoin) {
            return <SuggestJoin />;
          }
          return (
            <BrandCard
              title={
                <Title>
                  새해 소망 이루기,<br />
                  올해는 Spes™와 함께
                </Title>
              }
            />
          );
        })(modeForJoin)}
      </Header>
      <Form>
          <Input
            label="이메일"
            type="email"
            value={email}
            placeholder="이메일을 입력해 주세요."
            onChange={(e: any) => setEmail(e.target.value)}
          />
          {
            modeForJoin &&
              <Input
                label="사용자 이름"
                type="text"
                value={username}
                placeholder="여러분의 멋진 이름을 입력하세요."
                onChange={(e: any) => setUsername(e.target.value)}
              />
          }
          <Input
            label="비밀번호"
            type="password"
            value={password}
            placeholder="비밀번호를 안전하게 입력하세요."
            onChange={(e: any) => setPassword(e.target.value)}
          />
          {(() => {
            if (modeForJoin) {
              return (
                <>
                  <Button
                    onClick={onClickJoin}
                  >
                    회원가입
                  </Button>
                  <Button
                    onClick={onClickMoveToLogin}
                  >
                    또는 로그인
                  </Button>
                </>
              );
            }

            return (
              <>
                <Button
                  onClick={onClickLogin}
                >
                  로그인
                </Button>
                <Button
                  onClick={onClickMoveToJoin}
                >
                  또는 회원가입
                </Button>
              </>
            );
          })()}
        </Form>
      <Footer />
    </Page>
  );
};

export default withRouter(Login);

const Header = styled.header`
  margin-bottom: 2.5rem;
`;

const Form = styled.form`
  width: 100%;
  margin-bottom: 2rem;
`;

const Title = styled(Text)`
  font-size: 15px;
  line-height: 1.5;
  text-align: center;
`;
