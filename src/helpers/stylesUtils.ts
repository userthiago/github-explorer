/* eslint-disable implicit-arrow-linebreak */
import { FONT_SIZE } from './varUtils';

export const pixelToRem = (size: number): string =>
  `${(size / FONT_SIZE).toFixed(2)}rem`;

export const calcLineHeight = (lineHeight: number, fontSize: number): string =>
  (lineHeight / fontSize).toFixed(3);
