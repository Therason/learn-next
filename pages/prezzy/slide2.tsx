import Link from 'next/link'
import Image from 'next/image'

export default function Slide2(){
  return (
    <div className="content">
      <h1>What does <span className="blue">React <Image className="svg" src="/react.svg" alt="React logo" width="32" height="32" /></span> do?</h1>
      <ul>
        <li>Lets us create <em>client side rendered</em> front ends</li>
        <li>Standard React CSR flow:
          <ul>
            <li>Browser fetches a barebones HTML file from the server &#40;nothing is there to render yet&#41;</li>
            <li>HTML file points to a JS file &#40;usually something like <span className="code">bundle.js</span>&#41;</li>
            <li>Browser fetches that JS file</li>
            <li>Browser executes the React code</li>
            <li>React mounts components to the DOM without any needed API data</li>
            <li>API requests get made, then the UI gets fully rendered</li>
          </ul>
        </li>
        <li>Large bundle sizes, slow first contentful paint times, and bad SEO 😥😭</li>
      </ul>
      <div className="left"><Link href="/prezzy/slide1">&lt;-</Link></div>
      <div className="right"><Link href="/prezzy/slide3">-&gt;</Link></div>
    </div>
  )
}