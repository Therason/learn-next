import Link from 'next/link'

export default function Slide1(){
  return (
    <div className="content">
      <h1>What is Next.js?</h1>
      <ul>
        <li>React framework</li>
        <li>Performance oriented</li>
        <li>Fullstack features</li>
      </ul>
      <div className="right"><Link href="/prezzy/slide2">-&gt;</Link></div>
    </div>
  )
}