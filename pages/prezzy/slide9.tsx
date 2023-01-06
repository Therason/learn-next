import Link from 'next/link'

export default function Slide9(){
  return (
    <div className="content">
      <h1>BEWARE ⚠️⛔☣️</h1>
      <ul>
        <li>Next.js provides a ton of abstractions
          <ul>
            <li>Observer API and viewports</li>
            <li>React Router or Express</li>
            <li>Pre-rendering with <span className="code">react-dom/server</span></li>
          </ul>
        </li>
        <li>Everything is in one place, which can be hard to learn/maintain</li>
        <li>In very active development, this code will be outdated soon!</li>
      </ul>
      <div className="left"><Link href="/prezzy/slide8">&lt;-</Link></div>
    </div>
  )
}