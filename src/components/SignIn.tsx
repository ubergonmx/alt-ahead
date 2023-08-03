import Image from 'next/image'
import Link from 'next/link'
import UserAuthForm from './UserAuthForm'
import '../styles/globals.css'

const SignIn = () => {
  return (
    <div className="mx-12 flex flex-row">
      {/*image <div>*/}
      <div className=" hidden lg:block ">
        <Image
          className="rounded-l-lg lg:static lg:w-auto"
          src="/sign-in.png"
          alt="tutor"
          width={500}
          height={500}
        />
      </div>

      {/*sign-in <div>*/}
      <div className=" flex-1 rounded-r-lg bg-neutrals-light lg:static lg:w-auto">
        <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
          <div className="flex flex-col space-y-2 text-center">
            <Link href="/">
              <Image
                src="/logo-with-text.png"
                alt="dunno"
                width={250}
                height={250}
                className="mx-auto"
                style={{ paddingTop: '50px' }}
              />
            </Link>
            <h1 className="pt-9 text-4xl font-black">Welcome back!</h1>
            <p className="mx-auto max-w-xs pb-9 text-sm text-neutrals-gray">
              Please enter your details
            </p>

            <UserAuthForm />

            <p className=" px-8 text-center text-sm">
              Don&apos;t have an account?
              <Link href="/sign-up" className=" ml-2 text-sm text-blue">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
