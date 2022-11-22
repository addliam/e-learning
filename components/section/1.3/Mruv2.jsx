import React from 'react'
import AlertContent from '../../general/AlertContent'
import ButtonNext from '../../general/ButtonNext'
import ButtonBack from '../../general/ButtonBack'

const Mruv2 = () => {
  return (
    <>
        <h5 className='content-subtitle'>1.3.2 A quienes esta dirigido</h5>
        <p className='content-paragraph'>
          Este programa está hecho para el aprendiz que desea aprender el tema MRUV y tener una idea del tema, si usted ya tiene una base entonces el programa le puede ofrecer un refuerzo. Quizás esté en pleno de una práctica de autoaprendizaje y no tienes un resultado seguro, nuestro programa te puede ofrecer de mucho para ir por el camino del aprendizaje.        </p>
        <AlertContent text={"Recuerda que puedes hacer pausas regulares para asimilar mejor los conocimientos."} />
        <h5 className='content-subtitle'>Impresiones previas</h5>
        <p className='content-paragraph'>
          Tenemos 2 opciones una calculadora donde usted podrá hacer sus cálculos de manera más fácil, obviamente el aparte del tema en concreto donde tiene opciones como leer una introducción acerca del tema también un apartado de fórmulas, también podrá guiarse con los ejercicios resueltos que se da mostrar, también se encuentra un lugar de aplicativos donde pondrá en práctica todo lo aprendido durante el uso del programa. Al final de todo tendrá un cuestionario sobre los requisitos para el curso.
        </p>
        <div className='w-full flex justify-between mt-[2em] pb-6'>
          <ButtonBack link={"/mruv/1.3/1"} />
          <ButtonNext link={"/mruv/1.3/3"} />
        </div>
    </>
  )
}

export default Mruv2