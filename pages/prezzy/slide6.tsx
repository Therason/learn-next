import Link from 'next/link'

export default function Slide6(){
  return (
    <div className="content">
      <h1>Pre-Rendering 🎨</h1>
      <ul>
        <li>DOM can be populated by the server</li>
        <li>User gets a full HTML layout, then fetches the JavaScript to add functionality</li>
        <li>Can greatly improve Lighthouse performance, when used correctly</li>
        <li>Support for server side rendering and static site generation &#40;or a mix of both&#41;, on a per page basis</li>
      </ul>
      <h2><Link href="/ssgWeather" target="_blank">SSG</Link></h2>
      <ul>
        <li>HTML gets generated at build time</li>
        <li>Ideal when displaying information that doesn&apos;t change often</li>
      </ul>
      <h2><Link href="/ssrWeather" target="_blank">SSR</Link></h2>
      <ul>
        <li>HTML gets generated on the server each time a request gets made</li>
        <li>If API requests are needed, they get made by the server instead of client</li>
        <li>Displayed data is always up to date</li>
        <li>Slower than SSG</li>
      </ul>
      <div className="left"><Link href="/prezzy/slide5">&lt;-</Link></div>
      <div className="right"><Link href="/prezzy/slide7">-&gt;</Link></div>
    </div>
  )
}