import React, { useEffect } from 'react'
import { useState } from 'react'

export const ClockFuncional = () => {
    const [data, setData]= useState({
        fecha:new Date(),
        edad:0,
        nombre: "martin",
        apellidos: "san jose"

    })
    let timerID= 0;


    useEffect(() => {
      timerID= setInterval(() => {
        tick()
      }, 1000);
    
      return () => {
        clearInterval(timerID)
      }
    }, [])
    
    function tick() {
       
        setData( (prevState)=>{
            let edadNueva = prevState.edad ++
            return{
            ...data,
            fecha: new Date(),
            edad : edadNueva
            }
        }
        
            
        )
    }


  return (

    <div>
        <h2>hora actual: {data.fecha.toLocaleTimeString()}</h2>
        <h3>{data.nombre} {data.apellidos}</h3>
        <h1>Edad: {data.edad}</h1>

    </div>
  )
}
