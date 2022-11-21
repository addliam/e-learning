import React, {useState, useEffect} from 'react'
import ChoiceItem from './ChoiceItem'
import ButtonComprobar from '../ButtonComprobar'
import ButtonBack from '../../ButtonBack'
import ButtonNext from '../../ButtonNext'
import ErrorComponent from '../../ErrorComponent'
import SucessComponent from '../../SucessComponent'

const MultipleChoice = ({data}) => {
    const [success, setSuccess] = useState(false)
    const [showError, setShowError] = useState(false)
    const [isError, setIsError] = useState(false)
    const [selectedOptions, setSelectedOptions] = useState([])
    const opcionesCorrectas = data.correctas

    useEffect(() => {
        console.log({isError});
        const resetValues = () => {
            setShowError(false)
            setIsError(false)
        }
        if (isError){
            setShowError(true)
            setTimeout(()=>(
                resetValues()
            ), 4000)
        }
      return () => {
      }
    }, [isError])
    

    const switchIndexInSelections = (value) => {
        setSelectedOptions((selections)=>{
            let alreadyExists = selections.find(v => v === value) !== undefined
            return (alreadyExists)?(selections.filter((v)=>v!==value)):([...selections, value])
        })
    }

    const resetToDefault = () => {
        setSuccess(false)
        setIsError(false)
    }

    const checkIfOptionsAreCorrect = () => {
        return (opcionesCorrectas.length === selectedOptions.length && opcionesCorrectas.every(v => selectedOptions.includes(v)))
    }

    const successAction = () => {
        console.log("You have success dude");
        setIsError(false)
        setSuccess(true)
    }

    const failureAction = () => {
        console.log("You have FAILL!");
        setIsError(true)
        setSuccess(false)
    }

  return (
    <div className='multiple-choice-wrapper'>
        {
            data.opciones.map((opcion)=>(
                <ChoiceItem key={opcion.indice} indice={opcion.indice} texto={opcion.texto} switchIndexInSelections={switchIndexInSelections}  />
            ))
        }
        <div className='mt-[1.5em] min-h-[4.0625em]'>
        {
            isError?(
                showError?(
                    <ErrorComponent />
                ):(<></>)
            ):(<></>)
        }
        {
            success?(
                <SucessComponent />
            ):(<></>)
        }
        </div>        
        <div className='w-full flex flex-row justify-between mt-[2em] pb-6'>
            <ButtonBack link={"/mruv/1.1/2"} />
            {
                success?(
                    <ButtonNext link={"/mruv/1.2/1"} />
                ):(
                    <ButtonComprobar comprobation={checkIfOptionsAreCorrect} successAction={successAction} failureAction={failureAction} />
                )
            }
        </div>
    </div>
  )
}

export default MultipleChoice