import React from 'react'
import { useState } from 'react'

export const Search = ({listaTareas, serchTareas,setSerchTareas}) => {
  
  const [datoBuscado, setDatoBuscado] = useState('')

 
  function busqueda(e){
    e.preventDefault();
    setDatoBuscado(e.target.value)
    
    if(datoBuscado===''){    
      setSerchTareas([...listaTareas]);
    }
    const datoFiltrado = listaTareas.filter((valor)=>{
      return valor.includes(datoBuscado);
    })
    setSerchTareas(datoFiltrado);
    // setDatoBuscado('');    
  }
  
  return (

    <input type="text" id='search'
          value = {datoBuscado}
          onChange={busqueda}
        />    
  )
}
