"use server";


import { revalidatePath } from "next/cache";



export async function addTodo(obj){
    try {
        await fetch("http://localhost:3000/api/todos",{
            method: "POST",
            body: JSON.stringify(obj),
        });
        revalidatePath("/")
    } catch (error) {
        console.log(error);
        
    }
}

export async function updateTodo(id){
    try {
        await fetch("http://localhost:3000/api/todos",{
            method: "PUT",
            body: JSON.stringify({id}),
        });
        revalidatePath("/")
    } catch (error) {
        console.log(error);
        
    }
}

export async function deleteTodo(id){
    try {
        await fetch("http://localhost:3000/api/todos",{
            method: "DELETE",
            body: JSON.stringify({id}),
        });
        revalidatePath("/")
    } catch (error) {
        console.log(error);
        
    }
}