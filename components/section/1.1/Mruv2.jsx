import React from 'react'
import AlertContent from '../../../components/general/AlertContent'
import ButtonNext from '../../../components/general/ButtonNext'

const Mruv2 = () => {
  return (
    <>
        <h5 className='content-subtitle'>A quienes esta dirigido</h5>
        <p className='content-paragraph'>
            {/* {primerSubindice?.paginas[0].contenido} */}
            Primera pagina de 1.1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                        
        </p>
        <AlertContent text={"This is an alert. Remember that in phsyics we don't care much about Maths, instead we try to explain phenomens that ocurr on earth and space. Follow me for more information."} />
        <p className='content-paragraph'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <b>Mollitia cumque</b> aliquid placeat culpa reprehenderit, ducimus assumenda eaque quae aperiam consectetur enim perspiciatis corporis explicabo amet. Quasi beatae quidem neque voluptatum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad soluta cum aliquam dolorem possimus. Accusantium in cum exercitationem obcaecati veritatis? Obcaecati eaque saepe quod adipisci? Ad quas tenetur magnam quia?
        </p>
        <h5 className='content-subtitle'>Cuanto tiempo dura el curso</h5>
        <p className="content-paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptatibus atque ratione quod omnis placeat facere voluptatum, impedit exercitationem alias, adipisci expedita maiores perferendis magni aliquam quia, temporibus ea blanditiis?
        </p>
        <ButtonNext link={"/mruv/1.1/3"} />
    </>
  )
}

export default Mruv2