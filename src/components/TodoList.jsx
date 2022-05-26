import React from 'react'
import { Todo } from './Todo'

export const TodoList = ({listaTareas, lista}) => {
  return (
    <div>
        <h2>To Do List</h2>
        {
        lista.map((tarea)=>{
            return <Todo key = {tarea.id} text={tarea.text} completed = {tarea.completed}/>
        })    
        }
    </div>
  )
}
