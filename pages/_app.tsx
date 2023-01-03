import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import { motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js Presentation</title>
        <meta name="description" content="Next.js basics!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0
          },
          pageAnimate: {
            opacity: 1
          },
        }}
        className={inter.className}
      >
        <Component {...pageProps} />
      </motion.main>
    </>
  )
}
