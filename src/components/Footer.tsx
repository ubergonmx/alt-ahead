import Link from 'next/link'
import Image from 'next/image'

const current_year = new Date().getFullYear()
const Footer = () => {
  return (
    <footer>
      <div>
        <Image src="/alt-tutors.png" alt="dunno" width={156} height={63} />
        <div className="flex-column flex space-x-5">
          <p>Your ultimate destination for connecting students with qualified tutors</p>
          <div>
            <div>icon 1</div>
            <div>icon 2</div>
            <div>icon 3</div>
          </div>
          <div>
            <div>
              <p> Tutors </p>
              <div>
                <Link href="/"> Dashboard </Link>
                <Link href="/"> Calendar </Link>
              </div>
            </div>
            <div>
              <p> Students </p>
              <div>
                <Link href="/"> Calendar </Link>
                <Link href="/"> Dashboard </Link>
              </div>
            </div>
            <div>
              <p> Company </p>
              <div>
                <Link href="/"> About Us </Link>
                <Link href="/"> Career </Link>
                <Link href="/"> Contact Us </Link>
              </div>
            </div>
            <div>
              <p> Information </p>
              <div>
                <Link href="/"> FAQ </Link>
                <Link href="/"> Support </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-4">Copyright © {current_year} ALT Tutors</div>
        <div>
          <Link href="/"> • Site Notice </Link>
          <Link href="/"> • Privacy Policy</Link>
          <Link href="/"> Terms of Service </Link>
        </div>
      </div>
    </footer>
  )
}
export default Footer
