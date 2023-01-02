import Link from 'next/link'

export default function Slide2(){
  return (
    <div>
      <h1>What React does</h1>
      <ul>
        <li>Client side rendered front ends</li>
        <li>Large bundle sizes</li>
        <li>Slow first contentful paint times</li>
      </ul>
      <Link href="/slide1">&lt;-</Link>
      <Link href="/slide3">-&gt;</Link>
    </div>
  )
}