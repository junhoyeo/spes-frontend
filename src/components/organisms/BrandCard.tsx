import * as React from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.svg';

import { Text } from '../atoms/Text';

type BrandCardProps = {
  title: string;
};

const BrandCard: React.FC<BrandCardProps> = ({ title }) => (
  <BrandWrap>
    <LogoImage>
      <Image
        src={logo}
      />
    </LogoImage>
    <Title>
      {title}
    </Title>
  </BrandWrap>
);

export default BrandCard;

const BrandWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImage = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 5rem;
  border: 5px solid rgb(232, 238, 247);
  box-shadow:
    rgba(163, 177, 198, 0.7) 3px 3px 3px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 4px inset,
    rgba(163, 177, 198, 0.6) 9px 9px 16px;
  margin-bottom: 2rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 6.8rem;
  height: 6.8rem;
  margin-top: 3.5px;
  margin-left: 3.5px;
`;

const Title = styled(Text)`
  color: #1B2944;
  margin-bottom: 0;
`;
