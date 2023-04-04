import React from 'react'
import AvartarImg from '../assets/img/myimg.jpg'

function Navbar() {
  return (
    <div className='text-black-500 text-lg font-bold flex justify-between items-center px-10 shadow-md shadow-black-200 sticky w-full h-[80px] bg-white top-0 left-0 z-50'>
     <div>Knowledge Cafe</div>
     <div>
      <img src={AvartarImg} alt='' className='rounded-[50px] h-[50px] w-[50px] object-cover'/>
     </div>
    </div>
  )
}

export default Navbar