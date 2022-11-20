import React from 'react'

const ProgressBar = ({part, total}) => {
    const percentWidth = part/total * 100
    return (
        <div className='w-[30rem] relative bg-[#EAF0F3] h-2 rounded-lg'>
            <div style={{width: `${percentWidth}%`}} className='h-2 bg-[#40BF9C] absolute rounded-lg' />
        </div>
    )
}

export default ProgressBar