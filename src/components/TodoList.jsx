import React from 'react'
import { Todo } from './Todo'

export const TodoList = ({listaTareas}) => {
  return (
    <div>
        <h2>To Do List</h2>
        {
        listaTareas.map((tarea, id)=>{
            return <Todo key = {id} tarea={tarea}/>
        })    
        }
    </div>
  )
}
