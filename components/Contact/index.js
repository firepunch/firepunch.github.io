import { css, cx } from '@emotion/css'
import Image from 'next/image'
import { spacing, flexStyles, mq } from '../../shared/variables'
import EmailButton from './EmailButton'

export default function Contact() {
  return (
    <section className={contactStyles.self}>
      <h2 className={cx(contactStyles.title, contactStyles.font)}>
        Let's work together
        <Image src="/images/hands_icon.svg" alt="Raise hands icon" width={30} height={30} />
      </h2>
      <p className={contactStyles.font}>
        Get in touch.
      </p>
      <EmailButton />
    </section>
  )
}

const contactStyles = {
  self: css({
    margin: `8rem ${spacing.sidePadding}`,
  }),
  font: css({
    fontSize: '2.4rem',
    [`${mq[0]}`]: {
      fontSize: '4.6rem',
    }
  }),
  title: css({
    ...flexStyles,
    flexDirection: 'row',
    justifyContent: 'start',
  }),
}
