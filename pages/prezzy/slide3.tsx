import Link from 'next/link'

export default function Slide3(){
  return (
    <div className="content">
      <h1>What does Next.js do to improve this? 📝</h1>
      <ul>
        <li>Provides optimized HTML components</li>
        <li>Page and API routing</li>
        <li>Pre-rendered DOM and hydration by default</li>
        <li>Almost everything is in one place!</li>
      </ul>
      <div className="left"><Link href="/prezzy/slide2">&lt;-</Link></div>
      <div className="right"><Link href="/prezzy/slide4">-&gt;</Link></div>
    </div>
  )
}