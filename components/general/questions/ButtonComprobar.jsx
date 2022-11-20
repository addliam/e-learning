import React from 'react'
import Router from 'next/router'

const ButtonComprobar = ({comprobation, nextPage}) => {

    const handleSuccess = () => {
        console.log("You have success dude");
    }
    const handleFailure = () => {
        console.log("You have FAILLLLL looser!");
    }

    const handleComprobation = () => {
        if (comprobation()){
            handleSuccess()
        }else{
            handleFailure()
        }
    }

  return (
    <div className='w-full flex justify-end pb-6'>
        <button onClick={()=>handleComprobation()} className='continue rounded-[6px] px-10 py-3 bg-[#2493DF] hover:bg-[#2188cd] font-semibold text-[#FFFFFF]'>
            {
                "Comprobar"
            }
        </button>
    </div>
  )
}

export default ButtonComprobar