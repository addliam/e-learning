import React from 'react'
import Link from 'next/link'

const ButtonNext = ({text, link}) => {
  return (
    <div className='w-full flex justify-end mt-4 pb-6'>
      <Link href={link?link:'/'}>      
        <button className='continue rounded-[6px] px-10 py-3 bg-[#2493DF] hover:bg-[#2188cd] font-semibold text-[#FFFFFF]'>
            {
                text?text:"Continue"
            }
        </button>
      </Link>
    </div>
  )
}

export default ButtonNext