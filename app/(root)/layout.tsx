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
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <link href="https://brooklynstore.co.za/" rel="canonical"/>
         <link rel="apple-touch-icon" href="/static/images/favicon.ico"/>
    <link rel="icon" href="/static/images/favicon.ico"/>
    <link rel="preconnect" href="//cdnjs.cloudflare.com"/>
    <link rel="preconnect" href="//cdn.jsdelivr.net"/>
    <link rel="preconnect" href="//www.googletagmanager.com"/>
    <link rel="preconnect" href="//www.googleadservices.com"/>
    <link rel="preconnect" href="//fonts.gstatic.com"/>
    <link rel="preconnect" href="//connect.facebook.net"/>
    <link rel="dns-prefetch" href="//api-iam.intercom.io"/>
    <link rel="dns-prefetch" href="//js.intercomcdn.com"/>
    <link rel="dns-prefetch" href="//widget.intercom.io"/>
    <link rel="dns-prefetch" href="//px.ads.linkedin.com"/>
    <link rel="dns-prefetch" href="//www.linkedin.com"/>
    <link rel="dns-prefetch" href="//www.google.com"/>
    <link rel="dns-prefetch" href="//www.google.co.za"/>
    <link rel="dns-prefetch" href="//stats.g.doubleclick.net"/>
    <link rel="dns-prefetch" href="//googleads.g.doubleclick.net"/>
    <link rel="dns-prefetch" href="//www.facebook.com"/>
    <link rel="dns-prefetch" href="//snap.licdn.com"/>
    <link rel="dns-prefetch" href="//p.adsymptotic.com"/>
    <link rel="dns-prefetch" href="//widget.apexvisibility.co"/>
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
