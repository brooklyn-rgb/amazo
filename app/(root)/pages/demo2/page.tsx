import React from 'react'
import Image from 'next/image'

export default function Demo2() {
  return (
           
  <div className="card-group-2 flex col-1 justify-center ">          
  <div className="card">
    <Image src="https://utfs.io/f/wRli2eZYNna2b7OqgK1rCgSOhtTbrpjsMV84cFxyB0KHm7ZE" className="card-img-top" alt="Brooklyn Store" width={500} height={500}/>
    
  </div>
  <div className="card">
    <Image src="https://utfs.io/f/wRli2eZYNna2fnwMVIjqVZCNy1lGK0tidF5m8IDQ9MXhW6cT" className="card-img-top" alt="Brooklyn Store" width={500} height={500}/>
   
  </div>
  <div className="card">
    <Image src="https://utfs.io/f/wRli2eZYNna2yPMnbGWwRd9PEjbUeMl8itxDFYBS5VHcLaAK" className="card-img-top" alt="Brooklyn Store" width={500} height={500}/>
    
  </div>
</div>    
  )
}