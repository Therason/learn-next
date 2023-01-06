import Link from 'next/link'
import LinkLogo from '../../components/LinkLogo'

export default function Slide7(){
  return (
    <div className="content">
      <h1>Pre-Rendering Cont&apos;d 🎨</h1>
      <h2><Link href="/ssgWeather" target="_blank">SSG <LinkLogo /></Link></h2>
      <ul>
        <li>HTML gets generated ONCE build time</li>
        <li>Ideal when displaying information that doesn&apos;t change often</li>
      </ul>
      <h2><Link href="/ssrWeather" target="_blank">SSR <LinkLogo /></Link></h2>
      <ul>
        <li>HTML gets generated on the server EVERY TIME a request gets made</li>
        <li>Displayed data is always up to date</li>
        <li>Slower than SSG</li>
      </ul>
      <div className="left"><Link href="/prezzy/slide6">&lt;-</Link></div>
      <div className="right"><Link href="/prezzy/slide8">-&gt;</Link></div>
    </div>
  )
}