import Link from 'next/link'

export default function Slide5(){
  return (
    <div className="content">
      <h1>Filesystem Routing</h1>
      <ul>
        <li>Routing is based on the layout of files in the pages directory</li>
        <li><Link href="/api/hello" target="_blank">API routes</Link></li>
        <li><Link href="/api/rfe2210" target="_blank">Dynamic API routes</Link></li>
        <li><Link href="/rfe2210" target="_blank">Dynamic Pages routes</Link></li>
      </ul>
      <div className="left"><Link href="/prezzy/slide4">&lt;-</Link></div>
      <div className="right"><Link href="/prezzy/slide6">-&gt;</Link></div>
    </div>
  )
}