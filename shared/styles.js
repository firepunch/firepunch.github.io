import { css } from '@emotion/react'
import { colors, fontStyles, spacing } from './variables'

export const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  html {
    width: 100%;
    height: 100%;
    font-family: Inter, Mona Sans, sans-serif;
    font-size: 62.5%;
    background: ${colors.grey[100]};
    color: ${colors.black};
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }
  body {
    font-size: 1.8rem;
    margin: 0;
    ${fontStyles.regular}
  }
  .main {
    position: relative;
  }
  ::-moz-selection, ::selection {
    background-color: ${colors.primary};
  }
  h1, h2, h3, h4 {
    margin: 0;
    font-size: 1.8rem;
    ${fontStyles.semiBold}
  }
  p, figure {
    margin: 0;
  }
  img {
    display: block;
  }
  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a {
    color: ${colors.black};
    text-decoration: none;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.15em;
  }
`
