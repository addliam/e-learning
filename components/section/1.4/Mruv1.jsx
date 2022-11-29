import React from "react";
import Image from "next/image";
import MultipleChoice from "../../general/questions/multiple-choice/MultipleChoice";
import SatelliteImage from "../../../public/assets/images/practica-1.4.webp";

const Mruv1 = () => {
  const data = {
    opciones: [
      {
        indice: 1,
        texto: "d = 3000 y a = 2222.22",
      },
      {
        indice: 2,
        texto: "d = 1300 y a = 8888.88",
      },
      {
        indice: 3,
        texto: "d = 1350 y a = 3333.33",
      },
      {
        indice: 4,
        texto: "d = 1400 y a = 3400.50",
      },
      {
        indice: 5,
        texto: "d = 1500 y a = 3333.33",
      },
    ],
    correctas: [3],
  };
  return (
    <>
      <h5 className="content-subtitle">1.4 Practica: Principiante</h5>
      <p className="question-indication">
        Un satélite en el espacio que se encuentra quieto, va modificar su
        posición moviéndose en línea recta, si este se logra tomar una velocidad
        de 300 m/s en tan solo 0,9s ¿Cual es la aceleración que se aplicó y la
        distancia recorrida en ese corto tiempo?
      </p>
      <div className="my-[2em] flex justify-center">
        <Image
          src={SatelliteImage}
          width={520}
          height={312}
          alt="satelite europeo animado"
        ></Image>
      </div>
      <p className="question-hint">Selecciona la alternativa correcta</p>
      <MultipleChoice back={"/mruv/1.3/2"} next={"/mruv/1.4/1"} data={data} />
    </>
  );
};

export default Mruv1;
