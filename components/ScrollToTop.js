import { css, cx } from '@emotion/css'
import { spacing } from '../shared/variables'
import useHasScroll from '../hooks/useScroll'
import { useRouter } from 'next/router'

export default function ScrollToTop() {
  const scrollPos = useHasScroll()
  const { pathname } = useRouter()
  const isProjectDetail = pathname === '/projects/ideas-on-board'

  return (
    <a href="#" className={
      cx(
        styles.arrow,
        styles[scrollPos],
        scrollPos === 'end' && isProjectDetail && styles.noContact
      )}>
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm3.7 10.7c-.4.4-1 .4-1.4 0L13 11.4V15c0 .6-.4 1-1 1s-1-.4-1-1v-3.6l-1.3 1.3c-.4.4-1 .4-1.4 0c-.4-.4-.4-1 0-1.4l3-3c.4-.4 1-.4 1.4 0l3 3c.4.4.4 1 0 1.4z" /></svg>
    </a>
  )
}

const styles = {
  arrow: css`
    display: none;
    right: ${spacing.sidePadding};
    bottom: 1rem;
    z-index: 99;

    svg {
      width: 6rem;
      height: 6rem;
      opacity: 0.2;
    }
  `,
  top: css`
    display: none;
  `,
  mid: css`
    display: block;
    position: fixed;
  `,
  end: css`
    display: block;
    position: absolute;
    right: ${spacing.sidePadding};
    bottom: 15rem;
  `,
  noContact: css`
    bottom: -2rem;
  `
}