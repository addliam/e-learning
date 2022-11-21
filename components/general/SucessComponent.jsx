import React from 'react'
import Image from 'next/image'
import CheckBgWhite from '../../public/assets/icons/CheckBgWhite.svg'

const ErrorComponent = () => {
  return (
    <div className='animate_fade_in w-full flex flex-row gap-[1em] bg-[#40bf9c] py-2 px-6 rounded-md justify-center items-center'>
        <Image src={CheckBgWhite} width="44px" height="44px" alt='check background white' ></Image>
        <span className='text-[#FFFFFF] text-[1.1em]'>Respuesta correcta. Sigue asi!</span>
    </div>
  )
}

export default ErrorComponent