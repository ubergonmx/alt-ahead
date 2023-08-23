import '@/styles/globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Toaster } from '@/components/ui/Toaster'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import { Metadata } from 'next'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'ALT Tutors',
  description: 'Bridging the gaps between students and tutors',
  icons: {
    icon: '/alt-tutors-dark.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn('light bg-neutrals-light text-neutrals-black antialiased', poppins.className)}
    >
      <body className="min-h-screen bg-slate-50 pt-12 antialiased">
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
