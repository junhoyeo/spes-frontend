import styled from 'styled-components';
import { Text } from './Text';

const TextButton = styled(Text)`
  font-size: 0.85rem;
  cursor: pointer;
  color: rgba(27, 41, 68, 0.7);

  &:hover {
    color: rgba(27, 41, 68, 0.8);
  }
`;

export default TextButton;
