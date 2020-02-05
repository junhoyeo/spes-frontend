import React, { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import Page from '../components/atoms/Page';
import Footer from '../components/organisms/Footer';
import RoomCard from '../components/organisms/RoomCard';
import CreateCard from '../components/organisms/CreateCard';
import HashTitle from '../components/molecules/HashTitle';
import Navbar from '../components/molecules/Navbar';
import SuggestNew from '../components/templates/SuggestNew';
import { IRoomSummary } from '../models/room';
import { toast } from 'react-toastify';

// const exampleRoomSummary: IRoomSummary[] = [
//   {
//     _id: '111',
//     title: '나랑 같이 매일 일일커밋 하기 할 사람! 코딩코딩~!!',
//     author: {
//       profile: 'https://github.com/junhoyeo.png',
//       username: '여준호',
//     },
//     users: [],
//   }
// ];

export const Home: React.FC<RouteComponentProps> = ({ history }) => {
  useEffect(
    () => {
      const token = localStorage.getItem('token') || '';
      if (!token) {
        toast('먼저 로그인 후 진행해 주세요.');
        history.push('/auth/login');
      }
    },
    [history],
  );

  const [rooms, setRooms] = useState<IRoomSummary[]>([]);

  useEffect(
    () => {
      const getRooms = async () => {
        try {
          axios.defaults.baseURL = 'http://spes-psbxv.run.goorm.io/';
          const token = localStorage.getItem('token') as string;
          axios.defaults.headers.common['Authorization'] = token;
          const { data: { rooms } } = await axios.get('/api/room');
          setRooms(rooms.map((room: any) => {
            const author = room.users[0];
            return {
              ...room,
              author,
            }
          }));
          console.log(rooms);
        } catch (error) {
          console.log(error);
          toast('데이터를 불러오는 데 실패했습니다.');
        }
      };

      getRooms();
    },
    [],
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
          <SuggestNew rooms={rooms} />
          <Cards>
            {rooms.map((room, idx) => {
              const { _id, title, author, users } = room;
              return (
                <RoomCard
                  key={`room-${idx}`}
                  _id={_id}
                  title={title}
                  author={author}
                  users={users}
                />
              );
            })}
            {!rooms.length || <CreateCard />}
          </Cards>
        </Section>
      </Content>
      <Footer
        showLogout={true}
      />
    </Page>
  );
};

export default withRouter(Home);

const Content = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Section = styled.section`
  width: 100%;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
`;
