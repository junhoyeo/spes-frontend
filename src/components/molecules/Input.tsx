import * as React from 'react';
import styled from 'styled-components';
import { Text } from '../atoms/Text';

type InputProps = {
  label?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
};

const Input: React.FC<InputProps> = ({
  label, type = 'text', value,
  placeholder, onChange,
}) => {
  return (
    <Container>
      <Label>
        {label}
      </Label>
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Container>
  );
};

const Container = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.8rem;
`;

const Label = styled(Text)`
  font-size: 13px;
  margin-bottom: 2.5px;
`;

const StyledInput = styled.input`
  border-radius: 10px;
  outline: 0px;
  width: auto;
  height: 20px;
  padding: 5px 5px 5px 8px;
  font-weight: 600;
  color: rgb(161, 169, 181);
  border: 5px solid rgb(232, 238, 247);
  background-color: rgba(224, 229, 236, 0.6);
  box-shadow: rgba(163, 177, 198, 0.7) 3px 3px 3px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 4px inset,
    rgba(163, 177, 198, 0.6) 9px 9px 16px;
  width: inherit;
  font-size: 0.95rem;
  padding: 1.5rem 0.8rem;
`;

export default Input;
