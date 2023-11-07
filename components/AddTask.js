"use client"
import { useSearchParams } from 'next/navigation'


const AddTask = () => {
   const searchParams = useSearchParams()
   localStorage.setItem("task",searchParams.get("task"))
 
}

export default AddTask