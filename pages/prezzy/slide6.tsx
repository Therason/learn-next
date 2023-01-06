import Link from 'next/link'

export default function Slide6(){
  return (
    <div className="content">
      <h1>Pre-Rendering 🎨</h1>
      <ul>
        <li>DOM can be populated by the server instead of the client:
          <ul>
            <li>Browser gets sent a full HTML layout from the server that immediately gets rendered</li>
            <li>HTML file points to a fragmented JS file that contains functionality for the current page</li>
            <li>Browser fetches the JS file and executes the React code</li>
            <li>Interactivity gets added to the page &#40;hydration&#41;</li>
          </ul>
        </li>

        <li>Support for server side rendering and static site generation &#40;or a mix of both&#41;, on a per page basis</li>
      </ul>
      <div className="left"><Link href="/prezzy/slide5">&lt;-</Link></div>
      <div className="right"><Link href="/prezzy/slide7">-&gt;</Link></div>
    </div>
  )
}