import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CursoCard = ({image, title, location}) => {
  return (
    <div className='bg-white w-[300px] max-h-[430px] flex flex-col rounded-[8px]' >
        <Image src={ image } width={300} height={300} alt="mov" ></Image>
        <span className='text-[28px] text-center font-bold py-2 text-[#1E1E1E]'>{ title }</span>
        <div className='mt-2 mb-4 button-wrapper flex flex-row justify-end w-full px-[12px]'>
            <Link href={location}>
                <button className='bg-success rounded-lg text-white px-6 py-2'>
                    Empezar
                </button>
            </Link>
        </div>
    </div>
  )
}

export default CursoCard