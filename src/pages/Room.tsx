import * as React from 'react';
import styled from 'styled-components';
import { Page } from '../components/atoms/Page';
import Header from '../components/organisms/Header';
import PageTitle from '../components/molecules/PageTitle';
import { Text } from '../components/atoms/Text';
import HashTitle from '../components/molecules/HashTitle';
import Footer from '../components/organisms/Footer';

const Room: React.FC = () => {
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
          <SectionContent>
          </SectionContent>
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
