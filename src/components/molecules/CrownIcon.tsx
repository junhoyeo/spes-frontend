import styled from 'styled-components';

import Icon from '../atoms/Icon';

export const CrownIcon = styled(Icon)`
  background: linear-gradient(145deg, #FBD961, #F8D12A);
  box-shadow: 30px 30px 40px rgba(248, 209, 42, 0.4),
    -30px -30px 40px rgba(248, 209, 42, 0.3);
  border: 3px solid rgba(256, 256, 0, 0.4);

  i.fa-crown {
    font-size: 2rem;
    color: white;
  }

  &:hover {
    background: linear-gradient(145deg, rgba(248, 209, 42), #FBD961);
    box-shadow: inset 15px 15px 20px -20px rgba(128, 129, 42, 0.3);
  }
`;

export default CrownIcon;
