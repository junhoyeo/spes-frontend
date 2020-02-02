import * as React from 'react';
import styled from 'styled-components';

import Page from '../components/atoms/Page';
import Footer from '../components/organisms/Footer';

const Rank: React.FC = () => {
  return (
    <RankPage>
      <Footer />
    </RankPage>
  );
};

export default Rank;

const RankPage = styled(Page)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;
