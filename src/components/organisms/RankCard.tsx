import * as React from 'react';
import styled, { css } from 'styled-components';

import { Text } from '../atoms/Text';
import { NeuCard } from 'neumorphic-ui';

export const RankCard: React.FC = () => {
  return (
    <Container>
      <NeuCard>
        <ContentWrapper>
          <UserInfo>
            <Profile
              src="https://avatars0.githubusercontent.com/u/32605822?s=200"
            >
              <RankNumber>
                1
              </RankNumber>
            </Profile>
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
        </ContentWrapper>
      </NeuCard>
    </Container>
  );
};

export default RankCard;

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;

  & > div {
    height: fit-content !important;
    padding: 1rem !important;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

type ProfileProps = {
  src: string;
};

const Profile = styled.div<ProfileProps>`
  width: 120px;
  height: 120px;
  position: relative;
  background-size: contain;

  ${({ src }) => src && css`
    background-image: url(${src});
  `}
`;

const RankNumber = styled(Text)`
  font-size: 2.2rem;
  position: absolute;
  bottom: -10px;
  left: -10px;

  background: linear-gradient(145deg,rgb(224,229,236),rgb(232,238,247));
  box-shadow: 30px 30px 40px rgba(163,177,198,0.4), -30px -30px 40px rgba(163,177,198,0.3);
  border: 3px solid rgba(255,255,255,0.4);
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const UserMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;
`;

const Name = styled(Text)`
  font-size: 1.8rem;
`;

const RoomNumber = styled(Text)`
  font-size: 1.5rem;
`;

const PointNumber = styled(Text)`
  margin-right: 1rem;
  font-size: 2rem;
`;
