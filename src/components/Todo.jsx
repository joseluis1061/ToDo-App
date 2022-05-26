import React from 'react'

export const Todo = ({text, id, completed}) => {
    const terminada = (text)=>{
        console.log('terminada '+text);
    }
    const borrar = (text)=>{
        console.log('borrar '+text);
    }
  return (
    <div>
        <p>
        <span
            onClick={()=>terminada(text)}
        >OK</span> 
        {text} 
        <span
            onClick={()=>borrar(text)}
        >X</span>
        </p>
    </div>
  )
}
