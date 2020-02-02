import React, { useState } from 'react';
import styled from 'styled-components';
import { Page } from '../components/atoms/Page';
import Header from '../components/organisms/Header';
import PageTitle from '../components/molecules/PageTitle';
import { Text } from '../components/atoms/Text';
import HashTitle from '../components/molecules/HashTitle';
import Footer from '../components/organisms/Footer';
import { NeuButton, NeuInput } from 'neumorphic-ui';

const Room: React.FC = () => {
  const [image, setImage] = useState<string>('http://via.placeholder.com/150.png');

  const onChangeImage = (event: any) =>
    setImage(URL.createObjectURL(event.target.files[0]));

  return (
    <RoomPage>
      <Header className="header" title="방 정보" />
      <PageContent>
        <RoomInfo>
          <RoomTitle>준호랑 같이 매일매일 커밋할 사람~</RoomTitle>
          <RoomDesc>현재 참가자 3명 / 여준호, 손지민, 민승현</RoomDesc>
        </RoomInfo>
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
          </SectionContent>
        </Section>
      </PageContent>
      <Footer />
    </RoomPage>
  );
};

export default Room;

const RoomPage = styled(Page)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

const PageContent = styled.div`
  width: 83%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;

const RoomInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const RoomTitle = styled(PageTitle)`
  font-size: 2rem;
  margin-left: 0;
`;

const RoomDesc = styled(Text)`
  color: #5b6470;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2.5rem 0;
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

const Form = styled.div`
  width: calc(100% - 120px);

  & > div {
    width: 100% !important;
    margin-bottom: 0.8rem;

    input {
      width: inherit !important;
      font-size: 0.95rem;
      padding: 1.5rem 0.8rem !important;
    }
  }

  /* styles for file input tag */
  & > input {
    font-size: 1.1rem;
    display: flex;
    margin: 0.8rem 0;
    font-weight: 800;
    color: rgb(185, 194, 206);
  }

  & > div:nth-child(3) {
    border: 3px solid rgb(224, 229, 236) !important;
    transition: border-color 0.3s ease-in-out;
    padding: 13.5px 0 !important;

    &:hover {
      border: 3px solid rgba(255, 255, 255, 0.4) !important;
    }
  }
`;
