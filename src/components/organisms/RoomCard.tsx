import * as React from 'react';
import styled from 'styled-components';

import { NeuCard } from 'neumorphic-ui';
import Text from '../atoms/Text';

import { RouteComponentProps, withRouter } from 'react-router-dom';
import { IRoomSummary } from '../../models/room';

interface RoomCardProps extends RouteComponentProps, IRoomSummary {}

export const RoomCard: React.FC<RoomCardProps> = ({
  _id,
  author,
  users,
  title,
  history,
}) => {
  const onClickCard = () => history.push('/room');

  return (
    <Container onClick={onClickCard}>
      <NeuCard>
        <Image
          src={author.profile}
          draggable="false"
        />
        <Info>
          <Title>
            {title}
          </Title>
          <Row>
            <Field>
              개설한 사람
            </Field>
            <Value>
              {author.username}
            </Value>
          </Row>
          <Row>
            <Field>
              현재 참가자
            </Field>
            <Value>
              {users.length}명
            </Value>
          </Row>
        </Info>
      </NeuCard>
    </Container>
  );
};

export default withRouter(RoomCard);

const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  flex-basis: 21%;

  /* for overriding styles in neumorphic-ui */
  & > div {
    width: 100% !important;
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

    &:hover {
      background: rgb(163,177,198);
      border-color: rgba(255, 255, 255, 0.8);
    }
  }

  @media (max-width: 580px) {
    width: 100%;
    flex-basis: unset;

    & > div {
      width: 100% !important;
      height: fit-content !important;
    }
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
  bottom: 20px;
  left: 0;
  right: 0;
  padding: 0 20px;

  @media (max-width: 580px) {
    position: unset;
    bottom: unset;
    margin-top: 1rem;
  }
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
