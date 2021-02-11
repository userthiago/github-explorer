import styled from 'styled-components';
import { shade } from 'polished';

import { pixelToRem } from '../../helpers/stylesUtils';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .inputField {
    &__wrapper {
      display: flex;
    }

    &__error {
      display: block;
      margin-top: 8px;

      color: #c53030;
      font-size: ${pixelToRem(16)};
    }

    &--error {
      input {
        border: solid #c53030;
        border-width: 1px 0 1px 1px;

        color: #c53030;

        &::placeholder {
          color: #c53030;
        }

        &:focus {
          color: #3a3a3a;

          &::placeholder {
            color: #a8a8b3;
          }
        }
      }

      button {
        background: #c53030;

        &:hover {
          background: ${shade(0.2, '#c53030')};
        }
      }
    }
  }

  input {
    background: #ffffff;
    height: 72px;
    padding: 0 30px;
    border: 0;
    border-radius: 5px 0 0 5px;
    flex: 1;

    color: #3a3a3a;
    font-size: ${pixelToRem(20)};
    font-weight: 400;
    line-height: 1.15;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    background: #04d361;
    height: 72px;
    width: 210px;
    border: 0;
    border-radius: 0 5px 5px 0;

    color: #ffffff;
    font-size: ${pixelToRem(18)};
    font-weight: bold;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;
