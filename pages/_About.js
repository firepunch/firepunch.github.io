import { css } from '@emotion/css'
import { fontStyles } from "../shared/variables"

export default function About() {
  return (
    <section className='about'>
      <p className={aboutStyles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quibusdam reprehenderit accusantium sunt quos consectetur unde sequi repellat.
      </p>
    </section>
  )
}

const aboutStyles = {
  paragraph: css({
  })
}