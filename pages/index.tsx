import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Center from '../components/Center'
import SideBar from '../components/SideBar'

const Home: NextPage = () => {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <Head>
        <title>Spotify HHQ</title>
        <meta name="description" content="Spotify by HHQ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <SideBar/>
        <Center/>
      </main>
    </div>
  )
}

export default Home
