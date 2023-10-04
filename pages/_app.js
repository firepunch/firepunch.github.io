import * as React from 'react'
import Head from 'next/head'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

import Footer from '../components/Footer'
import Header from '../components/Header/index'
import { globalStyles } from '../shared/styles'

const cache = createCache({ key: 'next' })

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Mirim Yu — FrontEnd Developer</title>
      <meta charSet='UTF-8' />
      <meta name="description" content="Front-End Developer Portfolio" />
      <meta name="author" content="Firepunch" />
      <meta name="keywords" content="HTML, CSS, JavaScript, TypeScript, React, Next.js, Emotion, Cypress, Testing, Jest, Storybook" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap" rel="stylesheet" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/static/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <CacheProvider value={cache}>
      {globalStyles}
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </CacheProvider>
  </>
)

export default App
