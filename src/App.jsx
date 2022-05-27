import { useState, useEffect } from 'react'
import './App.css'
import { Search } from './components/Search'
import {TodoList} from './components/TodoList'
import {NewTodo} from './components/NewTodo'
import { Counter } from './components/Counter'


function useLocalStorage(itemName, initialValue){
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  //Ahora debo crear el hook que producira los cambios de variable item
  //al interior de mi app iniciandolos con el valor inicial que obtuve
  //desde el local Storage
  const [item, setItem] = useState(initialValue);


  useEffect(()=>{
    setTimeout(()=>{
      try{
        //Solicita la base de datos de local storage
        const localList = localStorage.getItem(itemName);
        //Inicio la variable que contiene la info de tareas
        let listaStorage;
        //Compruebo si obtengo datos, en caso de que no...
        if(!localList){
          //Inicio un item con estado vacio de la base de datos localStorage
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          //Tambien inicio mi variable de App en el mismmo estado vacio
          listaStorage = initialValue;
        }else{
          //Si obtengo datos lo transformo de Json a un tipo de dato
          //que pueda procesar y consumir en mi APP
          listaStorage = JSON.parse(localList);
        }
        //Si obtengo respuesta cambio el estado de mi variable
        //App por el que obtuve desde mi localStorage
        setItem(listaStorage);
        //Indico que ya no estoy cargando mi respuesta
        setLoading(false);
      } catch(error) {
        //En caso de no poder conectarme al localStorage genero un error
        setError(true);
      }

    }, 1000);

  },[]);


  //Este método lo usaremos para actualizar el local storage y el
  //item de la APP mediante la función saveItem que recibe datos
  //desde nuestra APP. En este caso llame la variable newItem
  const saveItem = (newItem) => {
    try{
      //El dato recibido lo convertimos a JSON
      const stringifiedItem = JSON.stringify(newItem);
      //Y con el actualizo el local Storage
      localStorage.setItem(itemName, stringifiedItem);
      //Con el dato recibido actualizo el estado de la variable en la APP
      setItem(newItem);
    }catch(error){
      setError(error);
    }

  };

  //El hoock debe retornar la función de cambio de valor
  //y el nuevo valor que vamos a usar dentro de un array.
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

  
  console.log(`Mi lista ${listaTareas}`)
  // const [listaTareas, setListaTareas] = useState(listaStorage);
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
