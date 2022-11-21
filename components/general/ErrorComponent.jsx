import React from 'react'
import Image from 'next/image'
import CloseBgWhite from '../../public/assets/icons/CloseBgWhite.svg'

const ErrorComponent = () => {
  return (
    <div className='animate_fade_in w-full flex flex-row gap-[1em] bg-[#F35843] py-2 px-6 rounded-md justify-center items-center'>
        <Image src={CloseBgWhite} width="44px" height="44px" alt='close background white' ></Image>
        <span className='text-[#FFFFFF] text-[1.1em]'>Respuesta incorrecta. Intenta de nuevo!</span>
    </div>
  )
}

export default ErrorComponent