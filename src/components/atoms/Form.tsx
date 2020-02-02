import styled from 'styled-components';

import { Text } from './Text';

export const CardContent = styled.div`
  display: flex;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const Section = styled.section`
  margin: 0.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled(Section)`
  display: flex;
  flex-direction: column;
  width: 30rem;

  div {
    /* for overriding styles in neumorphic-ui */
    width: inherit !important;
    font-size: 0.85rem;
    margin-bottom: 0.5rem;

    input {
      width: inherit !important;
      font-size: 0.8rem;
      padding: 1.5rem 0.8rem !important;
    }

    &:nth-last-child(1),
    &:nth-last-child(2) {
      border: 3px solid rgb(224, 229, 236) !important;
      transition: border-color 0.3s ease-in-out;
      padding: 13.5px 0 !important;

      &:hover {
        border: 3px solid rgba(255, 255, 255, 0.4) !important;
      }

      @media (max-width: 1000px) {
        padding: 10px 0 !important;
      }

    }
  }

  @media (max-width: 1000px) {
    width: 20rem;
  }
`;

export const FormTitle = styled(Text)`
  width: 100%;
  text-align: start;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  color: #78879A;
`;
