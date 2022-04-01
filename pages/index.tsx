import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import hero from '../public/alster-symbol-white.png'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alsterverse - the place to be</title>
        <meta name="description" content="Alsterverse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Image src={hero} alt="Welcome to Alsterverse"/>
        
        <h1 className={styles.title}>
          Welcome to Alsterverse
        </h1>

        <div>
          Enter the universe
        </div>
        <div className={styles.grid}>
          {/* <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>About &rarr;</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quia?</p>
          </a>

          

          <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}>
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      <footer className={styles.footer}>
        
        </footer>
    </div>
  )
}

export default Home
