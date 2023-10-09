import { css } from '@emotion/css'
import { fontStyles, spacing } from "../shared/variables"

export default function Hero() {
  return (
    <section className={heroStyles.hero}>
      <h1 className={heroStyles.title}>
        Hello! I’m a frontend engineer building user-centric products.
      </h1>
      <h2 className={heroStyles.subTitle}>
        I help simplify complex problems and organize them into processes to improve efficiency.
      </h2>
    </section>
  )
}

const heroStyles = {
  hero: css({
    paddingTop: spacing.topPadding,
    marginBottom: '6rem'
  }),
  title: css({
    fontSize: '3.4rem',
    marginBottom: '1.2rem'
  }),
  subTitle: css({
    lineHeight: '1.4',
    ...fontStyles.regular
  })
}