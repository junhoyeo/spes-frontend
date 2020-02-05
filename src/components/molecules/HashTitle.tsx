import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { Text } from '../atoms/Text';

interface IHashTitle extends RouteComponentProps {
  id: string;
  text: string;
  className?: string;
}

const HashTitle: React.FC<IHashTitle> = ({ id, text, className = '', history }) => {
  const onClickHash = (hash: string): string => window.location.hash = `#${hash}`;

  return (
    <Title
      id={id}
      onClick={() => onClickHash(id)}
      className={className}
    >
      <i className="fas fa-paperclip" />
      {text}
    </Title>
  );
};

export default withRouter(HashTitle);

const Title = styled(Text)`
  cursor: pointer;
  color: rgba(27, 41, 68, 0.5);
  font-weight: 900;
  font-size: 1.5rem;
  margin: 1rem 0;

  i.fa-paperclip {
    margin-right: 0.8rem;
    transition: color 0.3s ease-in-out;
  }

  &:hover {

    i.fa-paperclip {
      color: #1B2944;
    }
  }
`;
