"use client"

import {createContext, ReactNode,useContext,useState } from "react";


export type Todo = {
    id:string;
    task:string;
    completed:boolean;
    createdAt:Date;
}

export type TodosContext ={
    todos: Todo[];
    handleAddTodo: (task:string) => void
}

export const todosContext = createContext<TodosContext | null>(null)

export const TodosProvider = ({children} : {children:ReactNode}) =>{
    const [todos, setTodos] = useState<Todo[]>([])

    const handleAddTodo = (task:string)=>{
        setTodos((prev)=>{
            const newTodos:Todo[]=[
                {
                id: Math.random().toString(),
                task,
                completed:false,
                createdAt:new Date()
            },
            ...prev 
        ]
        return newTodos;}
    )
   

    }

    return (
        <todosContext.Provider value={{todos, handleAddTodo}}>
            {children}
        </todosContext.Provider>
    )
}

export function useTodos(){
    const todosContextValue= useContext(todosContext)
    if(!todosContextValue){
        throw new Error('useTodos used outside of provider')
    }
    return todosContextValue
}