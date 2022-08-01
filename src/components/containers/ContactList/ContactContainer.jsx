import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Contact from '../../pure/Contact';

const ContactContainer = props => {
  const [datosContacto, setDatosContacto]= useState({
    datos:{
    nombre:'juan',
    apellido:'perez',
    email:'juanperez@gmail.com',
},
conectado:false
  }

);




function handleClick(e) {
 setDatosContacto({
  ...datosContacto,
  conectado:!datosContacto.conectado
})
}

  return (
    <div>
      <Contact
      contacto= {datosContacto}
      />
      <button 
        onClick={handleClick} 
        value={datosContacto.conectado}> 
        online/offline
        </button>
    </div>
  )
}

ContactContainer.propTypes = {}

export default ContactContainer