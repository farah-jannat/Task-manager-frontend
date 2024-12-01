'use client'

import React, { ChangeEvent, useState } from 'react'

const AddTodo = () => {

    const [todo, setTodo] = useState("")

  return (
    <form >
        <input type='text' placeholder='white your todo' name='' value={todo} onChange={(event: ChangeEvent<HTMLInputElement>) => setTodo(event.target.value)}/>
        <button type='submit'>Add</button>    
    </form>
  )
}

export default AddTodo