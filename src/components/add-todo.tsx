'use client'

import { useTodos } from '@/store/todos';
import React, { FormEvent, useState } from 'react'

const AddTodo = () => {
    const {handleAddTodo} = useTodos()

    const [todo, setTodo] = useState("");


    const handleFormSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        handleAddTodo(todo)
        setTodo('')

    }

  return (
    <form onSubmit={handleFormSubmit}>
        <input type='text' placeholder='white your todo' name='' value={todo} onChange={(event) => setTodo(event.target.value)}/>
        <button type='submit'>Add</button>    
    </form>
  )
}

export default AddTodo