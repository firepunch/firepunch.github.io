import { css, cx } from '@emotion/css'
import { spacing, flexStyles, colors } from '../../shared/variables'
import HandIcon from './hand.js'

export default function Contact() {
  return (
    <section className={contactStyles.self}>
      <h2 className={cx(contactStyles.title, contactStyles.font)}>
        Let's work together <HandIcon />
      </h2>
      <p className={contactStyles.font}>
        Get in touch.
      </p>
      <a
        className={contactStyles.email}
        href="mailto:firepunch119@gmail.com"
      >

      </a>
    </section>
  )
}

const contactStyles = {
  self: css({
    margin: `6rem ${spacing.doublePadding}`,
  }),
  font: css({
    fontSize: '3rem',
  }),
  title: css({
    ...flexStyles,
    flexDirection: 'row',
    justifyContent: 'start',
    marginBottom: '0.4rem'
  }),
  email: css({
    display: 'block',
    maxWidth: '22rem',
    fontSize: '1.6rem',
    textAlign: 'center',
    padding: '0.8rem',
    margin: '2rem 0',
    border: `1px solid ${colors.black}`,
    borderRadius: '100px',

    '&&:before': {
      content: '"firepunch119@gmail.com"',
    },

    '&:hover': {
      color: colors.white,
      background: colors.black,

      '&&:before': {
        content: '"Send a email"'
      },
    }
  })
}
