'use client'

import { Button, buttonVariants } from './ui/Button'
import { cn } from '@/lib/utils'
import { FC, useState } from 'react'
import { signIn } from 'next-auth/react'
import { Icons } from './Icons'
import { toast, useToast } from '@/hooks/use-toast'
import Link from 'next/link'

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { toast } = useToast()

  const loginWithGoogle = async () => {
    setIsLoading(true)

    try {
      await signIn('google')
    } catch (error) {
      //toast notification
      toast({
        title: 'There was a problem.',
        description: 'There was an error logging in with Google',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn('flex flex-col justify-center', className)} {...props}>
      <label>
        <input
          className={cn(buttonVariants({ variant: 'secondary' }), 'm-1 w-80 border-neutrals-gray')}
          type="email"
          placeholder="Your email"
        />
      </label>
      <label>
        <input
          className={cn(buttonVariants({ variant: 'secondary' }), 'm-1 w-80 border-neutrals-gray')}
          type="password"
          placeholder="Password"
        />
      </label>

      <Link href="/" className="pb-7 text-right text-sm text-blue">
        Forgot Password?
      </Link>
      <Button className={cn(buttonVariants({ variant: 'primary' }), 'm-1')}>Sign in</Button>

      <Button
        onClick={loginWithGoogle}
        isLoading={isLoading}
        className={cn(buttonVariants({ variant: 'secondary' }), 'm-1 border-neutrals-gray')}
      >
        {isLoading ? null : <Icons.google className="mr-2 h-4 w-4" />}
        Sign in with Google
      </Button>
    </div>
  )
}

export default UserAuthForm
