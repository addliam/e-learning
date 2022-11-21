import React from 'react'
import Link from 'next/link'

const ButtonNext = ({text, link}) => {
  return (
    <>
      <Link href={link?link:'/'}>      
        <button className='continue rounded-[6px] px-10 py-3 bg-[#2493DF] hover:bg-[#2188cd] font-semibold text-[#FFFFFF]'>
            {
                text?text:"Continuar"
            }
        </button>
      </Link>    
    </>
  )
}

export default ButtonNext