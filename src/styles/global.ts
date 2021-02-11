import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/imgs/github-background.svg';
import { FONT_SIZE } from '../helpers/varUtils';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;

  }

  body, input, button {
    font: ${FONT_SIZE}px Roboto, sans-serif;
  }

  #root {
    max-width: 968px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button, a {
    cursor: pointer;
  }
`;
