import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Page from '../components/atoms/Page';
import Footer from '../components/organisms/Footer';
import RankCard from '../components/organisms/RankCard';
import Navbar from '../components/molecules/Navbar';
import { IUser } from '../models/user';
import axios from 'axios';
import { toast } from 'react-toastify';

// const exampleRanks: IUser[] = [
//   {
//     username: '여준호',
//     profile: 'https://avatars0.githubusercontent.com/u/32605822?s=460&v=4',
//     achievement: [15, 18],
//     points: 1500,
//   },
//   {
//     username: '민승현',
//     profile: 'https://avatars3.githubusercontent.com/u/44062683?s=460&v=4',
//     achievement: [14, 18],
//     points: 1000,
//   },
//   {
//     username: '손지민',
//     profile: 'https://avatars2.githubusercontent.com/u/47082043?s=460&v=4',
//     achievement: [1, 18],
//     points: 200,
//   },
//   {
//     username: '고슷흐',
//     profile: 'https://avatars0.githubusercontent.com/u/10137?s=460&v=4',
//     achievement: [0, 18],
//     points: 100,
//   },
//   {
//     username: '고슷흐',
//     profile: 'https://avatars0.githubusercontent.com/u/10137?s=460&v=4',
//     achievement: [0, 18],
//     points: 100,
//   }
// ];

const Rank: React.FC = () => {
  const [ranks, setRanks] = useState<IUser[]>([]);

  useEffect(
    () => {
      const getRanks = async () => {
        try {
          axios.defaults.baseURL = 'http://spes-psbxv.run.goorm.io/';
          const token = localStorage.getItem('token') as string;
          axios.defaults.headers.common['Authorization'] = token;
          const { data: { users } } = await axios.get('/api/user');
          setRanks(users);
        } catch (error) {
          console.log(error);
          toast('데이터를 불러오는 데 실패했습니다.');
        }
      };

      getRanks();
    },
    [],
  );

  return (
    <Page>
      <Navbar
        title="달성률 랭킹"
        showBack={true}
      />
      <Section>
        {ranks.map((user, idx) => {
          const { username, profile, achievement, points = 1500 } = user;
          return (
            <RankCard
              key={`rank-${idx}`}
              profile={profile ? profile : 'http://via.placeholder.com/150.png'}
              name={username}
              // @ts-ignore
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
