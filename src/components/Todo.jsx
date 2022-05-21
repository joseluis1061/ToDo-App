import React from 'react'

export const Todo = ({tarea}) => {
    const terminada = (tarea)=>{
        console.log('terminada '+tarea);
    }
    const borrar = (tarea)=>{
        console.log('borrar '+tarea);
    }
  return (
    <div>
        <p>
        <span
            onClick={()=>terminada(tarea)}
        >OK</span> 
        {tarea} 
        <span
            onClick={()=>borrar(tarea)}
        >X</span>
        </p>
    </div>
  )
}
