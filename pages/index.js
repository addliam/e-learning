import React from 'react'
import Link from 'next/link'

const Index = () => {
  return (
    <section className="index my-4 mx-28">
      <h2 className='text-[2.5rem] text-medium font-semibold'>LANDING PAGE EN PROGRESO...</h2>
      <p>La landing page se encuentra en fase de desarrollo. Puedes visitar el menu</p>
      <button className='mt-4 rounded-sm cursor-pointer px-6 py-2 bg-primary hover:bg-[#085edf]'>
      <Link href={"/menu"} className="font-semibold text-[#FFFFFF]">Menu</Link>
      </button>
    </section>
  )
}

export default Index