'use client'
import { User } from 'next-auth'
import Link from 'next/link'
import { FC } from 'react'
import { buttonVariants } from './ui/Button'
import { signOut } from 'next-auth/react'

interface UserAccountNavProps {
  user: Pick<User, 'name' | 'email' | 'image'>
}

const UserAccountNav: FC<UserAccountNavProps> = ({ user }) => {
  return (
    <Link
      href="/sign-in"
      className={buttonVariants({ variant: 'secondary' })}
      onSelect={(event) => {
        event.preventDefault()
        signOut({
          callbackUrl: '/',
        })
      }}
    >
      Log Out
    </Link>
  )
}

export default UserAccountNav
