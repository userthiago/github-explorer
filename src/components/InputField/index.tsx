import React from 'react';

import { FaCircleNotch, FaSearch } from 'react-icons/fa';
import { Container } from './styles';

interface InputData {
  value: string;
  placeholder: string;
  buttonValue: string;
  functionSetValue: (value: string) => void;
  errorMessage: string;
  loading: boolean;
}

const InputField: React.FC<InputData> = ({
  value,
  placeholder,
  buttonValue,
  functionSetValue,
  errorMessage,
  loading,
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
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? (
            <FaCircleNotch className="loading" size={20} />
          ) : (
            <>
              <FaSearch />
              <span>{buttonValue}</span>
            </>
          )}
        </button>
      </div>
      {errorMessage && (
        <span className="inputField__error">{errorMessage}</span>
      )}
    </Container>
  );
};

export default InputField;
