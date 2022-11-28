import React from "react";
import AlertContent from "../../general/AlertContent";
import ButtonNext from "../../general/ButtonNext";
import ButtonBack from "../../general/ButtonBack";

const Mruv2 = () => {
  return (
    <>
      <h5 className="content-subtitle">A considerar</h5>
      <p className="content-paragraph">
        Presta especial atencion a las variables que no estan presentes en un
        problema dado.
      </p>
      <AlertContent
        text={
          "Recuerda que puedes hacer pausas regulares para asimilar mejor los conocimientos."
        }
      />
      <h5 className="content-subtitle">Impresiones previas</h5>
      <p className="content-paragraph">
        Tenemos 2 opciones una calculadora donde usted podrá hacer sus cálculos
        de manera más fácil, obviamente el aparte del tema en concreto donde
        tiene opciones como leer una introducción acerca del tema también un
        apartado de fórmulas, también podrá guiarse con los ejercicios resueltos
        que se da mostrar, también se encuentra un lugar de aplicativos donde
        pondrá en práctica todo lo aprendido durante el uso del programa. Al
        final de todo tendrá un cuestionario sobre los requisitos para el curso.
      </p>
      <div className="w-full flex justify-between mt-[2em] pb-6">
        <ButtonBack link={"/mruv/2.2/1"} />
        <ButtonNext link={"/mruv/2.2/3"} />
      </div>
    </>
  );
};

export default Mruv2;
