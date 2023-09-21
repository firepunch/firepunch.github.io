import { Global } from '@emotion/react';
import { colors, fontStyles, spacing } from './variables';

export const globalStyles = (
  <Global
    styles={[
      {
        "*": {
          boxSizing: 'border-box',
        },
        "html": {
          fontFamily: 'Inter, Mona Sans, sans-serif',
          background: colors.black,
          color: colors.white,
          margin: 0,
          padding: 0,
          scrollBehavior: 'smooth',
        },
        "body": {
          ...fontStyles.body,
          background: colors.grey[100],
          color: colors.black
        },
        "section": {
          padding: `5rem ${spacing.sidePadding} 0`,
        },
        "::-moz-selection": fontStyles.selection,
        "::selection": fontStyles.selection,
      }, {
        // Reset
        "p": {
          margin: 0,
        },
        "ul, li": {
          listStyle: 'none',
          padding: 0,
          margin: 0,
        },
        "a": {
          color: colors.white,
          textDecoration: 'none',
        },
      },
    ]}
  />
)