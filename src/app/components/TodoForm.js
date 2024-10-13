"use client"
import { useRef } from "react"
import { addTodo } from "../action/todos";




export default function TodoForm(){
    const formRef = useRef(null);

    const handleAddTodo = async (formData)=>{

        const obj = {task: formData.get("task")};
        if (obj.task) {
            await addTodo(obj);
            formRef.current?.reset();
            
        }else{
            alert("Please Add Task")
        }

    };


    return(
        <form action={handleAddTodo} ref={formRef} className="flex w-2/3 mx-auto">
            <input
            placeholder="Enter Todo"
            name="task"
            className="border p-2 text-2xl flex flex-grow"
            />

            <input
            type="submit"
            value={"Submit"}
            className="bg-teal-500 p-2 rounded cursor-pointer ml-2 px-3"
            />

        </form>
    )
}