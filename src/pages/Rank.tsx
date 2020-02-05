import * as React from 'react';
import styled from 'styled-components';

import Page from '../components/atoms/Page';
import Footer from '../components/organisms/Footer';
import RankCard from '../components/organisms/RankCard';
import Header from '../components/organisms/Header';

const ranks = Array(8).fill({
  username: 'junhoyeo',
  profile: 'http://via.placeholder.com/150.png',
  roomCount: 5,
  points: 1500,
});

const Rank: React.FC = () => {
  return (
    <RankPage>
      <Header title="달성률 랭킹" />
      <Section>
        {ranks.map((user, idx) => {
          const { username, profile, roomCount, points } = user;
          return (
            <RankCard
              key={`rank-${idx}`}
              profile={profile}
              name={username}
              roomCount={roomCount}
              rankNumber={idx + 1}
              points={points}
            />
          );
        })}
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
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;
