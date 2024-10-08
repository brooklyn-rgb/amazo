import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'
import React from 'react'
import Demo from './pages/demo/page'
import Chat from '../chat/page'
import Announcement from './pages/announcement/page'

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <>
    <head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>     
    <meta property="og:url" content="https://brooklynstore.co.za/"/>
    <meta property="og:title" content="Brooklyn Store"/>
    <meta property="og:description" content="Discover Brooklyn Store's premier camera and photography store, offering a wide range of equipment, accessories, and expert advice. Visit us for top brands, professional service, and everything you need to capture life's moments with clarity and creativity" />
    <meta property="og:site_name" content="Brooklyn Store"/>
    <meta property="og:image" content="https://brooklynstore.co.za/search?q=&category=Canon&price=all&rating=all&sort=lowest&page=1"/>
    <meta property="twitter:description" content="https://x.com/brooklynstore10"/>
    <meta property="facebook:description" content="https://www.facebook.com/profile.php?id=61566551804302"/>
    <meta property="instagram:description" content="https://www.instagram.com/brooklynstore10/"/>
    <meta name="description" content="Discover Brooklyn Store's premier camera and photography store, offering a wide range of equipment, accessories, and expert advice. Visit us for top brands, professional service, and everything you need to capture life's moments with clarity and creativity"/>
      <meta charSet="utf-8"/>
   <meta name="google-site-verification" content="gJrTicPSMMeCxt6Tk_4ks1OPVITCp239OSiIpXGRR2g"/>
    <meta name="robots" content="index,follow"/>
    </head>
    <div className="flex h-screen flex-col">
        <Announcement />
        <Header />
        <main className="flex-1 wrapper">{children}</main>
        {modal}
        <Demo />
        <Footer />
        <Chat />
      </div></>
  )
}
