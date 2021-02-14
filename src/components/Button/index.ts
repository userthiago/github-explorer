import styled, { css } from 'styled-components';
import { shade } from 'polished';

const Button = styled.button`
  padding: 4px 12px;
  border: 0;
  border-radius: 2px;
  transition: background-color 0.2s;

  color: #ffffff;
  font-weight: 500;

  ${({ color }) => {
    const bgColor = color || '#aaaaaa';

    return css`
      background-color: ${bgColor};

      &:hover {
        background-color: ${shade(0.2, bgColor)};
      }
    `;
  }}
`;

export default Button;
