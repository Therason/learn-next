import Link from 'next/link'

export default function Slide4(){
  return (
    <div>
      <h1>Custom optimized components</h1>
      <ul>
        <li>Client side dynamic routing with Link component and pages structure</li>
        <li>Optimized Image components</li>
        <li>Custom font loading using Google fonts or local fonts</li>
      </ul>
      <Link href="/slide3">&lt;-</Link>
      <Link href="/slide5">-&gt;</Link>
    </div>
  )
}