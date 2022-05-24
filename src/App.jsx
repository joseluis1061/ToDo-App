import { useState } from 'react'
import './App.css'
import { Search } from './components/Search'
import {TodoList} from './components/TodoList'
import {NewTodo} from './components/NewTodo'


const defaultList = ['Comer', 'Correr', 'Comprar'];

function App() {


  const [listaTareas, setListaTareas] = useState(defaultList);
  const [serchTareas, setSerchTareas] = useState(listaTareas);
  return (
    <div className="App">
      <h1>To Do Machine</h1>

      <Search 
        listaTareas = {listaTareas}
        serchTareas ={serchTareas}
        setSerchTareas = {setSerchTareas}
        
      />
      <NewTodo
        listaTareas = {listaTareas}
        setListaTareas = {setListaTareas}
      />
      <TodoList
        listaTareas = {serchTareas}
      />

    </div>
  )
}

export default App
