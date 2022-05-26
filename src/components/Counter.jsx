import React from 'react'

export const Counter = ({totalComplete, totalTareas}) => {
  return (
    <div>
        {
        totalTareas<=0?(
            <h2>No tienes ToDos agrega uno nuevo</h2>
        ):
        (
        <h2>Has completado {totalComplete} de {totalTareas} ToDos</h2>
        )
        }
    </div>
  )
}
