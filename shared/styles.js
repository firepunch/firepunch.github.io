import { css } from '@emotion/react'
import { colors, spacing } from './variables'

export const flexStyles = (hasSpace = false) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: hasSpace ? 'space-between' : 'center'
})

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
    font-weight: 300;
    padding: ${spacing.sidePadding};
    margin: 0;
  }
  ::-moz-selection, ::selection {
    background-color: ${colors.primary};
  }
  h1, h2, h3, h4 {
    margin: 0;
    font-size: 1.8rem;
    font-weight: 600;
  }
  p {
    margin: 0;
  }
  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a {
    color: ${colors.black};
    text-decoration: none;
  }
`
