import React from "react";
import AlertContent from "../../general/AlertContent";
import ButtonNext from "../../general/ButtonNext";

const Mruv1 = () => {
  return (
    <>
      <h5 className="content-subtitle">1.2 Unidades del sistema</h5>
      <p className="content-paragraph">
        El Sistema Internacional de Unidades es un sistema constituido por siete
        unidades básicas: metro, kilogramo, segundo, kelvin, amperio, mol y
        candela, que definen a las correspondientes<b> magnitudes físicas </b>
        fundamentales y que han sido elegidas por convención.
      </p>
      <p className="content-paragraph">
        Su unidad en el Sistema Internacional (S.I.) es el metro (m) v, v0: La
        velocidad del cuerpo en un instante dado (v) y en el instante inicial
        (v0). Su unidad en el Sistema Internacional es el metro por segundo
        (m/s)
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
      <div className="w-full flex justify-end mt-4 pb-6">
        <ButtonNext link={"/mruv/1.2/2"} />
      </div>
    </>
  );
};

export default Mruv1;
