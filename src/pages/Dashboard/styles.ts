import styled from 'styled-components';
import { pixelToRem } from '../../helpers/stylesUtils';

export const Title = styled.h1`
  max-width: 433px;
  margin-top: 100px;

  font-size: ${pixelToRem(48)};
  color: #3a3a3a;
  line-height: 1.16;

  @media only screen and (max-width: 560px) {
    font-size: ${pixelToRem(36)};
    margin-top: 60px;
  }
`;

export const Form = styled.form`
  display: flex;

  max-width: 714px;
  margin-top: 40px;
`;

export const RepositoriesList = styled.div`
  margin-top: 16px;
`;

interface RepositoryMenuData {
  enable: boolean;
}

export const RepositoryMenu = styled.div<RepositoryMenuData>`
  display: flex;
  justify-content: space-between;

  margin-top: 120px;

  label {
    height: 27px;
    margin-left: auto;
  }

  @media only screen and (max-width: 560px) {
    flex-direction: column-reverse;
    align-items: flex-end;

    margin-top: 40px;

    label {
      font-size: ${pixelToRem(14)};
    }
  }

  .remove {
    &__change-area {
      visibility: ${({ enable }) => (enable ? 'visible' : 'hidden')};

      span {
        margin-left: 16px;

        color: #3a3a3a;
        font-weight: 500;
      }

      @media only screen and (max-width: 560px) {
        z-index: 1;
        position: fixed;
        left: 0;
        bottom: ${({ enable }) => (enable ? '0' : '-54px')};
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 0.2s ease-in-out;

        background: #ffffff;
        width: 100%;
        height: 54px;
        padding: 0 20px;

        -webkit-box-shadow: 0px -1px 10px -1px rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 0px -1px 10px -1px rgba(0, 0, 0, 0.3);
        box-shadow: 0px -1px 10px -1px rgba(0, 0, 0, 0.3);

        span {
          margin-left: 8px;

          font-size: ${pixelToRem(16)};
          white-space: nowrap;
        }
      }
    }
  }
`;
