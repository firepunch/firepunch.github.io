import { css } from '@emotion/css'
import { fontStyles } from "../shared/variables"
import { flexStyles } from "../shared/styles"

export default function Footer() {
  return (
    <footer className={footerStyles.self}>
      <p className={footerStyles.title}>
        Mirim Yu<br />
        FrontEnd Developer
      </p>
      <nav className={footerStyles.nav}>
        <a href="https://www.linkedin.com/in/mirim-yu-259579163" target="_blank" rel="noopener noreferrer">
          Linkedin
        </a>
        <a href="https://github.com/firepunch" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </nav>
      <a href="#hero">Scroll to top</a>
      <p>©2023MirimYu</p>
    </footer>
  )
}

const footerStyles = {
  self: css({
    ...flexStyles(),
    flexDirection: 'column',
    gap: '1rem'
  }),
  title: css({
    ...fontStyles.h1,
    textAlign: 'center',
  }),
  nav: css({
    ...flexStyles(),
    gap: '1rem'
  })
}
