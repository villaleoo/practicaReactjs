import React, { useState } from 'react'
import PropTypes from 'prop-types'


const Contact = ({contacto}) => {
    console.log(contacto);
    
    
  return (
    <div>
        <div>
            <h2>Nombre: {contacto.datos.nombre}</h2>
            <h2>Apellido: {contacto.datos.apellido}</h2>
            <h2>Mail: {contacto.datos.email}</h2>
            {
                contacto.conectado ? <h2>En linea</h2> : <h2>No disponible</h2>
            }
        </div>
    </div>
  )
}
Contact.propTypes= {
  contacto: PropTypes.object
}



export default Contact