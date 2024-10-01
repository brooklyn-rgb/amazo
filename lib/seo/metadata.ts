import { metaKeywords } from './keywords';
import type { Metadata } from 'next';
import { siteConfig } from './site';

export const defaultMetadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      'Brooklyn Store is your ultimate destination for all things photography. Specializing in a wide range of cameras, lenses, and accessories, we cater to both beginners and seasoned professionals. Our knowledgeable staff is passionate about helping you delve into the world of photography, offering personalized advice and hands-on demonstrations. With competitive pricing and a welcoming atmosphere, Brooklyn Store ensures you find the perfect gear to capture your unique vision.',
    template: 'Brooklyn-Store  | %s',
  },
  description:
    'Brooklyn Store is your ultimate destination for all things photography. Specializing in a wide range of cameras, lenses, and accessories, we cater to both beginners and seasoned professionals. Our knowledgeable staff is passionate about helping you delve into the world of photography, offering personalized advice and hands-on demonstrations. With competitive pricing and a welcoming atmosphere, Brooklyn Store ensures you find the perfect gear to capture your unique vision. ',
  keywords: metaKeywords.join(', '),
  creator: 'Macsoft',
  publisher: 'Macsoft',
  applicationName: 'Brooklyn-Store ',
  viewport: 'width=device-width, initial-scale=1.0',
  colorScheme: 'light',
  category: 'Brooklyn Store: Your Ultimate Multi-Camera Store',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [
    {
      name: 'Brooklyn Store',
      url: 'https://macsoft.vercel.app/',
    },
  ],
  themeColor: '#ffffff',
  appLinks: {
    web: {
      url: siteConfig.url,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: 'Brooklyn Store',
    title:
      'Brooklyn Store: Your Ultimate Multi-Camera Store',
    description:
      'Brooklyn Store is your ultimate destination for all things photography. Specializing in a wide range of cameras, lenses, and accessories, we cater to both beginners and seasoned professionals. Our knowledgeable staff is passionate about helping you delve into the world of photography, offering personalized advice and hands-on demonstrations. With competitive pricing and a welcoming atmosphere, Brooklyn Store ensures you find the perfect gear to capture your unique vision.',
    images: [
      {
        url: `${siteConfig.url}/bauto1.png`,
        width: 800,
        height: 600,
        alt: 'Brooklyn Store: Your Ultimate Multi-Camera Store',
      },
    ],
    emails: ['oflenstek@gmail.com'],
    phoneNumbers: ['+27 78 151 5716'],
    countryName: 'South Africa',
  },
  // icons: {
  //   // TODO: Add icons
  //   icon: {},
  // },
  twitter: {
    creator: '@macsoft',
    site: '@Brooklyn Store',
    card: 'summary_large_image',
    title:
      'Brooklyn Store: Your Ultimate Multi-Camera Store',
    description:
      'Brooklyn Store is your ultimate destination for all things photography. Specializing in a wide range of cameras, lenses, and accessories, we cater to both beginners and seasoned professionals. Our knowledgeable staff is passionate about helping you delve into the world of photography, offering personalized advice and hands-on demonstrations. With competitive pricing and a welcoming atmosphere, Brooklyn Store ensures you find the perfect gear to capture your unique vision. ',
    images: [
      {
        url: `${siteConfig.url}/store.png`,
        width: 800,
        height: 600,
        alt: 'Brooklyn Store: Your Ultimate Multi-Camera Store',
      },
    ],
  },
} as Metadata;
