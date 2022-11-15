import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SmallTopBar from '../components/general/SmallTopBar'
import ItemDropDownBox from '../components/menu/ItemDropDownBox'

const mruv = () => {
  return (
    <main className='bg-lightGray h-screen'>
      <SmallTopBar />
      <section className='my-4 mb-5'>
        <Link href={"/menu"} className='text-[#6D6D6D] font-semibold'>
          {"< Volver a cursos"}
        </Link>        
      </section>
      <section className='flex flex-row gap-5 items-center justify-center'>
        <div className='img-wrap rounded-[50%] overflow-hidden '>
          <Image style={'object-fit: "cover"'} src={"/assets/icons/carLogo.png"} width={82} height={82} alt="car" ></Image>
        </div>
        <div>
          <h3 className='font-semibold text-[26px]'>MRUV - Movimiento Rectilineo Uniformemente Variado</h3>
          <p className='max-w-[880px] text-[14px]'>El movil se desplaza sobre una trayectoria recta estando sometida a una aceleracion constante. Su velocidad varia constantemente, la velocidad aumenta o disminuye de forma permanente.</p>
        </div>
      </section>
      <section>
        <ItemDropDownBox />
      </section>
    </main>
  )
}

export default mruv