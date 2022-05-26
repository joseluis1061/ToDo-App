import React from 'react'

export const Todo = ({text, id, complete, onRemove, onComplete}) => {

  return (
    <div>
        <p>
        <span
            onClick={()=>onComplete(id)}
        >OK</span> 
        <span 
        className={complete? 'completed':'no_completed'}
        >
          {text} 
        </span>        
        <span
            onClick={()=>onRemove(id)}
        >X</span>
        </p>
    </div>
  )
}
