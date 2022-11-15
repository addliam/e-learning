import React from 'react'
import Image from 'next/image'

const ItemCapitulo = ({title, type}) => {
    return (
        <div className='bg-[#EAF0F3] w-[236px] h-[86px] rounded-md flex-shrink-0 py-[12px] px-[12px] relative'>
            <h6 className='text-[#3A414B] text-[17px] font-semibold'>{title}</h6>
            <span className='text-[13px] text-[#676767] font-semibold'>{type}</span>
            <div className='absolute right-3 bottom-3 '>
                <Image src={"/assets/icons/okIcon.png"} width={22} height={22} alt="beginner" ></Image>              
            </div>
        </div>
    )
}

const ItemContent = () => {
    return (
        <div className='w-[546px] bg-white flex flex-row flex-wrap px-[1.75rem] gap-[18px] pt-2 pb-4'>
            <ItemCapitulo title={'1.1 Empezamos'} type={'Leccion'} />
            <ItemCapitulo title={'1.2 Empezamos'} type={'Leccion'} />
            <ItemCapitulo title={'1.3 Empezamos'} type={'Leccion'} />
            <ItemCapitulo title={'1.4 Empezamos'} type={'Leccion'} />
        </div>
    )
}

const ItemDropDownBox = () => {
  return (
    <>
        <div className='w-[546px] h-[62px] bg-white flex flex-row gap-5 items-center  '>
            <div className='ml-[20px]'>
                <Image src={"/assets/icons/introIcon.png"} width={42} height={42} alt="beginner" ></Image>
            </div>
            <div className='flex flex-row justify-between w-full mr-[22px]'>
                <span>Introduccion</span>
                <div className='cursor-pointer '>
                    <Image src={"/assets/icons/chevronDownIcon.png"} width={20} height={20} alt="beginner" ></Image>
                </div>
            </div>
        </div>
        {
            <ItemContent />
        }
    </>
  )
}

export default ItemDropDownBox