import * as React from 'react';
import styled, { css } from 'styled-components';

import { Text } from '../atoms/Text';

type RankCardProps = {
  name: string;
  achievement: [number, number];
  rankNumber: number;
  profile: string;
  points: number;
};

export const RankCard: React.FC<RankCardProps> = ({
  name,
  rankNumber,
  achievement,
  profile,
  points,
}) => {
  const percent = (achievement[0] / (achievement[1] || 1) * 100).toFixed(2);
  return (
    <Container>
      <ContentWrapper>
        <Image
          src={profile}
          draggable="false"
        >
          <RankNumber
            className="medal"
          >
            {rankNumber.toLocaleString('ko')}
          </RankNumber>
        </Image>
        <UserInfo>
          <Name>
            {name}
          </Name>
          <PointNumber>
            {`${points.toLocaleString('ko')}p`}
          </PointNumber>
          <Achievements>
            달성률 <span>{percent}%</span>
          </Achievements>
        </UserInfo>
      </ContentWrapper>
    </Container>
  );
};

export default RankCard;

const Container = styled.div`
  cursor: pointer;
  display: flex;
  width: 100%;
  border: 3px solid rgba(255, 255, 255, 0.4);
  background: linear-gradient(145deg,rgb(224,229,236),rgb(232,238,247));
  box-shadow:
    30px 30px 40px rgba(163,177,198,0.3),
    -30px -30px 40px rgba(163,177,198,0.2);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  overflow:hidden;
  margin-bottom: 1rem;

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
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;
`;

type ImageProps = {
  src: string;
};

const Image = styled.div<ImageProps>`
  width: 100px;
  height: 100px;
  position: relative;
  background-size: contain;
  border: 3px solid #E5E9F1;
  box-shadow:
    15px 15px 16px rgba(163,177,198,0.3),
    -15px -15px 16px rgba(163,177,198,0.2);
  border-radius: 30px;

  ${({ src }) => src && css`
    background-image: url(${src});
    background-size: cover;
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

const Name = styled(Text)`
  font-size: 20px;
  color: #5b6470;
`;

const Achievements = styled(Text)`
  color: #1B2944;
  font-size: 22px;
`;

const PointNumber = styled(Text)`
  font-size: 14.5px;
`;
