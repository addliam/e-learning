import React from 'react'
import Image from 'next/image'

const TopBar = () => {
  return (
    <nav className='w-full h-[5rem] bg-primary flex flex-row items-center'>
      <div className='flex flex-row ml-10 '>
        <Image src="/assets/icons/elearnLogo.png" width={48} height={48} alt="logo elearning 76x76" ></Image>
        <h2 className='text-white text-[32px] font-bold ml-4 '>ELearning</h2>

      </div>
    </nav>
  )
}

export default TopBar