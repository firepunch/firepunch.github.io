import { css, cx } from '@emotion/css'
import { spacing } from '../shared/variables'
import useHasScroll from '../hooks/useScroll'
import { useRouter } from 'next/router'

export default function ScrollToTop() {
  const scrollPos = useHasScroll()
  const { pathname } = useRouter()
  const isProjectDetail = pathname === '/projects/ideas-on-board'

  return (
    <a
      href="#"
      className={
        cx(
          styles.arrow,
          styles[scrollPos],
          scrollPos === 'end' && isProjectDetail && styles.noContact
        )}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 24 24" opacity={0.2}>
        <path d="m11.998 21.995c5.517 0 9.997-4.48 9.997-9.997 0-5.518-4.48-9.998-9.997-9.998-5.518 0-9.998 4.48-9.998 9.998 0 5.517 4.48 9.997 9.998 9.997zm4.843-8.211c.108.141.157.3.157.456 0 .389-.306.755-.749.755h-8.501c-.445 0-.75-.367-.75-.755 0-.157.05-.316.159-.457 1.203-1.554 3.252-4.199 4.258-5.498.142-.184.36-.29.592-.29.23 0 .449.107.591.291z" fillRule="nonzero" />
      </svg>
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
      opacity: 0.1;
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