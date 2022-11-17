import React from 'react'
import SmallTopBar from '../../components/general/SmallTopBar'
import { useRouter } from 'next/router'

const MruvId = () => {
    const router = useRouter()
    const { slug } = router.query
    return (
        <>
            <SmallTopBar />
            {slug}
        </>
    )
}

export default MruvId