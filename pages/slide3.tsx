import Link from 'next/link'

export default function Slide3(){
  return (
    <div>
      <h1>What Next.js does</h1>
      <ul>
        <li>Optimized HTML components</li>
        <li>Page and API routing</li>
        <li>Pre-rendered DOM and Hydration</li>
      </ul>
      <Link href="/slide2">&lt;-</Link>
      <Link href="/slide4">-&gt;</Link>
    </div>
  )
}