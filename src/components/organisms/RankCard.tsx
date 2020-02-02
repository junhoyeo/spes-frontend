import * as React from 'react';
import styled from 'styled-components';

import { Text } from '../atoms/Text';

export const RankCard: React.FC = () => {
  return (
    <Container>
      <UserInfo>
        <RankNumber>
          1
        </RankNumber>
        <Profile
          src="https://avatars0.githubusercontent.com/u/32605822?s=200"
        />
        <UserMeta>
          <Name>
            여준호
          </Name>
          <RoomNumber>
            가입된 방 5개
          </RoomNumber>
        </UserMeta>
      </UserInfo>
      <PointNumber>
        1,500p
      </PointNumber>
    </Container>
  );
};

export default RankCard;

const Container = styled.div`
`;

const UserInfo = styled.div`
`;

const RankNumber = styled(Text)`
`;

const Profile = styled.img`
`;

const UserMeta = styled.div`
`;

const Name = styled(Text)`
`;

const RoomNumber = styled(Text)`
`;

const PointNumber = styled(Text)`
`;
