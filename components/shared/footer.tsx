'use client';
import { APP_NAME } from '@/lib/constants'
import  Link  from 'next/link'
import Policies from './Footer/Policies'
import Category from './Footer/Category';
import BrooklynStore from './Footer/BrooklynStore';
import Schedule from './Footer/Schedule';

const Footer = () => {
  return (
    <footer className="border-t">

<div className="w-full flex justify-start flex-wrap max-w-[1201px] m-auto pt-3 px-3">
        <BrooklynStore />
        <Policies />        
        <Category />
        <Schedule />
      </div>

      <div className="p-5 flex-center grid justify-items-start border-t">
        <Link href={'/'}>2024 {APP_NAME}.All Rights reserved</Link> 
      </div>
      <div className="p-5 flex-center justify-items-evenly">
        <span className='px-4'><Link href={'/policies/privacy'}>Privacy Policy</Link></span> <span className='px-4'><Link href={'/policies/terms'}>Terms and Conditions</Link></span> <span className='px-4'><Link href={'/policies/shipping'}>Shipping Policy</Link></span> <span className='px-4'><Link href={'/policies/refund'}>Refund Policy</Link></span>
      </div>
    </footer>
  )
}

export default Footer
