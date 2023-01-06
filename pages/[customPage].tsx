import { useRouter } from 'next/router'

// pages with filenames wrapped in brackets are dynamic
export default function Id() {
  const router = useRouter()
  const { customPage } = router.query

  return <h1>Custom Page ID: {customPage}</h1>
}
