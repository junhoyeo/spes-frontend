import * as React from 'react';
import styled from 'styled-components';

import Text from '../atoms/Text';

import passwordImage from '../../assets/illusts/password.svg';

const SuggestJoin: React.FC = () => {
  return (
    <SuggestContainer>
      <SuggestIllust src={passwordImage} />
      <SuggestText>
        빠르게 회원가입하고,<br />
        빠르게 이뤄 나가기
      </SuggestText>
    </SuggestContainer>
  );
};

export default SuggestJoin;

const SuggestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const SuggestIllust = styled.img`
  width: 215px;
`;

const SuggestText = styled(Text)`
  font-size: 15px;
  line-height: 1.5;
  margin-top: 1rem;
  text-align: center;
`;
