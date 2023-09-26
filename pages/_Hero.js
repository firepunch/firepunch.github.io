import { css } from '@emotion/css'
import { fontStyles } from "../shared/variables"
import ContactButton from '../app/components/ContactButton'

export default function Hero() {
  return (
    <section className='hero'>
      <h1 className={heroStyles.h1}>
        Mirim Yu <br />
        FrontEnd Developer
      </h1>
      <ContactButton />
    </section>
  )
}

const heroStyles = {
  h1: css({
    ...fontStyles.h1
  })
}