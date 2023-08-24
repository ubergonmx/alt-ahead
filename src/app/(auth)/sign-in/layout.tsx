import { Toaster } from '@/components/ui/Toaster'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Poppins } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Sign in - ALT Tutors',
  description: 'Bridging the gap between students and tutors',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn('light bg-neutrals-light text-neutrals-black antialiased', poppins.className)}
    >
      <body className="min-h-screen bg-slate-50 pt-12 antialiased">
        <NextTopLoader />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
