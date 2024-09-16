import React from 'react'
import Image from 'next/image'

export default function Demo() {
  return (
           
  <div className="card-group-2 flex col-1 justify-center ">          
  <div className="card">
    <Image src="https://utfs.io/f/wRli2eZYNna2NyEZvXseA7UvKPg4bcD6GakOLV8diyjfmWJl" className="card-img-top" alt="Brooklyn Store" width={500} height={500}/>
    
  </div>
  <div className="card">
    <Image src="https://utfs.io/f/wRli2eZYNna2HrgZvxCbCtZNPTS6AEDLVIvgqxukdXz18J9Q" className="card-img-top" alt="Brooklyn Store" width={500} height={500}/>
   
  </div>
  <div className="card">
    <Image src="https://utfs.io/f/wRli2eZYNna2f632RkjqVZCNy1lGK0tidF5m8IDQ9MXhW6cT" className="card-img-top" alt="Brooklyn Store" width={500} height={500}/>
    
  </div>
</div>    
  )
}