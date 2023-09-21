import Head from 'next/head'
import { h1Style } from '../shared/typography'

const Home = () => (
  <>
    <Head>
      <title>Emotion using the vanilla version supporting SSR</title>
    </Head>
    <div>
      <h1 className={h1Style}>Emotion Vanilla example</h1>
    </div>
  </>
)

export default Home
