import * as React from 'react';
import styled from 'styled-components';

import Page from '../components/atoms/Page';
import Footer from '../components/organisms/Footer';
import RankCard from '../components/organisms/RankCard';
import Navbar from '../components/molecules/Navbar';

const ranks = Array(8).fill({
  username: 'junhoyeo',
  profile: 'http://via.placeholder.com/150.png',
  achievement: [15, 18],
  points: 1500,
});

const Rank: React.FC = () => {
  return (
    <Page>
      <Navbar
        title="달성률 랭킹"
        showBack={true}
      />
      <Section>
        {ranks.map((user, idx) => {
          const { username, profile, achievement, points } = user;
          return (
            <RankCard
              key={`rank-${idx}`}
              profile={profile}
              name={username}
              achievement={achievement}
              rankNumber={idx + 1}
              points={points}
            />
          );
        })}
      </Section>
      <Footer />
    </Page>
  );
};

export default Rank;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  width: 100%;
`;
