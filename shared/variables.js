import { css } from "@emotion/react"

export const breakpoints = [1024, 768]
export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

export const spacing = {
  sidePadding: '2.4rem',
  gridVerticalPadding: '3rem',
  gridHorizontalPadding: '1.4rem',
}

export const colors = {
  white: '#E4E6EB',
  black: '#18191A',
  lightBlue: '#E5E6EE',
  grey: {
    100: '#F1F1F1',
    200: '#9F9F9F',
    300: '#5E5E5E',
  },
}

export const globalVar = {
  bottomNavHeight: '6.5rem',
  radius: '0.3rem',
  border: `1px solid ${colors.white}`,
}

export const fontStyles = {
  navigation: '1.2rem',
  singleHeader: '2.4rem',
  body: {
    fontWeight: '500',
    margin: 0,
  },
  h1: css({
    fontWeight: '700',
    fontSize: '1.3rem',
    textTransform: 'uppercase',
    margin: 0,
    [mq[0]]: {
      fontSize: '1.7rem',
    },
  }),
}