import { useRouter } from 'next/router'

// basic dynamic page routing
export default function Id() {
  const router = useRouter()
  const { customPage } = router.query

  return <h1>Custom Page ID: {customPage}</h1>
}
