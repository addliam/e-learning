import React from 'react'
import Image from 'next/image'
import AlertIcon from '../../public/assets/icons/AlertIcon.svg'

const AlertContent = ({text}) => {
    return (
        <div className='content-info rounded-[6px] flex flex-row bg-[#F6E9C8] px-4 py-4 my-[1.5em] '>
            <div className='shrink-0 mr-3 w-fit flex items-center '>
                <Image src={AlertIcon} alt="alert icon" width="25px" height="25px"></Image>
            </div>
            <div>
                <p className="content-alert">
                    { text }
                </p>
            </div>
        </div>
    )
}

export default AlertContent