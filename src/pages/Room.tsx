import React, { useState } from 'react';
import styled from 'styled-components';
import { Page } from '../components/atoms/Page';
import { Text } from '../components/atoms/Text';
import HashTitle from '../components/molecules/HashTitle';
import Footer from '../components/organisms/Footer';
import { NeuButton, NeuInput } from 'neumorphic-ui';
import PostCard from '../components/organisms/PostCard';
import Navbar from '../components/molecules/Navbar';

const Room: React.FC = () => {
  const [image, setImage] = useState<string>('http://via.placeholder.com/150.png');

  const onChangeImage = (event: any) =>
    setImage(URL.createObjectURL(event.target.files[0]));

  return (
    <Page>
      <Navbar
        title="방 정보"
        showBack={true}
      />
      <PageContent>
        <Section>
          <FittedHashTitle
            id="basic"
            text="기본 정보"
          />
          <RoomInfo>
            <RoomTitle>준호랑 같이 매일매일 커밋할 사람~</RoomTitle>
            <RoomDesc>현재 참가자 3명 / 여준호, 손지민, 민승현</RoomDesc>
          </RoomInfo>
        </Section>
        <Section>
          <FittedHashTitle
            id="goal"
            text="목표"
          />
          <SectionContent>
            매일 매일 GitHub에 커밋을 한다.
          </SectionContent>
        </Section>
        <Section>
          <FittedHashTitle
            id="write"
            text="글쓰기"
          />
          <FormWrap>
            <Image src={image} />
            <Form>
              <input type="file" onChange={onChangeImage} />
              <NeuInput
                type="text"
                placeholder="오늘은 어떻게 노력했나요?"
              />
              <NeuButton
                text="작성하기"
              />
            </Form>
          </FormWrap>
        </Section>
        <Section>
          <FittedHashTitle
            id="posts"
            text="목록"
          />
          <SectionContent>
            {/* <PostCard /> */}
          </SectionContent>
        </Section>
      </PageContent>
      <Footer />
    </Page>
  );
};

export default Room;

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const RoomInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const RoomTitle = styled(Text)`
  font-size: 2rem;
  margin-left: 0;
`;

const RoomDesc = styled(Text)`
  color: #5b6470;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  &:not(:first-child) {
    margin: 2.5rem 0;
  }
`;

const SectionContent = styled(Text)`
  color: #5b6470;
  font-weight: normal;
`;

const FittedHashTitle = styled(HashTitle)`
  width: fit-content;
`;

const FormWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-right: 1rem;
  border: 3px solid #E5E9F1;
  box-shadow:
    15px 15px 16px rgba(163,177,198,0.3),
    -15px -15px 16px rgba(163,177,198,0.2);
  border-radius: 30px;
`;

const Form = styled.form`
`;
