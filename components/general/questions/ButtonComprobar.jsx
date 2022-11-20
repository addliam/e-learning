import React from 'react'
import Link from 'next/link'

const ButtonComprobar = ({}) => {
  return (
    <div className='w-full flex justify-end pb-6'>
      <Link href={'/'}>      
        <button className='continue rounded-[6px] px-10 py-3 bg-[#2493DF] hover:bg-[#2188cd] font-semibold text-[#FFFFFF]'>
            {
                "Comprobar"
            }
        </button>
      </Link>
    </div>
  )
}

export default ButtonComprobar