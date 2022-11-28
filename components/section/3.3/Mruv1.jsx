import React from 'react'
import AlertContent from '../../general/AlertContent'
import ButtonNext from '../../general/ButtonNext'

const Mruv1 = () => {
  return (
    <>
        <h5 className='content-subtitle'>1.1 Empezamos</h5>
        <p className='content-paragraph'>
          El MRUV o movimiento rectilíneo uniformemente variado, demuestra que la velocidad varía uniformemente con el tiempo. El MRUV se puede definir como un movimiento de un móvil con respecto a una referencia a lo largo de una línea recta, en la que su aceleración es siempre constante. Se dice que la velocidad del objeto experimenta cambios iguales en intervalos iguales de tiempo. En MRUV, la aceleración promedio y su aceleración instantánea son iguales.                   
        </p>
        <h5 className='content-subtitle'>Requisitos previos</h5>
        <p className='content-paragraph'>
          Obviamente uno de los requisitos evidentes para el curso es tener las ganas de querer aprender, no es necesario tener una base para el curso, tener un lugar donde pueda estar concentrado sin distracciones, tomar apuntes en un cuaderno, bloc de notas, etc.                   
        </p>
        <AlertContent text={"No existe un horario fijo para tomar las lecciones. Aprende bajo tus propias reglas y vuelve a leer cuando tengas dudas."} />
        <h5 className='content-subtitle'>¿Que esperar del curso?</h5>
        <p className='content-paragraph'>
          El curso es para aprender algo nuevo que será importante durante toda la etapa escolar o quizás actualmente donde te encuentres estudiando como en la Universidad o en una academia esto es realizado para usted aprendiz pueda llevar el curso de manera más eficiente sin problema.                   
        </p>
        <div className='w-full flex justify-end mt-4 pb-6'>
          <ButtonNext link={"/mruv/1.1/2"} />
        </div>
    </>
  )
}

export default Mruv1