import React, { MouseEvent } from 'react';
import { FaCheck } from 'react-icons/fa';

import { Container } from './styles';

interface CheckboxData {
  checked: boolean;
  disabled?: boolean;
  onChange: (e: MouseEvent<HTMLElement>) => void;
}

const Checkbox: React.FC<CheckboxData> = ({
  checked = false,
  disabled = false,
  onChange,
  children,
}) => {
  const handleOnChange = (e: MouseEvent<HTMLElement>): void => {
    if (!disabled) {
      onChange(e);
    }
  };

  return (
    <Container checked={checked} onClick={handleOnChange} disabled={disabled}>
      <div className="box">{checked && <FaCheck />}</div> {children}
    </Container>
  );
};

export default Checkbox;
