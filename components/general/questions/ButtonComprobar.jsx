import React from 'react'
import Router from 'next/router'

const ButtonComprobar = ({comprobation, successAction, failureAction}) => {

    const handleComprobation = () => {
        if (comprobation()){
            successAction()
        }else{
            failureAction()
        }
    }

  return (
    <button onClick={()=>handleComprobation()} className='continue rounded-[6px] px-10 py-3 bg-[#2493DF] hover:bg-[#2188cd] font-semibold text-[#FFFFFF]'>
        {
            "Comprobar"
        }
    </button>
  )
}

export default ButtonComprobar