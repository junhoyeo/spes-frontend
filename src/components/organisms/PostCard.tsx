import * as React from 'react';
import styled, { css } from 'styled-components';
import { Text } from '../atoms/Text';

import { IPost } from '../../models/post';
import { toast } from 'react-toastify';
import axios from 'axios';

const PostCard: React.FC<IPost> = ({
  _id,
  author,
  created,
  agreed,
  agreedUsers,
  content,
  image
}) => {
  const { username } = author;
  const onClickVote = async () => {
    if (agreed) {
      toast('이미 투표하셨어요!');
      return;
    }

    try {
      axios.defaults.baseURL = 'https://spes-psbxv.run.goorm.io/';
      const token = localStorage.getItem('token') as string;
      axios.defaults.headers.common['Authorization'] = token;
      await axios.post(`/api/post/vote/${_id}`);
      toast('투표했습니다!');
      window.location.reload()
    } catch (error) {
      console.log(error);
      toast('투표에 실패했습니다.');
    }
  };

  return (
    <Container>
      <Image
        src={image ? image : 'http://via.placeholder.com/150.png'}
      />
      <Meta>
        <Name>
          {username}
        </Name>
        <ContentText>
          {content}
        </ContentText>
      </Meta>
      <Vote>
        <Item
          onClick={onClickVote}
          agreed={agreed}
        >
          사실로 투표하기
          <i className="fas fa-thumbs-up" />
          <span>{agreedUsers.length}</span>
        </Item>
      </Vote>
    </Container>
  );
};

export default PostCard;

const Container = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  width: 100%;
  border: 3px solid rgba(255, 255, 255, 0.4);
  background: linear-gradient(145deg,rgb(224,229,236),rgb(232,238,247));
  box-shadow:
    30px 30px 40px rgba(163,177,198,0.3),
    -30px -30px 40px rgba(163,177,198,0.2);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  overflow:hidden;
  margin-bottom: 1rem;
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
  min-width: 120px;
  object-fit: cover;
  border-radius: 30px;
  border: 3px solid #E5E9F1;
  box-shadow:
    15px 15px 16px rgba(163,177,198,0.3),
    -15px -15px 16px rgba(163,177,198,0.2);
`;

const ContentText = styled(Text)`
  color: #5b6470;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: -0.5px;
`;

const Name = styled(Text)`
  color: #1f293d;
`;

type ItemProps = {
  agreed?: boolean;
};

const Item = styled(Text)<ItemProps>`
  color: rgba(27, 41, 68, 0.7);
  cursor: pointer;
  font-size: 15px;
  display: flex;
  align-items: center;

  ${({ agreed = false }) => agreed && css`
    color: rgb(27, 41, 68);
  `};

  &:hover {
    color: rgba(27, 41, 68, 0.8);
  }

  i {
    font-size: 16px;

    &:first-child {
      margin-left: 0.5rem;
    }

    &:last-child {
      margin-right: 0.5rem;
    }
  }

  span {
    font-size: 16px;
    margin-left: 0.5rem;
  }

  &:first-child {
    margin-right: 0.5rem;
  }
`;
