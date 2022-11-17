import React from 'react'
import SmallTopBar from '../../components/general/SmallTopBar'
import { useRouter } from 'next/router'
import content from '../../public/assets/content.json'

const MruvId = () => {
    const router = useRouter()
    const { slug } = router.query
    const itemsContent = content[0].items
    const primerSubindice = itemsContent.find((item)=>item.subindice === 1.1)
    console.log(primerSubindice);
    return (
        <>
            <SmallTopBar />
            {slug}
            <p>El contenido del subindice {primerSubindice.subindice} es:</p>
            <p>Numero de paginas: {primerSubindice.numeroPaginas}</p>
            {primerSubindice.paginas[0].contenido}
        </>
    )
}

export default MruvId