import styled from 'styled-components';

export const Page = styled.main`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 2rem 1.8rem;
  position: relative;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export default Page;
