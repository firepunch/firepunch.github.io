import { css } from '@emotion/css'
import Logo from './logo.js';

const Header = () => (
  <header className={headerStyle}>
    <Logo className={logoStyle} />
    <nav className={navStyle}>
      <a href="/projects" className={navLinkStyle}>Projects</a>
      <a href="/projects" className={navLinkStyle}>About</a>
    </nav>
  </header>
)

const headerStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
})

const logoStyle = css({
  width: '4rem'
})

const navStyle = css`

`

const navLinkStyle = css`
  &:after {
    content: ', ';
  }
`

export default Header
