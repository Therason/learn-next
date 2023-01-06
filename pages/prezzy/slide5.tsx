import Link from 'next/link'
import LinkLogo from '../../components/LinkLogo'

export default function Slide5(){
  return (
    <div className="content">
      <h1>Filesystem Routing 🗺️</h1>
      <ul>
        <li>Routing is based on the layout of .jsx files in the <span className="code">pages/</span> directory</li>
        <li><Link href="/rfe2210" target="_blank">Dynamic Pages routes <LinkLogo /></Link></li>
        <li><Link href="/api/hello" target="_blank">API routes <LinkLogo /></Link></li>
        <li><Link href="/api/rfe2210" target="_blank">Dynamic API routes <LinkLogo /></Link></li>
      </ul>
      <div className="left"><Link href="/prezzy/slide4">&lt;-</Link></div>
      <div className="right"><Link href="/prezzy/slide6">-&gt;</Link></div>
    </div>
  )
}