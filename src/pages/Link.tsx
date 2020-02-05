import React, { useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from "react-router";
import styled from 'styled-components';

import BrandCard from '../components/organisms/BrandCard';
import { Page } from '../components/atoms/Page';
import Text from '../components/atoms/Text';
import Footer from '../components/organisms/Footer';
import Input from '../components/molecules/Input';
import Button from '../components/atoms/Button';

import axios from 'axios';
import { toast } from 'react-toastify';

interface MatchParams {
  roomID: string;
}

const Link: React.FC<RouteComponentProps<MatchParams>> = ({ history, match }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [room, setRoom] = useState<any>({title:'', goal:'', posts:[], users:[]});
  const { roomID } = match.params;

  const getRoom = async () => {
    axios.defaults.baseURL = 'https://spes-psbxv.run.goorm.io/';
    const token = localStorage.getItem('token') as string || '';
    axios.defaults.headers.common['Authorization'] = token;
    try {
      const { data: roomData } = await axios.get(`/api/room/${roomID}`);
      setRoom(roomData);
      console.log(roomData);
    } catch (error) {
      toast('목표방 조회에 실패했습니다.');
    }
  };

  useEffect(
    () => {
      getRoom();
    },
    [],
  );

  const onClickLoginToAccept = async (event: any) => {
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

    try {
      await axios.post(`/api/room/${roomID}`, payload);
      toast('입장 성공!');
      history.push('/');
    } catch (error) {
      toast('입장 실패');
    }
  };

  const profile = room.users.length ? room.users[0].profile : '';
  return (
    <Page>
      <Header>
        <BrandCard
          title={
            <Title>
              여러분의 친구가 함께<br />
              Spes™로 목표를 이루고 싶다네요.<br />
              로그인해서 함께할 수 있어요.
            </Title>
          }
          src={profile ? profile : 'http://via.placeholder.com/150.png'}
        />
      </Header>
      <Form>
        <Input
          label="이메일"
          type="email"
          value={email}
          placeholder="이메일을 입력해 주세요."
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <Input
          label="비밀번호"
          type="password"
          value={password}
          placeholder="비밀번호를 안전하게 입력하세요."
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <Button onClick={onClickLoginToAccept}>
          로그인으로 초대장 수락하기
        </Button>
      </Form>
      <Footer />
    </Page>
  );
};

export default Link;

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
