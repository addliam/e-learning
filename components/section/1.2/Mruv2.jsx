import React from "react";
import ButtonNext from "../../general/ButtonNext";
import ButtonBack from "../../general/ButtonBack";

const Mruv2 = () => {
  return (
    <>
      <h5 className="content-subtitle">Unidades del MRUV</h5>
      <p className="content-paragraph">
        En los MRUV la velocidad del cuerpo es constante y por tanto igual a la
        velocidad inicial. La unidad de sistemas (S.I.) es el Metro por segundo
        (m/s).
      </p>
      <p className="content-paragraph">
        Por ejemplo si tenemos un auto que parte del reposo (v0 = 0 m/s) y
        avanza con una aceleración constante de 2 m/s². Este valor de la
        aceleración, podemos expresarlo como el valor numerico 2
      </p>
      <h5 className="content-subtitle">Posicion</h5>
      <p className="content-paragraph">
        En lo que se refiere a posición su S.I. es el metro(m).
      </p>
      <h5 className="content-subtitle">Aceleración</h5>
      <p className="content-paragraph">
        Refiriéndose a la aceleración su S.I. es el metro por segundo al
        cuadrado(m/s²). Que para el caso del MRU su valor a lo largo del
        movimiento siempre es cero.
      </p>
      <div className="w-full flex justify-between mt-[2em] pb-6">
        <ButtonBack link={"/mruv/1.2/1"} />
        <ButtonNext link={"/mruv/1.2/3"} />
      </div>
    </>
  );
};

export default Mruv2;
