import React from "react";
import MultipleChoice from "../../general/questions/multiple-choice/MultipleChoice";

const Mruv3 = () => {
  const data = {
    opciones: [
      {
        indice: 1,
        texto: "distancia",
      },
      {
        indice: 2,
        texto: "masa",
      },
      {
        indice: 3,
        texto: "tiempo",
      },
      {
        indice: 4,
        texto: "aceleracion",
      },
      {
        indice: 5,
        texto: "carga electrica",
      },
    ],
    correctas: [2, 5],
  };
  return (
    <>
      <h5 className="content-subtitle">1.3.3 Practica: Principiante</h5>
      <p className="question-indication">
        Son variables que<b> NO </b>intervienen en el MRUV
      </p>
      <p className="question-hint">Selecciona todas las que NO cumplan</p>
      <MultipleChoice back={"/mruv/1.3/2"} next={"/mruv/1.4/1"} data={data} />
    </>
  );
};

export default Mruv3;
