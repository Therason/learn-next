import Link from 'next/link'

export default function Slide3(){
  return (
    <div className="content">
      <h1>What does Next.js do? 📝</h1>
      <ul>
        <li>Optimized HTML components</li>
        <li>Page and API routing</li>
        <li>Pre-rendered DOM and Hydration</li>
      </ul>
      <div className="left"><Link href="/prezzy/slide2">&lt;-</Link></div>
      <div className="right"><Link href="/prezzy/slide4">-&gt;</Link></div>
    </div>
  )
}