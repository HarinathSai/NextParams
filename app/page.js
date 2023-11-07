"use client"
import Link from 'next/link'
import React, { useState } from 'react'


const page = () => {
  const [todo,setTodo]=useState("")

  return (
   <>
    <form  
    // onSubmit={(e) => { handleAdd(e)}}
    className='flex flex-col bg-sky-500/75 mx-auto text-white w-5/6 my-4 '>
      <input
      className='border boder-grey-500 text-black py-2 px-2'
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}

      />
       <Link 
       href={{
        pathname:'/todo_list',
        query:{
          task:todo,
          }
       }}
       className='py-2 px-2' type='submit'>Add
       </Link>
 </form>
   </>
  )
}

export default page