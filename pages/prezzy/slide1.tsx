import Link from 'next/link'
import Image from 'next/image'

export default function Slide1(){
  return (
    <div className="content">
      <h1>What is <Image className="svg" src="/next.svg" height="32" width="175" alt="" />? ✨</h1>
      <ul>
        <li>React framework&#40;?&#41;</li>
        <li>Performance oriented&#40;?&#41;</li>
        <li>Fullstack features&#40;?&#41;</li>
      </ul>
      <div className="right"><Link href="/prezzy/slide2">-&gt;</Link></div>
    </div>
  )
}