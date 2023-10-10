import { cx, css } from '@emotion/css'
import { useRouter } from 'next/router'

import { colors, flexStyles, spacing } from '../../shared/variables'
import Logo from './logo.js'

export default function Header() {
  const { pathname } = useRouter()
  const customCls = pathname === '/projects/ideas-on-board' && 'iob'

  return (
    <header className={cx(headerStyles.header, headerStyles[customCls])}>
      <a href="/">
        <Logo className={headerStyles.logo} />
      </a>
      <nav className={headerStyles.nav}>
        <a href="/projects" className={headerStyles.navLink}>Projects</a>
        <a href="/about" className={headerStyles.navLink}>About</a>
      </nav>
    </header >
  )
}

const headerStyles = {
  header: css({
    ...flexStyles,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: `1.5rem ${spacing.sidePadding}`,
  }),
  iob: css({
    // backgroundColor: colors.iob,
  }),
  logo: css({
    width: '2.2rem'
  }),
  nav: css({
    fontSize: '1.6rem'
  }),
  navLink: css`
  &:not(:last-child) {
    padding-right: 1rem;
  }
`
}
