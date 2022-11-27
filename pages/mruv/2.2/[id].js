import { useRouter } from 'next/router'
import SectionLayout from '../../../components/general/SectionLayout'
// MRUV SubSections for 1.1
import Mruv1 from '../../../components/section/1.4/Mruv1'
import Mruv2 from '../../../components/section/1.4/Mruv2'
import Mruv3 from '../../../components/section/1.4/Mruv3'

const MruvIdHandler = () => {
    const router = useRouter()
    const { id } = router.query

    return(
        <SectionLayout id={id}>
            {
                {
                    '1':<Mruv1 />,
                    '2':<Mruv2 />,
                    '3':<Mruv3 />
                }[id]
            }
        </SectionLayout>
    )
}

export default MruvIdHandler