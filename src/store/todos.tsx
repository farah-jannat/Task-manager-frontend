import { createContext, ReactNode,useState } from "react";


export type Todo{
    id:string;
    task:string;
    completed:boolean;
    createdAt:Data
}
export const todosContext = createContext(null)
export const todosProvider = (children: {children:ReactNode}) =>{
    const handleAddTodo = (task:string)=>{
        setTodos((prev)=>{
            const newTodos ={
                id: Math.random().toString(),
                task,
                complete:false,
                createdAt:new Date()
            }
        })
    }
}