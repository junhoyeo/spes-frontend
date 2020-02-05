import * as React from 'react';
import styled from 'styled-components';
import { NeuButton, NeuCard, NeuInput } from 'neumorphic-ui';
import BrandCard from '../components/organisms/BrandCard';
// import { FooterForLink } from '../components/organisms/Footer';

import { Page } from '../components/atoms/Page';
import Navbar from '../components/molecules/Navbar';

const Link: React.FC = () => {
  return (
    <Page>
      {/* <Navbar
        title="목표방 입장하기"
        hideMeta={true}
      />
      <NeuCard>
        <CardContent>
          <Section>
            <BrandCard
              title="친구가 Spes™를 함께 사용하고 싶다네요."
              src="https://avatars0.githubusercontent.com/u/32605822?s=200"
            />
          </Section>
          <Form>
            <FormTitle>
              이미 있는 계정으로 로그인을 해주세요.
            </FormTitle>
            <NeuInput
              placeholder="이메일"
            />
            <NeuInput
              placeholder="비밀번호"
            />
            <NeuButton text="로그인" />
            <NeuButton text="계정 생성하러 가기" />
          </Form>
        </CardContent>
      </NeuCard> */}
    </Page>
  );
};

export default Link;
