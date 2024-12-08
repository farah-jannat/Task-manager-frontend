"use client";
import React, { useState } from "react";
import { DeleteTaskById, GetAllTasks } from "@/api";
import { useTodos } from "@/store/todos";



const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleTodoDelete } = useTodos();
  const [updateTask, setUpdateTask] = useState(null)
  console.log("this are todos ", todos);
  const { handleTodos } = useTodos();

  const fetchTodos = async () => {
    try {
      const { data } = await GetAllTasks();
      console.log("all taks ", data);
      return data
    } catch (err) {
      console.log(err);
    };
  };

  const handleDeleteTask = async(_id)=>{
    try {
      const { success, message } = await DeleteTaskById(_id);
      console.log('id of task ', _id)
      if (success) {
        // show scucess
      } else {
        // show err
      }
      const allTodos = await fetchTodos();
      handleTodos(allTodos)
      console.log("all todos ", allTodos);
      
    } catch (err) {
      console.log(err);
    };
  };

 
  

  let filterTodos = todos;

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          
          <ul>
            <li key={todo._id}>
              <input
                type="checkbox"
                name=""
                id={`todo-${todo._id}`}
                checked={todo.completed}
                onChange={() => toggleTodoAsCompleted(todo._id)}
              />

              <label htmlFor={`todo-${todo._id}`}> {todo.taskName}</label>

              {/* {todo.completed && ( */}
                <button type="button" onClick={() => handleDeleteTask(todo._id)}>
                  delete{" "}
                </button>
                {/* <button onClick={()=> setUpdateTask(todo)}>Edit</button> */}
                
              {/* )} */}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
  return <div>hallo</div>;
  return (
    <ul>
      {filterTodos.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              name=""
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={toggleTodoAsCompleted(todo.id)}
            />

            <label htmlFor={`todo-${todo.id}`}> {todo.task}</label>

            {todo.completed && (
              <button type="button" onClick={() => handleTodoDelete(todo.id)} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
