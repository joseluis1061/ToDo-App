import { useState, useEffect } from 'react'
import './App.css'
import { Search } from './components/Search'
import {TodoList} from './components/TodoList'
import {NewTodo} from './components/NewTodo'
import { Counter } from './components/Counter'


function useLocalStorage(itemName, initialValue){
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);


  useEffect(()=>{
    setTimeout(()=>{
      try{
        const localList = localStorage.getItem(itemName);
        let listaStorage;
        if(!localList){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          listaStorage = initialValue;
        }else{
          listaStorage = JSON.parse(localList);
        }
        setItem(listaStorage);
        setLoading(false);
      } catch(error) {
        setError(true);
      }
    }, 1000);
  },[]);
  
  const saveItem = (newItem) => {
    try{
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    }catch(error){
      setError(error);
    }

  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}


function App() {
  const {
    item:listaTareas,
    saveItem:setListaTareas,
    loading,
    error,
  } = useLocalStorage('listaTareas_V1', []);

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
      return textoLista.includes(busqueda);
    });
    lista = newLista;
  }

  //Marcar tarea terminada
  const onComplete=(id)=>{
    const indexComplete = listaTareas.findIndex((tarea)=>{
      return tarea.id === id;
    });
    const newList = [...listaTareas]
    newList[indexComplete].complete = !newList[indexComplete].complete;
    localStorage.setItem('listaTareas_V1',JSON.stringify(newList));
    setListaTareas(newList)
  };

  //Eliminar tarea
  const onRemove=(id)=>{
    const indexRemove = listaTareas.findIndex((tarea)=>{
      return tarea.id === id;
    });
    const newList = [...listaTareas]
    newList.splice(indexRemove, 1);
    localStorage.setItem('listaTareas_V1',JSON.stringify(newList));
    setListaTareas(newList)
  };

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
        error = {error}
        loading= {loading}  
        lista = {lista}
        onRemove = {onRemove}
        onComplete = {onComplete}
      />

    </div>
  )
}

export default App
