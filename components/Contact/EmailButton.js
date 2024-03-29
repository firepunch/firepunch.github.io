import { css } from "@emotion/css"
import { colors, mq } from "../../shared/variables"

export default function EmailButton() {
  return (
    <a
      className={emailStyles}
      href="mailto:firepunch119@gmail.com"
    />
  )
}

const emailStyles = css({
  display: 'block',
  width: '22rem',
  fontSize: '1.6rem',
  textAlign: 'center',
  padding: '0.8rem',
  margin: '2rem 0',
  border: `1px solid ${colors.black}`,
  borderRadius: '100px',
  [`${mq[0]}`]: {
    width: '34rem',
    padding: '2rem',
    fontSize: '2rem',
  },

  '&&:before': {
    content: '"firepunch119@gmail.com"',
  },

  '&:hover': {
    color: colors.white,
    background: colors.black,

    '&&:before': {
      content: '"Send me an email"'
    },
  }
})