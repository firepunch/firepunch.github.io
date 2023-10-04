import React from 'react'
import { css } from '@emotion/css'
import { fontStyles } from "../shared/variables"

import Hero from './_Hero'
import Projects from './_Projects'
import About from './_About'

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
    </>
  )
}

const homeStyles = {
  h1: css({
    ...fontStyles.h1
  })
}