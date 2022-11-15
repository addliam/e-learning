import React from 'react'
import Image from 'next/image'


const SmallTopBar = () => {
  return (
    <nav className='w-full h-[3rem] bg-primary flex flex-row items-center'>
      <div className='flex flex-row ml-10 '>
        <div>
          <Image src="/assets/icons/elearnLogo.png" width={32} height={32} alt="logo elearning 76x76" ></Image>
        </div>
        <h2 className='text-white text-[22px] font-semibold ml-4 '>ELearning</h2>
      </div>
    </nav>
  )
}

export default SmallTopBar