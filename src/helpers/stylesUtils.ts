import { FONT_SIZE } from './varUtils';

export const pixelToRem = (size: number): string =>
  // eslint-disable-next-line implicit-arrow-linebreak
  (size / FONT_SIZE).toFixed(2);
