import * as React from 'react';
import ReactSwitch from 'react-switch';
import styled from 'styled-components';
import Text from '../atoms/Text';

type SwitchProps = {
  label: string;
  checked: boolean;
  onChangeChecked: (v: boolean) => void;
};

const Switch: React.FC<SwitchProps> = ({ label, checked, onChangeChecked }) => {
  return (
    <Container>
      <Label>
        {label}
      </Label>
      <ReactSwitch
        checked={checked}
        onChange={onChangeChecked}
        onColor="#1B2944"
        offColor="#C8D1DD"
        boxShadow="rgba(163, 177, 198, 0.6) 3px 3px 9px"
      />
    </Container>
  );
};

export default Switch;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const Label = styled(Text)`
  font-size: 13px;
  margin-bottom: 2.5px;
`;
