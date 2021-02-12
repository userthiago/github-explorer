import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';
import { calcLineHeight, pixelToRem } from '../../helpers/stylesUtils';

export const Container = styled(Link)`
  display: flex;
  align-items: center;

  background: #ffffff;
  height: 112px;
  width: 100%;
  padding: 14px;
  border-radius: 5px;
  transition: 0.2s;

  & + & {
    margin-top: 16px;
  }

  &:hover {
    background-color: ${shade(0.02, '#ffffff')};
    transform: translateX(8px);
  }

  .repository-card {
    &__img-profile {
      height: 84px;
      width: 84px;
      border-radius: 50%;
    }

    &__info {
      flex: 1;

      margin-left: 20px;

      strong {
        color: #3d3d4d;
        font-size: ${pixelToRem(24)};
        line-height: ${calcLineHeight(28, 24)};
      }

      p {
        margin-top: 4px;

        color: #a8a8b3;
        font-size: ${pixelToRem(18)};
        line-height: ${calcLineHeight(21, 18)};
      }
    }

    &__icon {
      margin: 0 16px;

      font-size: ${pixelToRem(10)};
    }
  }
`;
