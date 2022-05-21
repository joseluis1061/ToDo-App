import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Search } from './components/Search'
import {TodoList} from './components/TodoList'
import {NewTodo} from './components/NewTodo'

function App() {
  const listaTareas=['Comer', 'Correr', 'Comprar']
  return (
    <div className="App">
      <h1>To Do Machine</h1>

      <Search/>
      <NewTodo/>
      <TodoList
        listaTareas = {listaTareas}
      />

    </div>
  )
}

export default App
