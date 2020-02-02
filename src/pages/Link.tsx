import * as React from 'react';
import styled from 'styled-components';

import { Page } from '../components/atoms/Page';
import Header from '../components/organisms/Header';

const Link: React.FC = () => {
  return (
    <LinkPage>
      <Header title="공유하기" />
    </LinkPage>
  );
};

export default Link;

const LinkPage = styled(Page)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;
