import styled from 'styled-components';
import { shade } from 'polished';
import { pixelToRem } from '../../helpers/stylesUtils';

export const Title = styled.h1`
  max-width: 433px;
  margin-top: 100px;

  font-size: ${pixelToRem(48)}rem;
  color: #3a3a3a;
  line-height: 1.16;
`;

export const Form = styled.form`
  display: flex;

  max-width: 714px;
  margin-top: 40px;
`;

export const Input = styled.input`
  background: #ffffff;
  height: 72px;
  padding: 0 30px;
  border: 0;
  border-radius: 5px 0 0 5px;
  flex: 1;

  color: #3a3a3a;
  font-size: ${pixelToRem(20)}rem;
  font-weight: 400;
  line-height: 1.15;

  &::placeholder {
    color: #a8a8b3;
  }
`;

export const Button = styled.button`
  background: #04d361;
  height: 72px;
  width: 210px;
  border: 0;
  border-radius: 0 5px 5px 0;

  color: #ffffff;
  font-size: ${pixelToRem(18)}rem;
  font-weight: bold;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#04d361')};
  }
`;
