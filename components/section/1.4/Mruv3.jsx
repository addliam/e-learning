import React from 'react'
import MultipleChoice from '../../general/questions/multiple-choice/MultipleChoice'

import MultipleChoiceData from '../../../public/assets/multiple-choice.json'


const Mruv3 = () => {
  const data = MultipleChoiceData[0]
  return (
    <>
        <h5 className='content-subtitle'>1.4.3 Practica: Principiante</h5>
        <p className='question-indication'>
          Son requisitos para tomar el curso
        </p>
        <p className="question-hint">Selecciona todas las que cumplan</p>
        <MultipleChoice back={"/mruv/1.4/3"} next={"/mruv/2.1/1"} data={data} />
        {/* MultipleChoice should include ButtonBack n Next ? */}
    </>
  )
}

export default Mruv3