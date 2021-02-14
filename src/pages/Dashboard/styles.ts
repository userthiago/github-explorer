import styled from 'styled-components';
import { pixelToRem } from '../../helpers/stylesUtils';

export const Title = styled.h1`
  max-width: 433px;
  margin-top: 100px;

  font-size: ${pixelToRem(48)};
  color: #3a3a3a;
  line-height: 1.16;
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

  .remove {
    &__change-area {
      visibility: ${({ enable }) => (enable ? 'visible' : 'hidden')};

      span {
        margin-left: 16px;

        color: #3a3a3a;
        font-weight: 500;
      }
    }
  }
`;
