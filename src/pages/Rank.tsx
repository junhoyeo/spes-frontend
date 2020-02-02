import * as React from 'react';
import styled from 'styled-components';

import Icon from '../components/atoms/Icon';
import Navbar from '../components/atoms/Navbar';
import Page from '../components/atoms/Page';
import Footer from '../components/organisms/Footer';
import PageTitle from '../components/molecules/PageTitle';
import { RankCard } from '../components/organisms/RankCard';

const Rank: React.FC = () => {
  return (
    <RankPage>
      <LeftAlignedNavbar>
        <ArrowIcon>
          <i className="fas fa-arrow-left" />
        </ArrowIcon>
        <PageTitle>
          달성률 랭킹
        </PageTitle>
      </LeftAlignedNavbar>
      <Section>
        <RankCard />
        <RankCard />
        <RankCard />
        <RankCard />
        <RankCard />
      </Section>
      <Footer />
    </RankPage>
  );
};

export default Rank;

const LeftAlignedNavbar = styled(Navbar)`
  justify-content: flex-start;
`;

const ArrowIcon = styled(Icon)`
  font-size: 2rem;

  i {
    text-shadow: 2px 2px 20px #A3B1C6;
  }
`;

const RankPage = styled(Page)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

const Section = styled.div`
`;
