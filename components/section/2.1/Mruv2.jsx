import React from "react";
import AlertContent from "../../general/AlertContent";
import ButtonNext from "../../general/ButtonNext";
import ButtonBack from "../../general/ButtonBack";
import { Equation, defaultErrorHandler } from "react-equation";
const Mruv2 = () => {
  return (
    <>
      <h5 className="content-subtitle">Sin distancia</h5>
      <p className="content-paragraph">
        Velocidad final es igual a la velocidad inicial mas la aceleracion por
        el tiempo:
      </p>
      <p className="content-paragraph text-center">vf = vo + a.t</p>
      <p className="content-paragraph">
        Esta fórmula sirve especialmente cuando el móvil parte del reposo
        aumentado la velocidad uniformemente, y se desconoce la distancia
        recorrida.
      </p>
      <h5 className="content-subtitle">Sin aceleracion</h5>
      <p className="content-paragraph">
        La distancia es igual a la velocidad inicial mas la mitad de la
        velocidad final por el tiempo:
      </p>
      <p className="content-paragraph text-center">d = (Vo + vf/2 ).t </p>
      <p className="content-paragraph">
        Esta fórmula es particularmente útil cuando el movimiento es
        uniformemente variado partiendo de cierta velocidad inicial distinta de
        0, y desconociendo la aceleración.
      </p>
      <AlertContent
        text={
          "Puedes apuntar las formulas en una hoja de papel para familiarizarte mejor con los conocimientos."
        }
      />
      <h5 className="content-subtitle">Sin velocidad final</h5>
      <p className="content-paragraph">
        La distancia es igual a la velocidad inicial por el tiempo mas el doble
        de la aceleracion por la mitad del tiempo:
      </p>
      <p className="content-paragraph text-center">d=vo*t+(a*t/2)2 </p>
      <p className="content-paragraph">
        Esta formula sirve especialmente cuando desconocemos la velocidad final
        del movimiento uniforme.
      </p>
      <div className="w-full flex justify-between mt-[2em] pb-6">
        <ButtonBack link={"/mruv/2.1/1"} />
        <ButtonNext link={"/mruv/2.1/3"} />
      </div>
    </>
  );
};

export default Mruv2;
