import React from 'react'
import { css } from '@emotion/css'

import { spacing } from '../shared/variables'
import Hero from './_Hero'
import Projects from './_Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <section className={homeStyles.home}>
      <Hero />
      <Projects />
      <Contact />
    </section>
  )
}

const homeStyles = {
  home: css`
    section {
      margin-left: ${spacing.sidePadding};
      margin-right: ${spacing.sidePadding};
    }
  `
}