import { css } from '@emotion/css'
import { fontStyles, spacing } from "../shared/variables"
import EmailButton from '../components/Contact/EmailButton'

export default function Hero() {
  return (
    <section className={heroStyles.hero}>
      <h1 className={heroStyles.title}>
        Hello! I’m a frontend engineer building user-centric products.
      </h1>
      <h2 className={heroStyles.subTitle}>
        I help simplify complex problems and organize them into processes to improve efficiency.
      </h2>
      <EmailButton />
    </section>
  )
}

const heroStyles = {
  hero: css({
    paddingTop: spacing.topPadding,
    marginBottom: '8rem'
  }),
  title: css({
    fontSize: '2.6rem',
    marginBottom: '1.2rem'
  }),
  subTitle: css({
    ...fontStyles.regular,
    lineHeight: 1.4,
    marginBottom: '2.4rem'
  })
}