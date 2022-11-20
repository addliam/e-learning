import React, {useState} from 'react'
import ChoiceItem from './ChoiceItem'
import ButtonComprobar from '../ButtonComprobar'

const MultipleChoice = ({data}) => {
    const [success, setSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [selectedOptions, setSelectedOptions] = useState([])
    const opcionesCorrectas = data.correctas

    const switchIndexInSelections = (value) => {
        setSelectedOptions((selections)=>{
            let alreadyExists = selections.find(v => v === value) !== undefined
            return (alreadyExists)?(selections.filter((v)=>v!==value)):([...selections, value])
        })
    }

  return (
    <div className='multiple-choice-wrapper'>
        {
            data.opciones.map((opcion)=>(
                <ChoiceItem key={opcion.indice} indice={opcion.indice} texto={opcion.texto} switchIndexInSelections={switchIndexInSelections}  />
            ))
        }
        <div className='mt-[3em]'>
            <ButtonComprobar />
        </div>
    </div>
  )
}

export default MultipleChoice