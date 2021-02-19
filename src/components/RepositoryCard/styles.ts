/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable indent */
import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { shade, lighten } from 'polished';
import { calcLineHeight, pixelToRem } from '../../helpers/stylesUtils';

const load = keyframes`
  0% {
        transform: translateY(-30px);
        opacity: 0;
    }

    1% {
        transform: translateY(-30px);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

interface CardData {
  position: number;
  $enableRemove?: boolean;
  $willBeRemove?: boolean;
}

export const Container = styled(Link)<CardData>`
  display: flex;
  align-items: center;

  background: #ffffff;
  height: 112px;
  width: 100%;
  padding: 14px;
  border-radius: 5px;
  border: solid 2px #ffffff;

  transition: 0.2s;
  animation: ${load} 0.4s linear;

  @media only screen and (max-width: 560px) {
    height: 96px;
  }

  & + & {
    margin-top: 16px;
  }

  ${({ $enableRemove }) =>
    !$enableRemove &&
    css`
      &:hover {
        background-color: ${shade(0.02, '#ffffff')};
        border: solid 2px ${shade(0.02, '#ffffff')};
        transform: translateX(8px);
      }
    `}

  .repository-card {
    &__img-profile {
      height: 84px;
      width: 84px;
      border-radius: 50%;

      @media only screen and (max-width: 560px) {
        height: 64px;
        width: 64px;
      }
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

      @media only screen and (max-width: 560px) {
        strong {
          font-size: ${pixelToRem(18)};
        }

        p {
          display: none;
        }
      }
    }

    &__icon {
      flex-shrink: 0;

      margin: 0 8px 0 16px;

      color: #c9c9d4;
    }
  }

  ${({ $enableRemove, $willBeRemove }) => {
    if ($enableRemove && $willBeRemove) {
      return css`
        background-color: ${lighten(0.4, '#c53030')};
        border: solid 2px #c53030;
        opacity: 1;

        .repository-card {
          &__info {
            strong {
              color: #c53030;
            }

            p {
              color: ${lighten(0.2, '#c53030')};
            }
          }

          &__icon {
            color: #c53030;
          }
        }
      `;
    }

    if ($enableRemove) {
      return css`
        opacity: 0.5;
      `;
    }

    return css`
      opacity: 1;
    `;
  }}
`;
