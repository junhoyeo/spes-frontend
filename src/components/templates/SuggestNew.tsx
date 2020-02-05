import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Text from '../atoms/Text';

import createImage from '../../assets/illusts/create.svg';
import { IRoomSummary } from '../../models/room';

type SuggestNewProps = {
  rooms: IRoomSummary[];
};

const SuggestNew: React.FC<SuggestNewProps & RouteComponentProps> = ({ rooms, history }) => {
  if (rooms.length) {
    return (null);
  }

  const onClickCreate = () => history.push('/create');

  return (
    <SuggestContainer
      onClick={onClickCreate}
    >
      <SuggestImage src={createImage} />
      <SuggestText>
        어서 첫 번째 목표방을<br />
        만들어보세요. 🎉
      </SuggestText>
    </SuggestContainer>
  );
};

export default withRouter(SuggestNew);

const SuggestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  cursor: pointer;
`;

const SuggestImage = styled.img`
  width: 215px;
`;

const SuggestText = styled(Text)`
  font-size: 15px;
  line-height: 1.5;
  margin: 1rem 0;
  text-align: center;
`;
