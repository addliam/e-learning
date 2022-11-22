import React, {useEffect, useRef} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CloseIcon from '../../public/assets/icons/CloseSimple.svg'
import SmallTopBar from './SmallTopBar'
import ProgressBar from './ProgressBar'

const SectionLayout = ({children, id}) => {
    const refContent = useRef(null)

    useEffect(() => {
        refContent.current.scrollTo({ top: 0, behavior: 'instant' });    
      return () => {
      }
    }, [id])
    
    return (
        <main className=''>
            <SmallTopBar />
            <section className='mt-5 flex justify-center items-center'>
                <div className='w-[30%] items-center'>
                    <div className='ml-10 flex gap-4 items-center'>
                        <Link href={"/mruv"}>
                            <Image src={CloseIcon} alt="close icon" width="16px" height="16px">
                            </Image>
                        </Link>
                        <span className='text-[17px] text-[#6B7F99] font-semibold'>1.1 Empezamos</span>
                    </div>
                </div>
                <div className='w-[45%] flex justify-center items-center h-[3rem]'>
                    <ProgressBar part={id?id:1} total={3} />
                </div>
                <div className='w-[35%] items-center h-[3rem]'>
                </div>
            </section>

            <section  ref={refContent} className='content relative flex justify-center my-4 overflow-y-scroll max-h-[30rem]'>
                <div className="subsection_content w-[36.25rem] pt-6">
                    {
                        children
                    }
                </div>
            </section>
        </main>
    )
}

export default SectionLayout