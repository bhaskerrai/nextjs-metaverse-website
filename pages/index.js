import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Footer, Navbar } from '../components';
import { About, Explore, Hero, Feedback, GetStarted , Insights, WhatsNew, World } from '../sections';


export default function Home() {
  return (
    <div className='bg-primary-black overflow-hidden'>
      
      <Head>
        <title>Metaversus</title>
      </Head>

      <Navbar />
      
      <Hero />
      
      <div className='relative'>
        <About />
        <div className='gradient-03 z-0'/>
        <Explore />
      </div>

      <div className='relative'>
        <GetStarted />
        <div className='gradient-04 z-0'/>
        <WhatsNew />
      </div>
      
      <World />

      <div className='relative'>
        <Insights />
        <div className='gradient-04 z-0'/>
        <Feedback />
      </div>
      
      <Footer />
    </div>
  )
}
