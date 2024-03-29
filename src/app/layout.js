import { Montserrat, Parisienne , Roboto} from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['300', '400', '500', '700', '900'],
})

const parisienne = Parisienne({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-cursive',
  display: 'swap',
})

export const metadata = {
  title: 'Boda Shei y Lucas',
  description: 'Invitacion a la boda de Shei y Lucas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable} ${parisienne.variable}`}>
      <body >{children}</body>
    </html>
  )
}
