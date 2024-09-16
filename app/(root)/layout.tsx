import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'
import React from 'react'
import Demo from './pages/demo/page'

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1 wrapper">{children}</main>
      {modal}
      <Demo />
      <Footer />
    </div>
  )
}
