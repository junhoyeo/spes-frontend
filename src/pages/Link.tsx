import * as React from 'react';
import styled from 'styled-components';
import { NeuButton, NeuCard, NeuInput } from 'neumorphic-ui';
import BrandCard from '../components/organisms/BrandCard';
import { CardContent, Section, Form, FormTitle } from '../components/atoms/Form';
import { FooterForLink } from '../components/organisms/Footer';

import { Page } from '../components/atoms/Page';
import Header from '../components/organisms/Header';

const Link: React.FC = () => {
  return (
    <div style={{height: '100%', position: 'relative'}}>
    <LinkPage>
      <Header
        className="header"
        title="목표방 입장하기"
        onlyText={true}
      />
      <NeuCard>
        <CardContent>
          <Section>
            <BrandCard title="친구가 Spes™를 함께 사용하고 싶다네요." />
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
      </NeuCard>
    </LinkPage>
    <FooterForLink />
    </div>
  );
};

export default Link;

const LinkPage = styled(Page)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;

  & > div:not(.header) {
    /* width: 83% !important;
    max-width: 1200px; */
    width: fit-content !important;
    height: fit-content !important;
  }

`;
