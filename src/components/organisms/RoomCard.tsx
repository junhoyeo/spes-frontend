import * as React from 'react';
import styled from 'styled-components';

import { NeuCard } from 'neumorphic-ui';
import Text from '../atoms/Text';

export const RoomCard: React.FC = () => {
  return (
    <Container>
      <NeuCard>
        <Info>
          <Title>
            준호 습관 고쳐줄 사람 구함~!!
          </Title>
        </Info>
      </NeuCard>
    </Container>
  );
};

export default RoomCard;

const Container = styled.div`
  cursor: pointer;

  & > div {
    width: 250px !important;
    height: 250px !important;
    border: 3px solid rgba(255, 255, 255, 0.4);
    background: linear-gradient(145deg,rgb(224,229,236),rgb(232,238,247));
    box-shadow:
      30px 30px 40px rgba(163,177,198,0.3),
      -30px -30px 40px rgba(163,177,198,0.2) !important;
    border-radius: 30px !important;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled(Text)`
  color: #78879A;
  text-align: start;
  font-weight: 700;
  font-size: 1.2rem;
`;
