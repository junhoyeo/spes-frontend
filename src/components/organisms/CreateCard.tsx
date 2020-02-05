import { RouteComponentProps, withRouter } from 'react-router-dom';
import * as React from 'react';
import styled from 'styled-components';
import Text from '../atoms/Text';

const CreateCard: React.FC<RouteComponentProps> = ({ history }) => {
  const onClickCreate = () => history.push('/create');

  return (
    <Container onClick={onClickCreate}>
      <Content>
        <i className="far fa-plus-square" />
        <Title>
          새로 만들기
        </Title>
      </Content>
    </Container>
  );
};

export default withRouter(CreateCard);

const Container = styled.div`
  cursor: pointer;
  display: flex;
  height: 142px;
  border: 3px solid rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  background-color: white;
  box-shadow:
    inset 20px 30px 40px rgba(163,177,198,0.15),
    inset -20px -30px 40px rgba(163,177,198,0.1),
    20px 20px 40px rgba(163,177,198,0.15),
    -20px -20px 40px rgba(163,177,198,0.1);
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in;
  margin-bottom: 1rem;

  &:hover {
    background-color: rgba(163,177,198,0.15);
  }
`;

const Content = styled.div`
  width: 215px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  i {
    font-size: 3.2rem;
    margin-bottom: 0.5rem;
    text-shadow: rgba(163, 177, 198, 0.6) 3px 3px 9px;
  }
`;

const Title = styled(Text)`
  color: white;
  text-shadow: rgba(163, 177, 198, 0.8) 0px 3px 16px;
`;
