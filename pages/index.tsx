import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import hero from '../public/hero.png'
import mockup from '../public/splash.png'
import mobile from '../public/mobile.png'
import desktop from '../public/desktop.png'
import footer from '../public/footer.png'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alsterverse™ - the place to be</title>
        <meta name="description" content="Alsterverse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      {hero && <img src={hero.src} className={styles.hero} alt="Welcome to Alsterverse" />}

      {mockup && <img src={mockup.src} className={styles.mockup} alt="" />}
      <div className={styles.links}>
      <a href="#">
      {mobile && <img src={mobile.src} className={styles.mobile} alt="" />}
      </a>
      {desktop && <img src={desktop.src} className={styles.desktop} alt="" />}
      </div>
      {footer && <img src={footer.src} className={styles.footer} alt="" />}
    
      </main>

    </div>
  )
}

export default Home
