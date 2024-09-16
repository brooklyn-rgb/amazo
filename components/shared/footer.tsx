'use client';
import { APP_NAME } from '@/lib/constants'
import  Link  from 'next/link'
import Policies from './Footer/Policies'
import Category from './Footer/Category';
import BrooklynStore from './Footer/BrooklynStore';
import Schedule from './Footer/Schedule';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="border-t bg-black">

<div className="w-full flex justify-start flex-wrap max-w-[1201px] m-auto pt-3 px-3 bg-black text-white">
        <BrooklynStore />
        <Policies />        
        <Category />
        <Schedule />
      </div>

      <div className="p-5 flex-center flex-row-1 grid justify-items-start border-t text-white">
          <div className="footer-bottom">
                    <div className="footer-left">
                        <figure className="payment">
                            <Image src="https://utfs.io/f/wRli2eZYNna2mBSintXxiOlGkQN6Dn9z2PqC0SxTH8rLAEIj" alt="payment" width="159" height="29" />
                        </figure>
                    </div>
                    <div className="footer-center">
                    <p className="copyright ls-normal"><Link href={'/'}>{APP_NAME} &copy; 2024.All Rights reserved</Link></p>
                    </div>
                    <div className="footer-right">
                        <div className="social-links">
                            <Link href="" className="social-link social-facebook fab fa-facebook-f"></Link>
                            <Link href="#" className="social-link social-twitter fab fa-twitter"></Link>
                            <Link href="#" className="social-link social-linkedin fab fa-linkedin-in"></Link>
                        </div>
                    </div>
                </div>
            </div>
        
      
    </footer>
  )
}

export default Footer
