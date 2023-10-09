import { css, cx } from '@emotion/css'
import { spacing } from '../shared/variables'
import useHasScroll from '../hooks/useScroll'

export default function ScrollToTop() {
  const scrollPos = useHasScroll()

  return (
    <a href="#" className={cx(styles.arrow, styles[scrollPos])}>
      <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm37.66 101.66a8 8 0 0 1-11.32 0L136 107.31V168a8 8 0 0 1-16 0v-60.69l-18.34 18.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1 0 11.32Z" /></svg>
    </a>
  )
}

const styles = {
  arrow: css`
    right: ${spacing.sidePadding};
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
  middle: css`
    position: fixed;
    bottom: 0;
  `,
  end: css`
    position: absolute;
    bottom: -2rem;
  `,
}