import { css } from '@emotion/css'

import { colors, flexStyles, fontStyles, spacing } from '../shared/variables'
import Logo from '../components/Header/logo'

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <a href="/" className={footerStyles.title}>
        Mirim Yu <Logo /><br />
        FrontEnd Engineer
      </a>
      <nav className={footerStyles.nav}>
        <a href="https://www.linkedin.com/in/mirim-yu" target="_blank" rel="noopener noreferrer">
          Linkedin
        </a>
        <a href="https://github.com/firepunch" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </nav>
      <div className={footerStyles.lower}>
        <p>Currently based in Canada</p>
        <p>© Mirim Yu 2023</p>
      </div>
    </footer>
  )
}

const footerStyles = {
  footer: css({
    ...flexStyles,
    gap: '2rem',
    textAlign: 'center',
    padding: `4.8rem ${spacing.doublePadding}`,
    'a:hover': {
      textDecoration: 'underline'
    }
  }),
  title: css({
    ...fontStyles.semiBold,
    fontSize: '2.4rem',
    display: 'block',
    svg: {
      width: '1.4rem',
    },
  }),
  nav: css({
    ...flexStyles,
    flexDirection: 'row',
  }),
  lower: css({
    color: colors.grey[200],
    fontSize: '1.4rem'
  }),
}
