import React from "react";
import Image from "next/image";
import AlertContent from "../../general/AlertContent";
import ButtonNext from "../../general/ButtonNext";
import FormulasMRUVAll from "../../../public/assets/images/matemovilMruv.jpg";

const Mruv1 = () => {
  return (
    <>
      <h5 className="content-subtitle">2.2 Consideraciones</h5>
      <p className="content-paragraph">
        Para el tema de MRUV se usan 5 fórmulas para el desarrollo de problemas,
        los cuales se puede ser utilizado para buscar cualquier variable, pero
        hay que saber cual se ocupara y en qué momento, debido que existen
        ejercicios en las que los datos son brindados pero no los que se
        utilizaran en la ecuación, por eso hay que saber que formular se usará.
      </p>
      <div className="my-[2em]">
        <Image
          src={FormulasMRUVAll}
          width={600}
          height={548}
          alt="formulas mruv matemovil"
        ></Image>
      </div>
      <AlertContent
        text={
          "Esta imagen de MateMovil es una gran recopilacion. Conservala te ayudara a resolver ejercicios futuros."
        }
      />
      <div className="w-full flex justify-end mt-4 pb-6">
        <ButtonNext link={"/mruv/2.2/2"} />
      </div>
    </>
  );
};

export default Mruv1;
