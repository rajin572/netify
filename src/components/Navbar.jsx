import React from 'react'
import AvartarImg from '../assets/img/myimg.png'

function Navbar() {
  return (
    <div className='text-black-500 mx-auto text-lg font-bold flex justify-between items-center sticky w-10/12 h-[80px] mb-10 border-b-2 bg-white top-0 left-0 z-50'>
     <div>Knowledge Cafe</div>
     <div>
      <img src={AvartarImg} alt='' className='rounded-[50px] h-[50px] w-[50px] object-cover'/>
     </div>
    </div>
  )
}

export default Navbar