import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Magadh Kodex',
    template: '%s | Magadh Kodex',
  },
  description: 'Ancient Wisdom, Future Code.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-100 text-slate-900 antialiased`}
      >
        {/* Global Header */}
        <Header />

        {/* Page Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  )
}
