import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Header } from '../components/shared'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container} data-testid="home_wrapper">
      <Header pageTitle="root" />

      <main className={styles.main}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
