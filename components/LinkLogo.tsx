import Image from 'next/image'

// custom component to render the logo used to signify links
export default function LinkLogo() {
  return <Image className="svg" width="15" height="15" src="/link-solid.svg" alt="link image" />
}