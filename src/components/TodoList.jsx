import React from 'react'
import { Todo } from './Todo'

export const TodoList = ({error, loading, lista, onRemove, onComplete}) => {
  return (
    <div>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && lista.length<=0) && <p>¡Crea tu primer TODO!</p>}
        <h2>To Do List</h2>
        {
        lista.map((tarea)=>{          
          return <Todo 
            key = {tarea.id} 
            id = {tarea.id} 
            text={tarea.text} 
            complete = {tarea.complete} 
            onRemove= {onRemove}
            onComplete = {onComplete}
          />
        })    
        }
    </div>
  )
}
