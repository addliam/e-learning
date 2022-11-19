import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SmallTopBar from '../../components/general/SmallTopBar'
import { useRouter } from 'next/router'
import content from '../../public/assets/content.json'
import CloseIcon from '../../public/assets/icons/CloseSimple.svg'
import AlertIcon from '../../public/assets/icons/AlertIcon.svg'

// TODO: Organize components on independent files and subfolders

const ProgressBar = () => {
    return (
        <div className='w-[30rem] relative bg-[#EAF0F3] h-2 rounded-lg'>
            <div className='h-2 bg-[#40BF9C] w-[30%] absolute rounded-lg' />
        </div>
    )
}

const AlertContent = () =>{
    return (
        <div className='content-info rounded-[6px] flex flex-row bg-[#F6E9C8] px-4 py-4 '>
            <div className='shrink-0 mr-3 w-fit flex items-center '>
                <Image src={AlertIcon} alt="alert icon" width="25px" height="25px"></Image>
            </div>
            <div>
                <p className="content-alert">
                    This is an alert. Remember that in phsyics we don't care much about Maths, instead we try to explain phenomens that ocurr on earth and space. Follow me for more information.
                </p>
            </div>
        </div>
    )
}

const MruvId = () => {
    const router = useRouter()
    const { slug } = router.query
    console.log({slug, type: typeof slug})
    const itemsContent = content[0].items
    const primerSubindice = itemsContent.find((item)=> item.subindice === slug)
    console.log(primerSubindice)
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
                    <ProgressBar />
                </div>
                <div className='w-[35%] items-center h-[3rem]'>
                </div>

            </section>
            <section className='content flex justify-center my-4 overflow-y-scroll max-h-[30rem]'>
                <div className="w-[36.25rem] pt-6">
                    <h5 className='content-subtitle'>1.1 Empezamos</h5>
                    <p className='content-paragraph'>El contenido del subindice {primerSubindice?.subindice} es:</p>
                    <p className='content-paragraph'>
                        <span className='content-paragraph contrast'>Numero de paginas: </span>
                        {primerSubindice?.numeroPaginas}
                    </p>
                    <p className='content-paragraph'>
                        {primerSubindice?.paginas[0].contenido}
                    </p>
                    <AlertContent />
                    <p className='content-paragraph'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia cumque aliquid placeat culpa reprehenderit, ducimus assumenda eaque quae aperiam consectetur enim perspiciatis corporis explicabo amet. Quasi beatae quidem neque voluptatum!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad soluta cum aliquam dolorem possimus. Accusantium in cum exercitationem obcaecati veritatis? Obcaecati eaque saepe quod adipisci? Ad quas tenetur magnam quia?
                    </p>
                    <div className='w-full flex justify-end mt-4 pb-6'>
                        <button className='continue rounded-[6px] px-10 py-3 bg-[#2493DF] hover:bg-[#2188cd] font-semibold text-[#FFFFFF]'>Continue</button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default MruvId