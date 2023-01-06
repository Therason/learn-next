import Link from 'next/link'

export default function Slide8(){
  return (
    <div className="content">
      <h1>Other things I like... 🤡</h1>
      <ul>
        <li>ISR to mix SSG and SSR 😱</li>
        <li>AMAZING docs!!!! 🤓</li>
        <li>TypeScript support 💘</li>
        <li>Super easy deployment with Vercel 🚀</li>
        <li>Even easier setup with <span className="code">create-next-app</span> 🖥️</li>
        <li>Templates for anything you can think of 💭</li>
      </ul>
      <div className="left"><Link href="/prezzy/slide7">&lt;-</Link></div>
      <div className="right"><Link href="/prezzy/slide9">-&gt;</Link></div>
    </div>
  )
}