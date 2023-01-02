import Link from 'next/link'

export default function Slide5(){
  return (
    <div>
      <h1>Filesystem Routing</h1>
      <ul>
        <li>Routing is based on the layout of files in the pages directory</li>
        <li>API routes</li>
        <li>Dynamic routes</li>
      </ul>
      <Link href="/slide3">&lt;-</Link>
      <Link href="/slide5">-&gt;</Link>
    </div>
  )
}