import React from 'react'
import {Link} from "react-router-dom";
export default function ListCat({_id, name}) {
  return (
  
          <ul >
              <li key={_id} ><Link to={`/category/${name}`}> {name} </Link> </li>

          </ul>
   
  )
}
