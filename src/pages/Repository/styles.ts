import styled from 'styled-components';
import { calcLineHeight, pixelToRem } from '../../helpers/stylesUtils';

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  margin-top: 80px;

  img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
  }

  .user__info {
    margin-left: 32px;
    strong {
      color: #3d3d4d;
      font-size: ${pixelToRem(36)};
      line-height: ${calcLineHeight(42.19, 36)};
    }

    p {
      margin-top: 12px;

      color: #737380;
      font-size: ${pixelToRem(20)};
      line-height: ${calcLineHeight(23.44, 20)};
    }
  }
`;

export const RepositoryInfo = styled.div`
  margin-top: 50px;
  display: flex;

  .info__number {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & + .info__number {
      margin-left: 80px;
    }

    strong {
      color: #3d3d4d;
      font-size: ${pixelToRem(36)};
      line-height: ${calcLineHeight(42.16, 36)};
    }

    p {
      margin-top: 4px;
      color: #6c6c80;
      font-size: ${pixelToRem(20)};
      line-height: ${calcLineHeight(23.44, 20)};
    }
  }
`;

export const RepositoryIssuesList = styled.div`
  margin-top: 80px;
`;
