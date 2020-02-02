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
            <Image
              src="https://avatars0.githubusercontent.com/u/32605822?s=200"
              draggable="false"
            >
              <RankNumber
                className="medal"
              >
                1
              </RankNumber>
            </Image>
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
  border: 3px solid rgba(255, 255, 255, 0.4);
  background: linear-gradient(145deg,rgb(224,229,236),rgb(232,238,247));
  box-shadow:
    30px 30px 40px rgba(163,177,198,0.3),
    -30px -30px 40px rgba(163,177,198,0.2) !important;
  border-radius: 30px !important;

  & > div {
    height: fit-content !important;
    padding: 1rem !important;
  }

  &:first-child {

    span.medal {
      background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
      border: 3px solid #f6d365;
      color: white;
    }
  }

  &:nth-child(2) {

    span.medal {
      background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
      border: 3px solid #cfd9df;
      color: white;
    }
  }

  &:nth-child(3) {

    span.medal {
      background-image: linear-gradient(to top, #c79081 0%, #dfa579 100%);
      border: 3px solid #c79081;
      color: white;
    }
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

type ImageProps = {
  src: string;
};

const Image = styled.div<ImageProps>`
  width: 120px;
  height: 120px;
  position: relative;
  background-size: contain;
  border: 3px solid #E5E9F1;
  box-shadow:
    15px 15px 16px rgba(163,177,198,0.3),
    -15px -15px 16px rgba(163,177,198,0.2);
  border-radius: 30px;

  ${({ src }) => src && css`
    background-image: url(${src});
  `}
`;

const RankNumber = styled(Text)`
  font-size: 2.2rem;
  position: absolute;
  bottom: -10px;
  left: -10px;

  color: rgb(232, 238, 247);
  background-color: #cad5e3;
  box-shadow:
    30px 30px 40px rgba(163,177,198,0.4),
    -30px -30px 40px rgba(163,177,198,0.3);
  border: 3px solid rgba(255,255,255,0.4);
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-shadow: 1px 2px 32px rgba(0, 0, 0, 0.35);
`;

const UserMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;
`;

const Name = styled(Text)`
  font-size: 1.8rem;
  color: #5b6470;
`;

const RoomNumber = styled(Text)`
  font-size: 1.5rem;
  color: #78879A;
`;

const PointNumber = styled(Text)`
  margin-right: 1rem;
  font-size: 2rem;
  color: #1B2944;
`;
