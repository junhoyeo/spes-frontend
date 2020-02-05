import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import BrandCard from '../components/organisms/BrandCard';
import { Page } from '../components/atoms/Page';
import Text from '../components/atoms/Text';
import Footer from '../components/organisms/Footer';
import Input from '../components/molecules/Input';
import Button from '../components/atoms/Button';

const Link: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
          src="https://avatars0.githubusercontent.com/u/32605822?s=200"
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
        <Button>
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
