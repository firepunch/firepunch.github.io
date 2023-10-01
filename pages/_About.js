import { css } from '@emotion/css'
import { fontStyles } from "../shared/variables"
import ContactButton from '../components/ContactButton'

export default function About() {
  return (
    <section className='about'>
      <p className={aboutStyles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quibusdam reprehenderit accusantium sunt quos consectetur unde sequi repellat.
      </p>
      <ContactButton />
    </section>
  )
}

const aboutStyles = {
  paragraph: css({
  })
}