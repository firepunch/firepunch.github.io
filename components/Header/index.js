import { css } from '@emotion/css'
import { flexStyles } from '../../shared/variables'
import Logo from './logo.js'

export default function Header() {
  return (
    <header className={headerStyles.self}>
      <a href="/">
        <Logo className={headerStyles.logo} />
      </a>
      <nav className={headerStyles.nav}>
        <a href="/projects" className={headerStyles.navLink}>Projects</a>
        <a href="/about" className={headerStyles.navLink}>About</a>
      </nav>
    </header>
  )
}

const headerStyles = {
  self: css({
    ...flexStyles,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '1.5rem',
  }),
  logo: css({
    width: '2.4rem'
  }),
  nav: css({
  }),
  navLink: css`
  text-transform: uppercase;
  &:not(:last-child) {
    padding-right: 1rem;
  }
`
}
