import Head from 'next/head'
import { Header } from '../components/main-page/Header'
import { Main } from '../components/main-page/Main'
import { Footer } from '../components/main-page/Footer'
export default function Home() {
  return (
    <div className='flex flex-col h-screen'>
      <Head>
        <title>Google</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* HEADER */}
      <Header />
      {/* MAIN */}
      <Main />
      <Footer />
    </div>
  )
}
