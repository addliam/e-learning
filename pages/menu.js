import React from 'react'
import TopBar from '../components/general/TopBar'
import CursoCard from '../components/menu/CursoCard'

const Menu = () => {
  return (
    <main className='bg-lightGray h-screen'>
        <TopBar />
        <h4 className='text-black font-semibold text-[32px] ml-[80px] my-[16px]'>Cursos</h4>
        <div className='cursos-list flex flex-row gap-6 justify-center w-full'>
            <CursoCard image={"/assets/icons/carLogo.png"} title={"MRUV"} location="/mruv" />
            <CursoCard image={"/assets/icons/calcLogo.png"} title={"Calculadora"} location="/calculadora" />
        </div>
    </main>    
  )
}

export default Menu