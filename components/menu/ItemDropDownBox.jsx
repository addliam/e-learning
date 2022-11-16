import React, {useState} from 'react'
import Image from 'next/image'
// @status must be in (complete, actual, locked)
const ItemCapitulo = ({title, type, status}) => {
    const itemClickHandler = () => {
        console.log('Item clicked');
    }
    const iconSwitch = (value) => {
        switch (value) {
            case "complete":
                return (<Image src={"/assets/icons/okIcon.png"} width={22} height={22} alt="beginner" ></Image>)
                break;
            case "actual":
                return (<Image src={"/assets/icons/nextBlueIcon.png"} width={22} height={22} alt="beginner" ></Image>)
                break;
            case "locked":
                return (<Image src={"/assets/icons/lockIcon.png"} width={22} height={22} alt="beginner" ></Image>)
                break;
            default:
                break;
        }
    }
    return (
        <div className={`${status==='locked'?'':'cursor-pointer'} bg-[#EAF0F3] w-[232px] h-[86px] rounded-md flex-shrink-0 py-[12px] px-[12px] relative`} onClick={()=>itemClickHandler()}>
            <h6 className={`text-[16px] font-semibold ${status==='locked'?'text-[#687281]':'text-[#3A414B]'}`} >{title}</h6>
            <span className={`text-[13px] font-semibold ${status==='locked'?'text-[#989494]':'text-[#676767]'}`}>{type}</span>
            <div className='absolute right-3 bottom-3 '>
                {
                    iconSwitch(status)
                }
            </div>
        </div>
    )
}

const ItemContent = () => {
    return (
        <div className='max-w-[522px] bg-white flex flex-row flex-wrap px-[1.25rem] gap-[18px] pt-2 pb-4'>
            <ItemCapitulo title={'1.1 Empezamos'} type={'Leccion'} status="complete"/>
            <ItemCapitulo title={'1.2 Conceptos basicos'} type={'Leccion'} status="complete"/>
            <ItemCapitulo title={'1.3 Unidades de sistema'} type={'Leccion'} status="actual"/>
            <ItemCapitulo title={'1.4 Principiante'} type={'Practica'} status="locked" />
        </div>
    )
}

const ItemDropDownBox = ({icon, title, data }) => {
    const [isToggled, setIsToggled] = useState(false)
    const toggleHandler = () => {
        setIsToggled((prev)=>!prev)
    }
  return (
    <div className='flex-shrink-0'>
        <div className='w-[522px] h-[62px] bg-white flex flex-row gap-5 items-center  '>
            <div className='ml-[20px]'>
                <Image src={icon} width={42} height={42} alt="beginner" ></Image>
            </div>
            <div className='flex flex-row justify-between items-center w-full mr-[4px]'>
                <div>
                    <span className='font-semibold text-[18px]'>{title}</span>
                </div>
                <div onClick={()=>toggleHandler()} className='cursor-pointer flex flex-row justify-center items-center w-[48px] h-[48px]'>
                    {
                        isToggled?(
                            <Image src={"/assets/icons/chevronUpIcon.png"} width={20} height={20} alt="beginner" ></Image>
                        ):(                            
                            <Image src={"/assets/icons/chevronDownIcon.png"} width={20} height={20} alt="beginner" ></Image>
                        )
                    }
                </div>
            </div>
        </div>
        <div>
            {
                isToggled?(
                    <ItemContent />
                ):(<></>)
            }
        </div>

    </div>
  )
}

export default ItemDropDownBox