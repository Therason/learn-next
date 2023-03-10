import Link from 'next/link'
import { motion } from 'framer-motion'

// the main page users see (http://localhost:3000/)
export default function Prezzy() {
  return (
    <>
      <main className="content">
        <Link href='/prezzy/slide1'>
          <motion.h1
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                delay: 0.3,
                type: 'spring',
                bounce: 0.65
            }}
            initial={{ opacity: 0, scale: 0.5 }}
          >
            Next.js!!!
        </motion.h1>
        </Link>
      </main>
    </>
  );
}
