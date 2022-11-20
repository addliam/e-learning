import React from 'react'
import ChoiceItem from './ChoiceItem'

const MultipleChoice = () => {
  return (
    <div className='multiple-choice-wrapper'>
        <ChoiceItem text={"Fisica intermedio"} />
        <ChoiceItem text={"Menos de 35 años"} />
        <ChoiceItem text={"Ganas de aprender"} />
        <ChoiceItem text={"Trigonometria basica"} />
        <ChoiceItem text={"Ser muy perseverante"} />
    </div>
  )
}

export default MultipleChoice