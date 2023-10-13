import React from 'react'
import Head from 'next/head';
import Script from 'next/script'
import createCache from '@emotion/cache'
import { CacheProvider, Global } from '@emotion/react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import ScrollToTop from '../components/ScrollToTop'
import { globalStyles } from '../shared/globalStyles'

const cache = createCache({ key: 'firepunch' })

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mirim Yu — FrontEnd Engineer</title>
        <meta charSet='UTF-8' />
        <meta name="description" content="Front-End Engineer Portfolio" />
        <meta name="author" content="Firepunch" />
        <meta name="keywords" content="HTML, CSS, JavaScript, TypeScript, React, Next.js, Emotion, Cypress, Testing, Jest, Storybook" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <CacheProvider value={cache}>
        <Global styles={globalStyles} />
        <Header />
        <main className="main">
          <Component {...pageProps} />
          <ScrollToTop />
        </main>
        <Footer />
        <div className="g-container">
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-8SMRLKC8LP" />
          <Script id="google-analytics">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8SMRLKC8LP');
          `}
          </Script>
        </div>
      </CacheProvider>
    </>
  )
}
