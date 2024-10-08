import React from 'react'
import Link from 'next/link'

export default function Chat() {
  return (

<div className="relative">
  <button className="z-20 text-white flex flex-col shrink-0 grow-0 justify-around 
                  fixed bottom-0 right-0 right-5 rounded-lg
                  mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10">
    <div className="p-5 rounded-full">
    <Link href={'https://wa.me/27781515716'}>     
    <img src='/whatsap.gif' alt='whatsapp-button' width={70} height={70}/>
      </Link>
    </div>

  </button>
</div>
  )
}

