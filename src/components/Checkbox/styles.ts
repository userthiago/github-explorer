/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
import styled, { css } from 'styled-components';

interface CheckboxData {
  checked: boolean;
  disabled: boolean;
}

export const Container = styled.label<CheckboxData>`
  display: flex;
  align-items: center;

  color: ${(props) => (props.checked ? '#04d361' : '#3a3a3a')};
  font-weight: 500;

  cursor: pointer;

  .box {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 16px;
    height: 16px;
    margin-right: 8px;
    border-radius: 2px;
    border: 1px solid #3a3a3a;
    transition: background-color 0.2s ease-in-out, border-color 0.1s ease-in-out;

    ${({ checked }) =>
      checked &&
      css`
        background-color: #04d361;
        border-color: #04d361;

        color: #04d361;

        svg {
          color: #ffffff;
        }
      `}
  }
`;
