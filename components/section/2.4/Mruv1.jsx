import React from "react";
import MultipleChoice from "../../general/questions/multiple-choice/MultipleChoice";
import { Equation, defaultErrorHandler } from "react-equation";
import Image from "next/image";
import QuestionImg from "../../../public/assets/images/practica-2.4.png";
const Mruv1 = () => {
  const data = {
    opciones: [
      {
        indice: 1,
        texto: "200",
      },
      {
        indice: 2,
        texto: "12",
      },
      {
        indice: 3,
        texto: "5",
      },
      {
        indice: 4,
        texto: "20",
      },
      {
        indice: 5,
        texto: "24",
      },
    ],
    correctas: [4],
  };

  return (
    <>
      <h5 className="content-subtitle">Practica: Intermedio</h5>
      <p className="question-indication">
        Un auto parte del reposo con una aceleracion de 2 m/
        <span className=" ">
          <Equation value="s^2" errorHandler={defaultErrorHandler} />
        </span>
        . Cual es la velocidad que alcanza en el transcurso de 10 segundos.
      </p>
      <div className="py-[2.5em]">
        <Image
          src={QuestionImg}
          width={560}
          height={437.6532}
          alt="carro morado mruv"
        ></Image>
      </div>
      <p className="question-hint">Selecciona la alternatica correcta</p>
      <MultipleChoice back={"/mruv/2.3/1"} next={"/mruv/3.1/1"} data={data} />
      {/* MultipleChoice should include ButtonBack n Next ? */}
    </>
  );
};

export default Mruv1;
