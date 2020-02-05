import * as React from 'react';
import styled from 'styled-components';

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
    </Container>
  );
};

export default withRouter(RoomCard);

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

  &:hover {
    background: rgb(163,177,198, 0.3);
    border-color: rgba(255, 255, 255, 0.6);
  }
`;

const Image = styled.img`
  width: 100px;
  min-width: 100px;
  height: 100px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    15px 15px 16px rgba(163,177,198,0.3),
    -15px -15px 16px rgba(163,177,198,0.2);
  border-radius: 30px;
  margin-right: 1rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled(Text)`
  color: #1f293d;
  text-align: start;
  font-weight: 900;
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  word-break: keep-all;
  letter-spacing: -0.5px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Field = styled(Text)`
  color: #5b6470;
  font-size: 13px;
  margin-right: 0.8rem;
  letter-spacing: -0.5px;
`;

const Value = styled(Text)`
  color: #78879A;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.5px;
`;
