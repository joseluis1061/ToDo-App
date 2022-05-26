import React from 'react'

import { useState } from 'react'
export const NewTodo = ({listaTareas, setListaTareas}) => {
    const[tareaTexto, setTareaTexto] = useState('');

    const idRandom = ()=>{
        const dateNow = Date.now().toString(36);
        const numberRandom = Math.random().toString(36).substring(2);
        return dateNow+numberRandom;
    }


    const addTarea=(e)=>{
        e.preventDefault();
        if(tareaTexto === ''){
            console.log('Vacia'+nuevaTarea);
            return;
        }       
        const nuevaTarea = {
            text:tareaTexto, complete:false, id:idRandom()
        }
        console.log('Nueva tarea Obtenida '+nuevaTarea)
        setListaTareas([...listaTareas, nuevaTarea]);
        setTareaTexto('');
    }

  return (
    <div>
        <h2>Add To do</h2>
        <form onSubmit={addTarea}>
            <input 
            type="text" 
            value={tareaTexto}
            onChange={(e)=>{
                setTareaTexto(e.target.value);
            }}       
            />

            <button type='submit'>
                Add
            </button>
        </form>
        
        
        
    </div>
  )
}
