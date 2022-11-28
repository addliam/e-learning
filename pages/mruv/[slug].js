// TODO: Delete this file
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import content from "../../public/assets/content.json";

import CloseIcon from "../../public/assets/icons/CloseSimple.svg";

import SmallTopBar from "../../components/general/SmallTopBar";
import AlertContent from "../../components/general/AlertContent";
import Button from "../../components/general/ButtonNext";
import ProgressBar from "../../components/general/ProgressBar";

const MruvId = () => {
  const router = useRouter();
  const { slug } = router.query;
  const itemsContent = content[0].items;
  const primerSubindice = itemsContent.find((item) => item.subindice === slug);
  return (
    <main className="">
      <SmallTopBar />
      <section className="mt-5 flex justify-center items-center">
        <div className="w-[30%] items-center">
          <div className="ml-10 flex gap-4 items-center">
            <Link href={"/mruv"}>
              <Image
                src={CloseIcon}
                alt="close icon"
                width="16px"
                height="16px"
              ></Image>
            </Link>
            <span className="text-[17px] text-[#6B7F99] font-semibold">
              1.1 Empezamos
            </span>
          </div>
        </div>
        <div className="w-[45%] flex justify-center items-center h-[3rem]">
          <ProgressBar />
        </div>
        <div className="w-[35%] items-center h-[3rem]"></div>
      </section>

      <section className="content flex justify-center my-4 overflow-y-scroll max-h-[30rem]">
        <div className="w-[36.25rem] pt-6">
          <h5 className="content-subtitle">2.1 Empezamos</h5>
          <p className="content-paragraph">
            El contenido del subindice {primerSubindice?.subindice} es:
          </p>
          <p className="content-paragraph">
            {/* {primerSubindice?.paginas[0].contenido} */}
            Primera pagina de 1.1 Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
          <AlertContent
            text={
              "This is an alert. Remember that in phsyics we don&apos;t care much about Maths, instead we try to explain phenomens that ocurr on earth and space. Follow me for more information."
            }
          />
          <p className="content-paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
            <b>Mollitia cumque</b> aliquid placeat culpa reprehenderit, ducimus
            assumenda eaque quae aperiam consectetur enim perspiciatis corporis
            explicabo amet. Quasi beatae quidem neque voluptatum! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ad soluta cum aliquam
            dolorem possimus. Accusantium in cum exercitationem obcaecati
            veritatis? Obcaecati eaque saepe quod adipisci? Ad quas tenetur
            magnam quia?
          </p>
          <AlertContent
            text={"Ocurr on earth and space. Follow me for more information."}
          />
          <Button />
        </div>
      </section>
    </main>
  );
};

export default MruvId;
