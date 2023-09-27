import { Global } from '@emotion/react';
import { colors, fontStyles, spacing } from './variables';

export const flexStyles = (hasSpace = false) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: hasSpace ? 'space-between' : 'center'
})

export const globalStyles = (
  <Global
    styles={[
      {
        "*": {
          boxSizing: 'border-box',
        },
        "html": {
          width: '100%',
          height: '100%',
          fontFamily: 'Inter, Mona Sans, sans-serif',
          background: colors.grey[100],
          color: colors.black,
          margin: 0,
          padding: 0,
          scrollBehavior: 'smooth',
        },
        "body": {
          ...fontStyles.body,
          padding: spacing.sidePadding
        },
        "section": {
          // padding: `5rem ${spacing.sidePadding} 0`,
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
          color: colors.black,
          textDecoration: 'none',
        },
      },
    ]}
  />
)