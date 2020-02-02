import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from '../components/atoms/Navbar';
import Page from '../components/atoms/Page';
import PointIcon from '../components/molecules/PointIcon';
import CrownIcon from '../components/molecules/CrownIcon';
import Footer from '../components/organisms/Footer';
import RoomCard from '../components/organisms/RoomCard';
import CreateCard from '../components/organisms/CreateCard';
import PageTitle from '../components/molecules/PageTitle';
import HashTitle from '../components/molecules/HashTitle';

export const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const onClickCrown = () => history.push('/rank');

  return (
    <LoginPage>
      <SpacedNavbar>
        <PageTitle>
          로비
        </PageTitle>
        <Icons>
          <PointIcon>
            1,500p
          </PointIcon>
          <CrownIcon
            onClick={onClickCrown}
          >
            <i className="fas fa-crown" />
          </CrownIcon>
        </Icons>
      </SpacedNavbar>
      <Content>
        <Section>
          <HashTitle
            id="created"
            text="내 목표방"
          />
          <Cards>
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <CreateCard />
          </Cards>
        </Section>
      </Content>
      <Footer />
    </LoginPage>
  );
};

export default withRouter(Home);

const LoginPage = styled(Page)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

const SpacedNavbar = styled(Navbar)`
  justify-content: space-between;
`;

const Icons = styled.div`
  display: flex;
`;

const Content = styled.main`
  width: 83%;
  max-width: 1200px;
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
