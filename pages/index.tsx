import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import hero from '../public/hero.png'
import mockup from '../public/splash.png'
import mobile from '../public/mobile.png'
import hover from '../public/mobile_hover.png'
import desktop from '../public/desktop.png'
import footer from '../public/footer.png'
import divider1 from '../public/divider1.svg'
import divider2 from '../public/divider2.svg'
import { useState } from 'react'

const Home: NextPage = () => {
  const [isHover, setHover] = useState(false);
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
        {divider1 && <img src={divider1.src} className={styles.divider} alt="" />}

        <div className={styles.links}>
            <a href="https://alster.8thwall.app/alsterverse">
              {hover && mobile && <img src={isHover ? hover.src : mobile.src} className={styles.mobile} alt="" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} />}
            </a>
            
          {desktop && <img src={desktop.src} className={styles.desktop} alt="" />}
        </div>
        {divider2 && <img src={divider2.src} className={styles.divider} alt="" />}

        {footer && <img src={footer.src} className={styles.footer} alt="" />}

      </main>

    </div>
  )
}

export default Home
