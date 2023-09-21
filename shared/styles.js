import { Global } from '@emotion/react';
import { colors, fontStyles, spacing } from './variables';

export const globalStyles = (
  <Global
    styles={[
      // {
      //   "@font-face": {
      //     fontFamily: 'Mona Sans',
      //     src: 'url("/static/Mona-Sans.woff2") format("woff2 supports variations"), url("/static/Mona-Sans.woff2") format("woff2-variations")',
      //     fontWeight: '200 900',
      //     fontStretch: '75% 125%',
      //   },
      // },
      {
        "*": {
          boxSizing: 'border-box',
        },
        "html": {
          fontFamily: 'Helvetica, sans-serif',
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