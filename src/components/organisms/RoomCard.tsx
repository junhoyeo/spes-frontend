import * as React from 'react';
import styled from 'styled-components';

import { NeuCard } from 'neumorphic-ui';
import Text from '../atoms/Text';

export const RoomCard: React.FC = () => {
  return (
    <Container>
      <NeuCard>
        <Image
          src="https://avatars0.githubusercontent.com/u/32605822?s=200"
          draggable="false"
        />
        <Info>
          <Title>
            준호 습관 고쳐줄 사람 구함~!! 빨리 빨리!
          </Title>
          <Row>
            <Field>
              개설한 사람
            </Field>
            <Value>
              여준호
            </Value>
          </Row>
          <Row>
            <Field>
              현재 참가자
            </Field>
            <Value>
              5명
            </Value>
          </Row>
        </Info>
      </NeuCard>
    </Container>
  );
};

export default RoomCard;

const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  flex-basis: 12%;
  width: 215px;
  margin-bottom: 1.5rem;

  & > div {
    width: 215px !important;
    height: 312px !important;
    border: 3px solid rgba(255, 255, 255, 0.4);
    background: linear-gradient(145deg,rgb(224,229,236),rgb(232,238,247));
    box-shadow:
      30px 30px 40px rgba(163,177,198,0.3),
      -30px -30px 40px rgba(163,177,198,0.2) !important;
    border-radius: 30px !important;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    15px 15px 16px rgba(163,177,198,0.3),
    -15px -15px 16px rgba(163,177,198,0.2);
  border-radius: 30px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  bottom: 1rem;
`;

const Title = styled(Text)`
  color: #1f293d;
  text-align: start;
  font-weight: 900;
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Field = styled(Text)`
  color: #5b6470;
  font-size: 0.9rem;
  margin-right: 0.8rem;
`;

const Value = styled(Text)`
  color: #78879A;
  font-size: 0.9rem;
  font-weight: 700;
`;
