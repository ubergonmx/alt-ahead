import Link from 'next/link'
import Image from 'next/image'
import { buttonVariants } from './ui/Button'

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-[10] h-fit border-b border-zinc-300 bg-zinc-100 py-2">
      <div className="max-w-7x1 container mx-auto flex h-full items-center justify-between gap-2">
        <Link href="/" className="flex items-center gap-2">
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
          <Link href="/" className={buttonVariants({ variant: 'secondary' })}>
            Log In
          </Link>
          <Link href="/" className={buttonVariants({ variant: 'primary' })}>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
