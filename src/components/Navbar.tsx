import Link from 'next/link'
import Image from 'next/image'
import { buttonVariants } from './ui/Button'

const Navbar = () => {
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7x1 h-full mx-auto flex items-center justify-between gap-2">
        <Link href="/" className="flex gap-2 items-center">
          <Image src="/alt-tutor.png" alt="dunno" width={100} height={100} />
        </Link>
        <div style={{ marginLeft: 180 }}>
          <Link href="/" style={{ marginRight: 20 }}>
            Home
          </Link>
          <Link href="/" style={{ marginRight: 20 }}>
            Tutors
          </Link>
          <Link href="/">About us</Link>
        </div>
        <div style={{ float: 'right' }}>
          <Link
            href="/"
            className={buttonVariants()}
            style={{
              border: 'solid #3332CC',
              marginRight: 10,
              backgroundColor: 'transparent',
              color: 'black',
            }}
          >
            Log In
          </Link>
          <Link href="/" className={buttonVariants()} style={{ backgroundColor: '#3332CC' }}>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
