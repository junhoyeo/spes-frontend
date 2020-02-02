import * as React from 'react';
import styled from 'styled-components';
import { Text } from '../atoms/Text';
import { NeuCard } from 'neumorphic-ui';

const PostCard: React.FC = () => {
  return (
    <Container>
      <NeuCard>
        <Image src="https://github.com/junhoyeo.png" />
        <Meta>
          <Name>여준호</Name>
          <ContentText>ㅇㅇㅇㅇ</ContentText>
        </Meta>
        <Vote>
          <Item>
            찐이예요 0
          <i className="fas fa-thumbs-up" />
          </Item>
          <Item>
            <i className="fas fa-thumbs-down" />
            구라예요 1
        </Item>
        </Vote>
      </NeuCard>
    </Container>
  );
};

export default PostCard;

const Container = styled.div`
  position: relative;

  & > div {
    width: 100% !important;
    height: fit-content !important;
    display: flex;
  }
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;
`;

const Vote = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 30px;
  border: 3px solid #E5E9F1;
  box-shadow:
    15px 15px 16px rgba(163,177,198,0.3),
    -15px -15px 16px rgba(163,177,198,0.2);
`;

const ContentText = styled(Text)`
  color: #5b6470;
  font-weight: normal;
`;

const Name = styled(Text)`
  color: #5b6470;
`;

const Item = styled(Text)`
  color: white;
  cursor: pointer;

  i {
    color: #fefefe;
    font-size: 1.2rem;

    &:first-child {
      margin-left: 0.5rem;
    }

    &:last-child {
      margin-right: 0.5rem;
    }
  }

  &:first-child {
    margin-right: 0.5rem;
  }
`;
