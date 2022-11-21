import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ButtonNext = ({text, link}) => {
  const router = useRouter()
  return (
    <>
      <button onClick={()=>router.push(link?link:"/")} className='continue rounded-[6px] px-10 py-3 bg-[#2493DF] hover:bg-[#2188cd] font-semibold text-[#FFFFFF]'>
          {
              text?text:"Continuar"
          }
      </button>
    </>
  )
}

export default ButtonNext