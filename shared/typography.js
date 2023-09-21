import { css, injectGlobal } from '@emotion/css';

const LIGHT_GRAY = '#F1F1F1';
const DARK_GRAY = '#9F9F9F';
const GRAY = '#5E5E5E';
const BLACK = '#0A0A0A';
const WHITE = '#FFF';

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    background: ${LIGHT_GRAY};
    color: ${BLACK};
    font-family: Helvetica, sans-serif;
  }
`

export const h1Style = css({
  fontSize: '3rem'
})
