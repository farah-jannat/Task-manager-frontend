"use client";

import { useTodos } from "@/store/todos";
import React, { FormEvent, useEffect, useState } from "react";
import { CreateTask, GetAllTasks } from "@/api";
const AddTodo = () => {
  const { handleTodos } = useTodos();

  const [todo, setTodo] = useState("");

  const fetchTodos = async () => {
    try {
      const { data } = await GetAllTasks();
      console.log("all taks ", data);
      return data
    } catch (err) {
      console.log(err);
    };
  };
  // useEffect(()=>{
  //   fetchTodos()
  // },[])

  const handleAddTask = async () => {
    const obj = {
      taskName: todo,
      isDone: false,
    };
    try {
      const { success, message } = await CreateTask(obj);
      if (success) {
        // show scucess
      } else {
        // show err
      }
      setTodo("");
      const allTodos = await fetchTodos();
      handleTodos(allTodos)
      console.log("all todos ", allTodos);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handleAddTodo(todo);
    handleAddTask();
    setTodo("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="white your todo"
        name=""
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
