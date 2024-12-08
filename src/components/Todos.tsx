"use client";
import React from "react";
import { useTodos } from "@/store/todos";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleTodoDelete } = useTodos();
  console.log("this are todos ", todos);

  let filterTodos = todos;

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <ul>
            <li key={todo.id}>
              <input
                type="checkbox"
                name=""
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={() => toggleTodoAsCompleted(todo.id)}
              />

              <label htmlFor={`todo-${todo.id}`}> {todo.task}</label>

              {todo.completed && (
                <button
                  type="button"
                  onClick={() => handleTodoDelete(todo.id)}
                />
              )}
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
