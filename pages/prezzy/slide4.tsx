import Link from 'next/link'

export default function Slide4(){
  return (
    <div className="content">
      <h1>Optimized components out of the box 🏃</h1>
      <ul>
        <li>Included components address a few of the problems you may see in Lighthouse</li>
        <li>Optimized <span className="code">&lt;Image /&gt;</span> component</li>
        <li>Custom font loading using Google fonts or local fonts</li>
        <li>Client side dynamic routing with <span className="code">&lt;Link /&gt;</span> component and pages structure</li>
      </ul>
      <div className="left"><Link href="/prezzy/slide3">&lt;-</Link></div>
      <div className="right"><Link href="/prezzy/slide5">-&gt;</Link></div>
    </div>
  )
}