import Link from 'next/link'
import Image from 'next/image'

export default function Slide2(){
  return (
    <div className="content">
      <h1>What <span className="blue">React <Image className="react" src="/react.svg" alt="React logo" width="32" height="32" /></span> does</h1>
      <ul>
        <li>Client side rendered front ends</li>
        <li>Large bundle sizes</li>
        <li>Slow first contentful paint times</li>
      </ul>
      <div className="left"><Link href="/prezzy/slide1">&lt;-</Link></div>
      <div className="right"><Link href="/prezzy/slide3">-&gt;</Link></div>
    </div>
  )
}