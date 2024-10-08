// app/layout.tsx

import './globals.css'

export const metadata = {
  title: 'Next.js App with Tailwind CSS',
  description: 'CRUD app styled using Tailwind CSS',
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
