import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

import { calcLineHeight, pixelToRem } from '../../helpers/stylesUtils';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Link = styled(LinkRouter)`
  display: flex;
  align-items: center;

  color: #a8a8b3;
  font-size: ${pixelToRem(16)};
  line-height: ${calcLineHeight(18.75, 16)};
  font-weight: 700;

  transition: color 0.2s;

  svg {
    margin-right: 6px;
  }

  &:hover {
    color: #666;
  }
`;
