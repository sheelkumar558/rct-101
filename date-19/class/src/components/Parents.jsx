import React, { useState } from 'react'
import Chil2 from './Chil2'
import Child1 from './Child1'

const Parents = () => {
    const [value,setValue] = useState("");

    const addTodo=()=>{
        
    }
  return (
    <div>
      Parents
      <Child1/>
      <Chil2/>
    </div>
  )
}

export default Parents
