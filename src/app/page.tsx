import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="container" id="hero">
        <div className="flex h-screen items-center justify-center">
          <div className="h-full w-full max-w-screen-lg">
            <Image src="/home-hero.png" alt={'unsplash'} layout="fill" objectFit="contain" />
          </div>
          <div className="absolute right-1/3 top-1/4 text-white">
            <h2 className="text-xl font-semibold">Introduct ALT Tutor</h2>
            <p className="mt-2">Unlock your child&apos;s potential.</p>
          </div>
        </div>
      </section>
      <section className="container bg-orange-400">
        <div className="flex h-screen items-center justify-center">
          <p className="text-2xl font-semibold text-white">Orange background.</p>
        </div>
      </section>
    </main>
  )
}
