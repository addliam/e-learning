import { useRouter } from "next/router";
import SectionLayout from "../../../components/general/SectionLayout";
// MRUV SubSections for 1.1
import Mruv1 from "../../../components/section/2.4/Mruv1.jsx";

const MruvIdHandler = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <SectionLayout id={id} total={1}>
      {
        {
          1: <Mruv1 />,
        }[id]
      }
    </SectionLayout>
  );
};

export default MruvIdHandler;
