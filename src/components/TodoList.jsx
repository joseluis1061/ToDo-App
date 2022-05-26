import React from 'react'
import { Todo } from './Todo'

export const TodoList = ({lista, onRemove, onComplete}) => {
  return (
    <div>
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
