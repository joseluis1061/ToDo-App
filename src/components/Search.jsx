import React from 'react'
import { useState } from 'react'

export const Search = ({serchText,setSerchText}) => {
  return (
    <input type="text" id='search'
          value = {serchText}
          onChange={(e)=>{setSerchText(e.target.value)}}
        />    
  )
}
