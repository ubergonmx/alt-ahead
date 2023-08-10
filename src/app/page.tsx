import { Button } from '@/components/ui/Button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <section id="hero" className="relative">
        <div className="relative">
          <div className="flex">
            <Image
              className="w-screen"
              src="/home-hero.png"
              alt={'hero'}
              width={1000}
              height={1000}
            />
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 transform px-96 text-white">
            <div className="flex flex-col gap-4">
              <span className="text-lg font-semibold uppercase tracking-[0.25em] text-yellow-orange">
                Introducing ALT Tutors
              </span>
              <h1 className="w-[30rem] text-5xl font-extrabold leading-[1.3]">
                Unlock your child&apos;s <span className="text-dark-blue">potential.</span>
              </h1>
            </div>
            <p className="mt-8 w-[32rem] text-lg">
              Get ready to take your education to the next level with ALT. Join us and unlock a
              world of knowledge from the comfort of your own homes.
            </p>
            <Button className="mt-6 w-40 text-lg font-semibold tracking-wider">Get Started</Button>
          </div>
        </div>
      </section>
      <section className="h-3/5 bg-yellow-orange">
        <div className="flex w-screen items-center justify-center">
          <div className="m-8 h-80 w-2/5 bg-blue-300">
            <span className="text-lg font-extrabold uppercase tracking-[0.25em] text-blue">
              Why choose ALT?
            </span>
            <h1 className="w-[30rem] text-5xl font-extrabold leading-[1.3]">
              Transform learning with <span className="text-red-400">ease.</span>
            </h1>
            <p className="mt-5 w-[32rem] text-lg">
              With ALT, whether you need help in learning english, mathematics, or any other
              academic area, ALT has you covered.
            </p>
            <Button className="mt-5 w-40 text-lg font-semibold tracking-wider">Learn More</Button>
          </div>
          <div className="m-8 h-80 w-64 bg-red-300">
            <div className="h-14 w-14 rounded-full bg-red pt-4 text-center">✔</div>
          </div>
          <div className="m-8 h-80 w-64 bg-green-300">
            <div className="h-14 w-14 rounded-full bg-red pt-4 text-center">✔</div>
          </div>
          <div className="m-8 h-80 w-64 bg-purple-300">
            <div className="h-14 w-14 rounded-full bg-red pt-4 text-center">✔</div>
          </div>
        </div>
      </section>
    </main>
  )
}
