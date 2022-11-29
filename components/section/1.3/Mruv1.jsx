import React from "react";
import AlertContent from "../../general/AlertContent";
import ButtonNext from "../../general/ButtonNext";

const Mruv1 = () => {
  return (
    <>
      <h5 className="content-subtitle">1.3 Conceptos basicos</h5>
      <p className="content-paragraph">
        Sabemos que la teoria y los conceptos pueden resultar confusos, pero te
        ayudaran a familiarizar y entender los principales conceptos que
        emplearemos a lo largo del curso.
      </p>
      <h5 className="content-subtitle">Distancia</h5>
      <p className="content-paragraph">
        En Física, la distancia es la longitud total de la trayectoria realizada
        por un objeto móvil entre dos puntos. Como tal, se expresa en una
        magnitud escalar, mediante unidades de longitud, principalmente el
        metro, según el Sistema Internacional de Unidades.
      </p>
      <h5 className="content-subtitle">Aceleracion</h5>
      <p className="content-paragraph">
        La aceleración es el nombre que le damos a cualquier proceso en donde la
        velocidad cambia. Como la velocidad es una rapidez y una dirección, solo
        hay dos maneras para que aceleres: cambia tu rapidez o cambia tu
        dirección (o cambia ambas).
      </p>
      <AlertContent
        text={"Piensa en la aceleracion como el cambio de la velocidad."}
      />
      <div className="w-full flex justify-end mt-4 pb-6">
        <ButtonNext link={"/mruv/1.3/2"} />
      </div>
    </>
  );
};

export default Mruv1;
