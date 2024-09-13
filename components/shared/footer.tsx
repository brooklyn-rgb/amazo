import { APP_NAME } from '@/lib/constants'
import  Link  from 'next/link'

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="p-5 flex-center grid justify-items-start">
        <Link href={'/'}>2024 {APP_NAME}.All Rights reserved | Dev By Mac</Link> 
      </div>
      <div className="p-5 flex-center justify-items-evenly">
        <span className='px-4'><Link href={'/policies/privacy'}>Privacy Policy</Link></span> <span className='px-4'><Link href={'/policies/terms'}>Terms and Conditions</Link></span> <span className='px-4'><Link href={'/policies/shipping'}>Shipping Policy</Link></span> <span className='px-4'><Link href={'/policies/refund'}>Refund Policy</Link></span>
      </div>
    </footer>
  )
}

export default Footer
