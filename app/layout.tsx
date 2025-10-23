import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ProSound Elite - Premium Noise Cancelling Headphones',
  description: 'Experience ultimate audio clarity with advanced active noise cancellation technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
