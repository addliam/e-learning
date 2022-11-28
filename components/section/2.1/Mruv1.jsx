import React from "react";
import AlertContent from "../../general/AlertContent";
import ButtonNext from "../../general/ButtonNext";

const Mruv1 = () => {
  return (
    <>
      <h5 className="content-subtitle">2.1 Formula simple</h5>
      <p className="content-paragraph">
        Siendo una cadena de caracteres cuyos símbolos pertenecen a un lenguaje
        formal ya que la expresión llega a cumplir aquellas normas de buena
        formación y admite una interpretación consistente en alguna área de la
        matemática y en otros sistemas formales.
      </p>
      <h5 className="content-subtitle">Variables</h5>
      <p className="content-paragraph">
        Siguiendo las 5 fórmulas o ecuaciones para resolver ejercicios de
        M.R.U.V de las cuales significan lo siguiente:
      </p>
      <p className="content-paragraph">Vo = Velocidad inicial</p>
      <p className="content-paragraph">a = Aceleración</p>
      <p className="content-paragraph">Vf = Velocidad final</p>
      <p className="content-paragraph">d = Distancia recorrida</p>
      <AlertContent
        text={
          "Recuerda que las variables de la formula deben estar en unidades del sistema internacional."
        }
      />
      <div className="w-full flex justify-end mt-4 pb-6">
        <ButtonNext link={"/mruv/2.1/2"} />
      </div>
    </>
  );
};

export default Mruv1;
