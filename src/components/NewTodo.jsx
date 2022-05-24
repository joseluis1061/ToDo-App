import React from 'react'

import { useState } from 'react'
export const NewTodo = ({listaTareas, setListaTareas}) => {
    const[nuevaTarea, setNuevaTarea] = useState('');


    const addTarea=(e)=>{
        e.preventDefault();
        if(nuevaTarea === ''){
            console.log('Vacia'+nuevaTarea)
            return;
        }       
        console.log('Obtenida '+nuevaTarea)
        setListaTareas([...listaTareas, nuevaTarea]);
        setNuevaTarea('');
    }

  return (
    <div>
        <h2>Add To do</h2>
        <form onSubmit={addTarea}>
            <input 
            type="text" 
            value={nuevaTarea}
            onChange={(e)=>{
                setNuevaTarea(e.target.value);
            }}       
            />

            <button type='submit'>
                Add
            </button>
        </form>
        
        
        
    </div>
  )
}
