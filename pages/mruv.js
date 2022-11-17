import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SmallTopBar from '../components/general/SmallTopBar'
import ItemDropDownBox from '../components/menu/ItemDropDownBox'
import staticData from '../public/assets/data.json'

const mruv = () => {
  return (
    <main className='bg-lightGray h-screen'>
      <SmallTopBar />
      <section className='my-4 mb-5'>
        <Link href={"/menu"} className='text-[#6D6D6D] font-semibold ml-12'>
          {"< Volver a cursos"}
        </Link>        
      </section>
      <section className='flex flex-row gap-5 items-center justify-center'>
        <div className='img-wrap rounded-[50%] overflow-hidden '>
          <Image src={"/assets/icons/carLogo.png"} width={82} height={82} alt="car" ></Image>
        </div>
        <div>
          <h3 className='font-semibold text-[26px]'>MRUV - Movimiento Rectilineo Uniformemente Variado</h3>
          <p className='max-w-[880px] text-[14px]'>El movil se desplaza sobre una trayectoria recta estando sometida a una aceleracion constante. Su velocidad varia constantemente, la velocidad aumenta o disminuye de forma permanente.</p>
        </div>
      </section>
      <section className='flex flex-row flex-wrap mx-28 mt-12 gap-x-6 gap-y-8'>
        {
          // console.log(staticData)
          staticData[0].items.map((itemData)=>{
            return (<ItemDropDownBox key={itemData.indice} data={itemData} />)
            // console.log(item)
          })
        }
        {/* <ItemDropDownBox icon={"/assets/icons/introIcon.png"} title={"Introduccion"} />
        <ItemDropDownBox icon={"/assets/icons/formulaIcon.png"} title={"Formula"} />
        <ItemDropDownBox icon={"/assets/icons/physicsIcon.png"} title={"Ejercicios resueltos"} />
        <ItemDropDownBox icon={"/assets/icons/f1carIcon.png"} title={"Ejemplos aplicativos"} /> */}
      </section>
    </main>
  )
}

export default mruv