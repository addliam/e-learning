import React from "react";
import AlertContent from "../../general/AlertContent";
import ButtonNext from "../../general/ButtonNext";
import ButtonBack from "../../general/ButtonBack";

const Mruv2 = () => {
  return (
    <>
      <h5 className="content-subtitle">Velocidad</h5>
      <p className="content-paragraph">
        La velocidad es una<b> magnitud física </b>que expresa la relación entre
        el espacio recorrido por un objeto, el tiempo empleado para ello y su
        dirección. Debido a que la velocidad también considera la dirección en
        que se produce el desplazamiento de un objeto, es considerada una
        magnitud de carácter vectorial.
      </p>
      <p className="content-paragraph">
        Así, la velocidad implica el cambio de posición de un objeto en el
        espacio dentro de determinada cantidad de tiempo, es decir, la
        aceleración, más la dirección en que se produce dicho movimiento. De
        allí que velocidad y aceleración no sean lo mismo.
      </p>
      <h5 className="content-subtitle">Tiempo</h5>
      <p className="content-paragraph">
        En física se llama tiempo a una magnitud que sirve para medir la
        duración o la separación de uno o más acontecimientos. Esto permite
        ordenarlos en una secuencia (pasado, presente, futuro) y determinar si
        ocurren o no en simultáneo. Su unidad es el segundo (s)
      </p>
      <h5 className="content-subtitle">MRU vs MRUV</h5>
      <p className="content-paragraph">
        La diferencia entre el mru y el mruv es debido a su aceleración
        mencionamos esto ya que muchas personas suelen creer que son lo mismo o
        con pequeñas variaciones de nombres pero no es asi. La aceleración es el
        cambio constante que la velocidad sufre en un periodo de tiempo la cual
        es la que distingue entre esos dos.
      </p>
      <AlertContent
        text={
          "Recuerda que puedes hacer pausas regulares para asimilar mejor los conocimientos."
        }
      />
      <div className="w-full flex justify-between mt-[2em] pb-6">
        <ButtonBack link={"/mruv/1.3/1"} />
        <ButtonNext link={"/mruv/1.3/3"} />
      </div>
    </>
  );
};

export default Mruv2;
