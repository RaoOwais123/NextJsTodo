"use client"

import { deleteTodo, updateTodo } from "../action/todos"




export default function ListItem({todo}){
    const handleOnClickItem = async ()=>{
        await updateTodo(todo.id);
    };

    const handleOnDelItem = async ()=>{
        await deleteTodo(todo.id);
    };


    return(
        <div className="flex border p-2 my-1 w-2/3 mx-auto">

            <h1
             className={`cursor-pointer font-semibold w-full text-xl ${todo?.isCompleted && "line-through"}`}
             onClick={handleOnClickItem}
             >{todo.task}</h1>

            <button
            onClick={handleOnDelItem} 
            className="bg-red-400 rounded px-3 p-2 cursor-pointer">Delete</button>

        </div>

    )
}