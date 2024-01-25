import type {Metadata} from 'next'
import {Nunito, Outfit, PT_Sans, Sen} from 'next/font/google'
import './globals.css'

const nunito = Nunito({subsets: ['latin'], display: 'swap', variable: '--font-nunito'})
const ptSans = PT_Sans({subsets: ['latin'], display: 'swap', variable: '--font-pt-sans', weight: "400"})

export const metadata: Metadata = {
  title: 'BitGPT',
  description: 'Harness the power of AI with our decentralized, peer-to-peer infrastructure.',
}

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={`${nunito.variable} ${ptSans.variable}`}>{children}</body>
    </html>
  )
}
