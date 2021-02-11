import React from 'react';

import { Container } from './styles';

interface InputData {
  value: string;
  placeholder: string;
  buttonValue: string;
  buttonType?: 'button' | 'submit';
  functionSetValue: (value: string) => void;
  errorMessage: string;
}

const InputField: React.FC<InputData> = ({
  value,
  placeholder,
  buttonValue,
  buttonType = 'button',
  functionSetValue,
  errorMessage,
}) => {
  return (
    <Container>
      <div
        className={`inputField__wrapper ${errorMessage && 'inputField--error'}`}
      >
        <input
          placeholder={placeholder}
          value={value}
          onChange={(e) => functionSetValue(e.target.value)}
        />
        {buttonType === 'button' && (
          <button type="button">{buttonValue}</button>
        )}
        {buttonType === 'submit' && (
          <button type="submit">{buttonValue}</button>
        )}
      </div>
      {errorMessage && (
        <span className="inputField__error">{errorMessage}</span>
      )}
    </Container>
  );
};

export default InputField;
