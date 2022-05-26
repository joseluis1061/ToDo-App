import { useState } from 'react'
import './App.css'
import { Search } from './components/Search'
import {TodoList} from './components/TodoList'
import {NewTodo} from './components/NewTodo'
import { Counter } from './components/Counter'


const defaultList = [{text:'Comer', complete:false, id:'0'},
{text:'Programar', complete:true, id:'1'},
{text:'Correr', complete:false, id:'2'},
{text:'Dormir', complete:true, id:'3'}];

function App() {
  const [listaTareas, setListaTareas] = useState(defaultList);
  const [serchText, setSerchText] = useState('');

  //Conteo completadas y totales
  const contarTotalComplete = () =>{
    const contador = listaTareas.filter((tarea)=>{
      return tarea.complete === true;
    });
    return contador.length;
  }
  const totalComplete = contarTotalComplete();
  const totalTareas = listaTareas.length;


  //Busqueda  
  let lista = listaTareas;
  if(serchText){
    console.log("Detecto busqueda "+serchText)
    const newLista = listaTareas.filter((tarea)=>{
      let busqueda = serchText.toUpperCase();
      let textoLista = tarea.text.toUpperCase();
      console.log(`Logica es: ${textoLista === busqueda}`)
      console.log(`busqueda es: ${busqueda}`)
      console.log(`textoLista es: ${textoLista}`)
      return textoLista.includes(busqueda);
    });
    lista = newLista;
    console.log("Tamaño lista es "+lista.length)
  }


  return (
    <div className="App">
      <h1>To Do Machine</h1>

      <Counter 
      totalComplete= {totalComplete} 
      totalTareas = {totalTareas}
      />

      <Search 
        serchText = {serchText}
        setSerchText = {setSerchText}        
      />
      <NewTodo
        listaTareas = {listaTareas}
        setListaTareas = {setListaTareas}
      />
      <TodoList
        listaTareas = {listaTareas}
        lista = {lista}
      />

    </div>
  )
}

export default App
