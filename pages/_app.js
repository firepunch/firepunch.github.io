import React from 'react'
import Head from 'next/head'
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
        <title>Mirim Yu | FrontEnd Engineer</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="FrontEnd Engineer Portfolio" />
        <meta name="author" content="Firepunch" />
        <meta name="keywords" content="HTML, CSS, JavaScript, TypeScript, React, Next.js, Emotion, Cypress, Testing, Jest, Storybook" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#000000" />
        <meta name="google-site-verification" content="yUK512LxszenpbszcJoMQ8P9AuWTDgW8Ih75Ab1Ahk8" />
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
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MNSLJMW2');
              `
            }}
          />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=GTM-MNSLJMW2`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </div>
      </CacheProvider >
    </>
  )
}
