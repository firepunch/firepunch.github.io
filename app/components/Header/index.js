import { css } from '@emotion/css'
import { flexStyles } from '../../../shared/styles.js'
import Logo from './logo.js'

export default function Header() {
  return (
    <header className={headerStyles.self}>
      <Logo className={headerStyles.logo} />
      <nav className={headerStyles.nav}>
        <a href="/projects" className={headerStyles.navLink}>Projects</a>
        <a href="/about" className={headerStyles.navLink}>About</a>
      </nav>
    </header>
  )
}

const headerStyles = {
  self: css({
    ...flexStyles(true),
    marginBottom: '1.5rem',
  }),
  logo: css({
    width: '1.7rem'
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
