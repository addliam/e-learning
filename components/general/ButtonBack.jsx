import React from 'react'
import Link from 'next/link'

const ButtonBack = ({text, link}) => {
  return (
    <>
      <Link href={link?link:'/'}>      
        <button className='continue rounded-[6px] ring-inset ring-[1px] ring-[#2493DF] px-10 py-3 bg-[#FFFFFF] hover:bg-[#e2f4ff] font-semibold text-[#2493DF]'>
            {
                text?text:"Retroceder"
            }
        </button>
      </Link>    
    </>
  )
}

export default ButtonBack