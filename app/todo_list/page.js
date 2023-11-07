"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import React, { useEffect, useState } from "react"
import { AiFillDelete, AiFillEdit } from "react-icons/ai"

const page = () => {
  const [todos, setTodos] = useState([])
  const [tasks, setTasks] = useState([])
  const searchParams = useSearchParams()

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || '[]');
  
    const newTask = {
      id: Date.now(),
      completed: false,
      task: searchParams.get("task"),
    };
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    setTodos(tasks)
    
  }, []);

  
  return (
    <>
      <Link href="/">Add One more</Link>
      <ul>
        {todos.map((todo) => (
          <div
            className="flex flex-col border border-grey-500 w-5/6 mx-auto my-2 py-3 px-2 justify-between"
            key={todo.id}
          >
            <div className="flex items-center flex-row ">
              <p
              // className= {`flex-1 text-center ${todo.completed ? 'text-red-500 line-through' : null}`}
              >
                {todo.task}
              </p>
              <div className="flex flex-1 ">
                <input type='checkbox' 
                // onClick={() => handleCheckBox(todo.id)} 
                className='border border-black-500' 
                // checked={todo.completed} 
                />
                <AiFillDelete
                // onClick={() => handleDelete(todo.id)}
                />
                <AiFillEdit
                // onClick={() => handleUpdate(todo.todo)}
                />
              </div>
            </div>
          </div>
        ))}
      </ul>
    </>
  )
}

export default page
