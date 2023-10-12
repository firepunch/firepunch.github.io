import { css } from '@emotion/css'
import { fontStyles, spacing, mq } from "../shared/variables"
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
      <div className={heroStyles.email}>
        <EmailButton />
      </div>
    </section>
  )
}

const heroStyles = {
  hero: css({
    maxWidth: '40rem',
    paddingTop: spacing.topPadding,
    marginBottom: '8rem',
    [`${mq[1]}`]: {
      maxWidth: '90rem'
    }
  }),
  title: css({
    fontSize: '2.6rem',
    marginBottom: '1.2rem',
    [`${mq[0]}`]: {
      fontSize: '4.8rem',
      marginBottom: '3.6rem',
      fontWeight: 500,
    }
  }),
  subTitle: css({
    ...fontStyles.regular,
    lineHeight: 1.4,
    marginBottom: '2.4rem',
    [`${mq[0]}`]: {
      fontSize: '3.4rem',
      lineHeight: 'normal',
      marginBottom: '18rem',
    }
  }),
  email: css({
    [`${mq[0]}`]: {
      display: 'none'
    }
  })
}