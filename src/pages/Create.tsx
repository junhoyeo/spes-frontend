import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { Page } from '../components/atoms/Page';
import Footer from '../components/organisms/Footer';
import Navbar from '../components/molecules/Navbar';
import Text from '../components/atoms/Text';
import Input from '../components/molecules/Input';

import formImage from '../assets/illusts/form.svg';
import Button from '../components/atoms/Button';
import Switch from '../components/molecules/Switch';

const Create: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [goal, setGoal] = useState<string>('');
  const [finish, setFinish] = useState<string>('');
  const [continuous, setContinuous] = useState<boolean>(true);

  const onClickCreate = (event: any) => {
    event.preventDefault();
    const userJSON = localStorage.getItem('user') as string || '{}';
    const { id: userID = '' } = JSON.parse(userJSON);
    const room = {
      title: name,
      goal,
      finishDate: 0,
      isContinuous: true,
      posts: [],
      users: userID,
    };
  };

  return (
    <CreatePage
      continuous={continuous}
    >
      <Navbar
        title="목표방 만들기"
        showBack={true}
      />
        <IllustContainer>
          <IllustImage src={formImage} />
          <IllustText>
            Spes™로 이룰 수 있습니다.<br />
            어떤 목표든 말이예요.
          </IllustText>
        </IllustContainer>
        <Form>
          <Input
            label="방 이름"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
            placeholder="방에 이름을 지어주세요."
          />
          <Input
            label="목표"
            value={goal}
            onChange={(e: any) => setGoal(e.target.value)}
            placeholder="여러분의 목표는 무엇인가요?"
          />
          <Switch
            label="반복되는 목표인가요?"
            checked={continuous}
            onChangeChecked={setContinuous}
          />
          {continuous ||
            <Input
              label="만료 기한"
              value={finish}
              onChange={(e: any) => setFinish(e.target.value)}
              type="date"
            />
          }
          <SubmitButton
            onClick={onClickCreate}
          >
            방 생성하기
          </SubmitButton>
        </Form>
      <Footer
        showLogout={true}
      />
    </CreatePage>
  );
};

export default Create;

type CreatePageProps = {
  continuous?: boolean;
};

const CreatePage = styled(Page)<CreatePageProps>`
  height: 100vh;

  ${({ continuous = false }) => !continuous && css`
    height: calc(100vh + 5.7rem);
  `};

  @media (max-height: 790px) {
    height: 150vh;
  }
`;

const IllustContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  cursor: pointer;
`;

const IllustImage = styled.img`
  width: 215px;
`;

const IllustText = styled(Text)`
  font-size: 15px;
  line-height: 1.5;
  margin: 1rem 0;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SubmitButton = styled(Button)`
  margin: 1rem 0;
`;
