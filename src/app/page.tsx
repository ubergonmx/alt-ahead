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
              src="/landing/section1-hero.png"
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
                Unlock your child&apos;s <span className="text-dark-blue">potential</span>.
              </h1>
            </div>
            <p className="mt-8 w-[32rem] text-lg">
              Get ready to take your education to the next level with ALT. Join us and unlock a
              world of knowledge from the comfort of your own homes.
            </p>
            <Button className="mt-6 w-40 bg-blue text-lg font-semibold tracking-wider">
              Get Started
            </Button>
          </div>
        </div>
      </section>
      <section className="h-[30rem] w-full bg-yellow-orange">
        <div className="container mt-10 flex items-center justify-center">
          <div className="m-8 h-80 w-2/5">
            <span className="text-lg font-extrabold uppercase tracking-[0.25em] text-blue">
              Why choose ALT?
            </span>
            <h1 className="w-[30rem] text-5xl font-extrabold leading-[1.3]">
              Transform learning with <span className="text-red-400">ease</span>.
            </h1>
            <p className="mt-5 w-[30rem] text-lg">
              With ALT, whether you need help in learning english, mathematics, or any other
              academic area, ALT has you covered.
            </p>
            <Button className="mt-5 w-40 text-lg font-semibold tracking-wider">Learn More</Button>
          </div>
          <div className="m-8 h-80 w-64">
            <div className="h-14 w-14 rounded-full bg-red pt-4 text-center">✔</div>
            <p className="mt-5 text-3xl font-extrabold text-dark-blue">
              Supercharge your learning journey!
            </p>
            <p className="mt-5 w-[18rem] text-lg">
              Immerse yourself in interactive online tutoring sessions. Connect with passionate
              tutors, and ignite your curiosity.
            </p>
          </div>
          <div className="m-8 h-80 w-64">
            <div className="h-14 w-14 rounded-full bg-red pt-4 text-center">✔</div>
            <p className="mt-5 text-3xl font-extrabold text-dark-blue">
              Connect with top-tier tutors.
            </p>
            <p className="mt-5 w-[18rem] text-lg">
              Discover your ideal tutor effortlessly with ALT Tutor. Our platform features a vast
              database of qualified tutors.
            </p>
          </div>
          <div className="m-8 h-80 w-64">
            <div className="h-14 w-14 rounded-full bg-red pt-4 text-center">✔</div>
            <p className="mt-5 text-3xl font-extrabold text-dark-blue">Learn anytime. Anywhere.</p>
            <p className="mt-5 w-[18rem] text-lg">
              Our online tutoring platform brings education to your fingertips.
            </p>
          </div>
        </div>
      </section>
      <section className="h-[44rem] w-full bg-yellow-orange-light">
        <div className="flex">
          <div className="flex w-1/2 flex-col items-end justify-center p-2">
            <div>
              <Image
                className="w-[40rem]"
                src="/landing/section3-girl.png"
                alt={'girl'}
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="ml-10 flex w-1/2 flex-col justify-center p-4">
            <h1 className="mt-9 w-[28rem] text-5xl font-extrabold leading-[1.3]">
              Your tutor is <span className="text-blue-green">waiting for you</span>!
            </h1>
            <p className="mt-7 w-[30rem] text-xl">
              No more browsing through endless forums and questionable referrals. Here at ALT,
              we&apos;ve already sifted through several candidates to pick only the best tutors for
              YOU.
            </p>
            <input
              type="text"
              placeholder="Search for Tutor, Keyword, Subject"
              className="mt-12 w-2/4 rounded-full border border-gray-300 px-4 py-2 focus:border-blue-400 focus:outline-none focus:ring"
            />
          </div>
        </div>
      </section>
      <section className="flex h-[50rem] w-screen items-center justify-center bg-yellow-orange-light">
        <div className="flex h-[47rem] w-[110rem] justify-center rounded-xl bg-blue-green-medium">
          <div className="mt-12 w-4/5 flex-col text-center">
            <span className="text-lg font-extrabold uppercase tracking-[0.25em] text-dark-blue">
              JOIN ALT TUTORS NOW
            </span>
            <h1 className="mx-auto w-[50rem] text-5xl font-extrabold leading-[1.3]">
              Join our team of tutors and help spread the
              <span className="text-red-400"> love of learning</span>!
            </h1>
            <p className="mt-5 text-lg font-medium">
              Ready to inspire and empower the next generation? Join our team today and make a
              difference!
            </p>
            <div className="mt-12 flex gap-8">
              <div className="flex h-[20rem] w-1/3 flex-col items-center rounded-lg bg-white p-6">
                <div className="h-14 w-14 rounded-full bg-yellow-orange pt-4 text-center">✔</div>
                <span className="mt-6 text-3xl font-extrabold text-dark-blue">
                  Inspire and empower.
                </span>
                <p className="mt-5 w-[16rem] text-lg font-semibold text-dark-blue">
                  Joining ALT will help you to connect with students, build their confidence, and
                  help them succeed!
                </p>
              </div>
              <div className="flex h-[20rem] w-1/3 flex-col items-center rounded-lg bg-white p-6">
                <div className="h-14 w-14 rounded-full bg-yellow-orange pt-4 text-center">✔</div>
                <span className="mt-6 text-3xl font-extrabold text-dark-blue">
                  Accessible and fun!
                </span>
                <p className="mt-5 w-[18rem] text-lg font-semibold text-dark-blue">
                  With plenty of resources and support, we&apos;re committed to helping you become
                  the best tutor you can be!
                </p>
              </div>
              <div className="flex h-[20rem] w-1/3 flex-col items-center rounded-lg bg-white p-6">
                <div className="h-14 w-14 rounded-full bg-yellow-orange pt-4 text-center">✔</div>
                <span className="mt-6 text-3xl font-extrabold text-dark-blue">
                  Flexible schedules.
                </span>
                <p className="mt-5 w-[18rem] text-lg font-semibold text-dark-blue">
                  With a flexible schedule and rewarding work, it&apos;s the perfect way to gain
                  experience and grow in your career.
                </p>
              </div>
            </div>
            <div>
              <Button className="mt-10 w-52 bg-blue text-lg font-semibold tracking-wider">
                Become a Tutor!
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[50rem] w-full justify-center bg-yellow-orange-light">
        <div className="mt-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-extrabold leading-[1.3]">Join our community!</h1>
          <p className="mt-5 w-2/5 text-lg font-medium">
            Calling all curious minds and lifelong learners! Join our vibrant community of learners
            and embark on an exciting journey of discovery together!
          </p>
          <Button className="mt-10 w-52 bg-red-400 text-lg font-semibold tracking-wider">
            Join Community
          </Button>
        </div>
      </section>
    </main>
  )
}
