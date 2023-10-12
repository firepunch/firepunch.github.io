import { css, cx } from '@emotion/css'
import { useRouter } from 'next/router'

import { flexStyles, fontStyles, spacing, mq } from '../shared/variables'

export default function Header() {
  const { pathname } = useRouter()
  const customCls = pathname === '/projects/ideas-on-board' && 'iob'

  return (
    <header className={cx(headerStyles.header, headerStyles[customCls])}>
      <a href="/" className={headerStyles.logo}>
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 29.46 29.15">
          <path d="M26.01,3.94C22.2,.05,15.77-.93,9.66,.88c.97-.1,8.02-.76,12.26,4.09,4.95,5.66,3.45,15.84,0,17.37-.13,.06-1.27,.54-2.04,0-2.67-1.87,3.07-13.09,1.02-14.3-1.26-.75-4.18,3.03-6.47,1.92-.83-.4-1.21-1.27-1.38-1.67-.65-1.49-.3-3.32,.71-4.34,.9-.91,2.07-.9,2.04-1.02-.04-.17-2.41-.41-4.09,1.02-1.02,.87-1.26,1.95-1.67,3.43-.27,.97-.91,3.22-.04,5.84,.69,2.07,2,3.38,2.73,4.01,.34,.34,.68,.68,1.02,1.02l2.04-2.04,2.04-2.04c-.07,1.01-.26,2.2-.65,3.48-1.15,3.69-3.44,6.07-4.8,7.26-1.54-1.63-2.39-3.82-3.43-6.54-.79-2.06-2.12-5.5-1.36-9.8,.18-1.03,.47-2.06,.87-3.04l.83-2.08-1.79,1.35c-1.12,.84-2.13,1.82-3,2.91-.33,.41-1.49,1.92-2.38,3.95-.98,2.24-3.97,9.04-.46,13.62,.11,.14,2.63,3.38,6.18,3.38,.11,0,.22,0,.33,0,1.5-.08,2.9-.74,4.26-2,.32,.26,.66,.5,1.02,.72,1.93,1.2,3.89,1.8,5.84,1.8,0,0,1.58-.02,2.95-.53,4.82-1.8,11.32-16.97,3.77-24.68Z" />
        </svg>
      </a>
      <nav className={headerStyles.nav}>
        <a href="/projects">PROJECTS</a>
      </nav>
      <a href="mailto:firepunch119@gmail.com" className={headerStyles.email}>
        firepunch119@gmail.com
      </a>
    </header >
  )
}

const headerStyles = {
  header: css({
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '1.6rem',
    letterSpacing: -0.5,
    margin: `1.5rem ${spacing.sidePadding}`,
    ...fontStyles.semiBold,
    [`${mq[0]}`]: {
      gridTemplateColumns: 'auto 1fr 1fr',
      margin: `3rem ${spacing.pcSidePadding}`
    }
  }),
  iob: css({
    // backgroundColor: colors.iob,
  }),
  logo: css({
    paddingRight: '2rem'
  }),
  nav: css({
    textAlign: 'right',
    [`${mq[0]}`]: {
      textAlign: 'left',
    }
  }),
  email: css({
    display: 'none',
    [`${mq[0]}`]: {
      textAlign: 'right',
      display: 'block',
    }
  })
}
