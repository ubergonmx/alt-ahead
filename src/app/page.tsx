import { Button } from '@/components/ui/Button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <section id="hero" className="m-0 flex h-full w-full flex-row-reverse">
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-full w-full">
            <Image
              className="relative h-full w-full object-fill"
              src="/home-hero.png"
              alt={'unsplash'}
              width={1000}
              height={1000}
            />
          </div>
          <div className="absolute right-1/3 top-1/4 flex flex-col gap-8 text-white">
            <div className="flex flex-col gap-4">
              <span className="text-lg font-semibold uppercase tracking-[0.25em] text-yellow-orange">
                Introducing ALT Tutors
              </span>
              <h1 className="w-[30rem] text-5xl font-extrabold leading-[1.3]">
                Unlock your child&apos;s <span className="text-dark-blue">potential.</span>
              </h1>
            </div>
            <p className="w-[32rem] text-lg">
              Get ready to take your education to the next level with ALT. Join us and unlock a
              world of knowledge from the comfort of your own homes.
            </p>
            <Button className="w-40 text-lg font-semibold tracking-wider">Get Started</Button>
          </div>
        </div>
      </section>
      <section className="container bg-yellow-orange"></section>
    </main>
  )
}
