import { Inter } from 'next/font/google'
import './globals.css'
import { Nav } from '@/component/nav/Nav'
import { Footer } from '@/component/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home - Freelancer - Phlox Elementor WordPress Theme',
  description: 'A portfolio site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
