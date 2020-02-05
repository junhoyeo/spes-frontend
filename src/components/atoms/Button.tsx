import styled from 'styled-components';

const Button = styled.button`
  display: block;
  border-radius: 4px;
  outline: 0px;
  font-weight: 600;
  color: rgba(233, 239, 246, 0.8);
  text-align: center;
  border: 0px;
  cursor: pointer;
  width: 100%;
  box-shadow:
    rgba(180, 191, 207, 0.7) 9px 9px 16px,
    rgba(159, 169, 181, 0.45) -5px -5px 16px;
  padding: 12.5px 0;
  background-color: #1B2944;
  font-size: 0.95rem;
  transition: background-color 0.3s ease-in;

  &:hover,
  &:focus {
    background-color: #2F2E41;
  }
`;

export default Button;
