import Provider from '@/layouts/Provider'
import './globals.css'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/navigation'
import Footer from '@/layouts/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
        <Footer/>
      </body>
    </html>
  )
}




