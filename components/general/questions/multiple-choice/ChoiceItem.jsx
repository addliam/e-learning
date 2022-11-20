import React, {useState} from 'react'

const ChoiceItem = ({texto, indice, switchIndexInSelections}) => {
    const [isChecked, setIsChecked] = useState(false)
    const [isHover, setIsHover] = useState(false)

    const handleClickItem = () => {
        SwitchChecked()
    }

    const SwitchChecked = () => {
        setIsChecked(prev=>!prev)
        switchIndexInSelections(indice)
    }

    const voidF = () => {}

  return (
    <div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} style={{backgroundColor: `${isChecked?"#DBF0FF":isHover?"#F7FBFF":"#FFFFFF"}`, borderColor: `${isChecked?"#0075FF":"#dce2e5"}`}} onClick={() => handleClickItem()} className='choice-item cursor-pointer mt-4 rounded-md border-[1px] px-4 py-3 shadow-sm flex items-center z-20'>
        <input checked={isChecked} onChange={()=>voidF()} className='w-4 h-4 -z-0' type='checkbox' id={indice} value={indice} />
        <label className='text-[1.12em] ml-3 text-[#2d3846]' htmlFor="fisica-intermedio">
        {texto}
        </label>
    </div>
    )
}

export default ChoiceItem