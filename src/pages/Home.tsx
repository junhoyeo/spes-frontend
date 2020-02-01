import * as React from 'react';
import styled from 'styled-components';

import Page from '../components/atoms/Page';
import { Text } from '../components/atoms/Text';
import RoomCard from '../components/organisms/RoomCard';

export const Home: React.FC = () => {
  const onClickHash = (hash: string): string => window.location.hash = `#${hash}`;

  return (
    <LoginPage>
      <Top>
        <Icon className="point">
          1500p
        </Icon>
        <Icon className="crown">
          <i className="fas fa-crown" />
        </Icon>
      </Top>
      <Content>
        <Section>
          <Title
            id="created"
            onClick={() => onClickHash('created')}
          >
            <i className="fas fa-paperclip" />
            내 목표방
          </Title>
          <Cards>
            <RoomCard />
          </Cards>
        </Section>
        <Section>
          <Title
            id="helping"
            onClick={() => onClickHash('helping')}
          >
            <i className="fas fa-paperclip" />
            내가 도와주는 목표방
          </Title>
          <Cards>
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
          </Cards>
        </Section>
      </Content>
    </LoginPage>
  );
};

export default Home;

const LoginPage = styled(Page)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

const Top = styled.div`
  width: 83%;
  display: flex;
  justify-content: flex-end;
`;

const Icon = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.5rem;
  width: 5.5rem;
  background: linear-gradient(145deg, rgb(224, 229, 236), rgb(232, 238, 247));
  box-shadow: 30px 30px 40px rgba(163, 177, 198, 0.4),
    -30px -30px 40px rgba(163, 177, 198, 0.3);
  border: 3px solid rgba(255, 255, 255, 0.4);
  width: 110px;
  height: 110px;
  font-size: 30px;
  border-radius: 30px;
  color: white;
  vertical-align: top;

  &.crown {
    background: linear-gradient(145deg, #FBD961, #F8D12A);
    box-shadow: 30px 30px 40px rgba(248, 209, 42, 0.4),
      -30px -30px 40px rgba(248, 209, 42, 0.3);
    border: 3px solid rgba(256, 256, 0, 0.4);

    i.fa-crown {
      font-size: 2rem;
      color: white;
    }
  }

  &.point {
    color: black;
    font-weight: 800;
    font-size: 1.5rem;
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const Content = styled.main`
  width: 83%;
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 5rem;
  }
`;

const Title = styled(Text)`
  color: #1B2944;
  font-weight: 900;
  font-size: 2rem;
  margin-bottom: 1rem;
  cursor: pointer;

  i.fa-paperclip {
    color: rgba(27, 41, 68, 0.5);
    margin-right: 0.8rem;
    transition: color 0.3s ease-in-out;
  }

  &:hover {

    i.fa-paperclip {
      color: #1B2944;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;
