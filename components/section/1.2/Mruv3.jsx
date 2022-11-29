import React from "react";
import MultipleChoice from "../../general/questions/multiple-choice/MultipleChoice";

const Mruv3 = () => {
  const data = {
    opciones: [
      {
        indice: 1,
        texto: "longitud (m)",
      },
      {
        indice: 2,
        texto: "masa (ton)",
      },
      {
        indice: 3,
        texto: "segundo (segu)",
      },
      {
        indice: 4,
        texto: "aceleracion (m/s²)",
      },
      {
        indice: 5,
        texto: "corriente electrica (W)",
      },
    ],
    correctas: [1, 4],
  };

  return (
    <>
      <h5 className="content-subtitle">1.2.3 Practica: Principiante</h5>
      <p className="question-indication">
        Son las representaciones simbolicas de las magnitudes
      </p>
      <p className="question-hint">Selecciona todas las que cumplan</p>
      <MultipleChoice back={"/mruv/1.2/2"} next={"/mruv/1.3/1"} data={data} />
    </>
  );
};

export default Mruv3;
