import React, { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Page from '../components/atoms/Page';
import PointIcon from '../components/molecules/PointIcon';
import CrownIcon from '../components/molecules/CrownIcon';
import Footer from '../components/organisms/Footer';
import RoomCard from '../components/organisms/RoomCard';
import CreateCard from '../components/organisms/CreateCard';
import PageTitle from '../components/molecules/PageTitle';
import HashTitle from '../components/molecules/HashTitle';
import Navbar from '../components/molecules/Navbar';

export const Home: React.FC<RouteComponentProps> = ({ history }) => {
  useEffect(
    () => {
      const token = localStorage.getItem('token') || '';
      if (!token) {
        history.push('/auth/login');
      }
    },
    [history],
  );

  return (
    <Page>
      <Navbar title="로비" />
      <Content>
        <Section>
          <HashTitle
            id="created"
            text="내 목표방"
          />
          <Cards>
            {/* <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard /> */}
            <CreateCard />
          </Cards>
        </Section>
      </Content>
      <Footer />
    </Page>
  );
};

export default withRouter(Home);

const Content = styled.main`
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 5rem;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(auto-fill,minmax(252px, 1fr));
`;
