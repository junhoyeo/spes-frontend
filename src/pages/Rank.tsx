import * as React from 'react';
import styled from 'styled-components';

import Page from '../components/atoms/Page';
import Footer from '../components/organisms/Footer';
import RankCard from '../components/organisms/RankCard';
import Header from '../components/organisms/Header';

const Rank: React.FC = () => {
  return (
    <RankPage>
      <Header title="달성률 랭킹" />
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

const RankPage = styled(Page)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

const Section = styled.div`
  width: 83%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;
