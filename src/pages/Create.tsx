import * as React from 'react';
import styled from 'styled-components';
import { NeuButton, NeuCard, NeuInput } from 'neumorphic-ui';
import BrandCard from '../components/organisms/BrandCard';
import Header from '../components/organisms/Header';
import { Page } from '../components/atoms/Page';
import { CardContent, Section, Form, FormTitle } from '../components/atoms/Form';
import Footer from '../components/organisms/Footer';

const Create: React.FC = () => {
  return (
    <div style={{height: '100%', position: 'relative'}}>
    <CreatePage>
      <Header className="header" title="목표방 만들기" />
      <NeuCard>
        <CardContent>
          <Section>
            <BrandCard title="Spes™로 새로운 목표를 이루어 보세요." />
          </Section>
          <Form>
            <FormTitle>
              친구들과 하나의 목표를 이루기 위한 여정을 시작하세요.
            </FormTitle>
            <NeuInput
              placeholder="방 이름"
            />
            <NeuInput
              placeholder="목표"
            />
            <NeuButton text="방 만들기" />
            <DummyDiv />
          </Form>
        </CardContent>
      </NeuCard>
      <CustomFooter />
    </CreatePage>
    </div>
  );
};

export default Create;

const CreatePage = styled(Page)`
  width: 100%;
  height: 100%;
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

const DummyDiv = styled.div`
  display: none;
`;

const CustomFooter = styled(Footer)`
  position: absolute;
  bottom: 0;
  left: 0;
  right:0;
`;
