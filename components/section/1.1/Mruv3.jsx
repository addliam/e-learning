import React from 'react'
import ButtonNext from '../../../components/general/ButtonNext'
import MultipleChoice from '../../general/questions/multiple-choice/MultipleChoice'

const Mruv3 = () => {
  return (
    <>
        <h5 className='content-subtitle'>Practica: Principiante</h5>
        <p className='question-indication'>
          Son requisitos para tomar el curso
        </p>
        <p className="question-hint">Selecciona todas las que cumplan</p>
        <MultipleChoice />
        <ButtonNext link={"/mruv/1.1/2"} />
    </>
  )
}

export default Mruv3