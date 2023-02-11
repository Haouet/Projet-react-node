import React from 'react'

export default function SelectFormCategory({_id, name}) {
  return (
    <select class="form-select" aria-label="Default select example">     
    <option value={name} key={_id} > {name} </option>
    </select>
   
  )
}
