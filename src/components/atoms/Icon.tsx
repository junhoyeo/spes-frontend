import styled from 'styled-components';

export const Icon = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.5rem;
  width: 5.5rem;
  background: linear-gradient(145deg, rgb(224, 229, 236), rgb(232, 238, 247));
  box-shadow: 30px 30px 40px rgba(163, 177, 198, 0.4),
    -30px -30px 40px rgba(163, 177, 198, 0.3);
  border: 3px solid rgba(255, 255, 255, 0.4);
  width: 110px;
  height: 110px;
  font-size: 30px;
  border-radius: 30px;
  color: white;
  vertical-align: top;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    background: linear-gradient(145deg, rgb(163, 177, 198, 0.5), rgb(232, 238, 247));
    box-shadow: inset 15px 15px 20px -20px rgba(163, 177, 198, 0.5);
  }
`;

export default Icon;
