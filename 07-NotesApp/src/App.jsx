import React, { useState } from 'react'
import { X } from 'lucide-react'


const App = () => {
 
const [notes, setNotes] = useState('')
const [details, setDetails] = useState('')

const [task, setTask] = useState([])

   const submithandler = (e) => {
    e.preventDefault();

    const copyTask = [...task]
    copyTask.push({notes, details})
    setTask(copyTask)  

    console.log(task)                     
    
    setNotes('')
    setDetails('')
  }

  const deleteNotes = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask) 
  }


  return (
    <div className='bg-black lg:flex h-screen text-white'> 
        <form 
        className='flex items-start lg:w-1/2 flex-col gap-4 p-10' 
        onSubmit={submithandler}>
          <h1 className='text-3xl font-bold'>Add Notes</h1>
          <input 
          type="text" 
          placeholder='Enter Notes Heading' 
          className='px-5 py-2 w-full  border-2 rounded outline-none font-medium'
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          />

          <textarea
            placeholder='Enter Notes Details'
            className='px-5 py-2 w-full border-2  rounded h-32 outline-none font-medium'
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
          <button className='bg-white w-full cursor-pointer active:scale-95 text-black px-5 py-2 outline-none rounded'>Add Note</button>
        </form>
        <div className='p-10 lg:w-1/2 lg:border-l-2  '>
          <h1 className='text-3xl font-bold'>Recent Notes</h1>
          <div id='scroll' className='mt-5 mb-5 flex justify-start items-start flex-wrap gap-5 h-[90%] overflow-auto'>
           {task.map(function(elem,idx){

            return <div key={idx} className='h-52 relative w-43 px-5 py-6 rounded-2xl  bg-cover bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-WB-vRX2Z15DR03HWWZ0a9Da_Ta9n0cAfz8ZUF2KOlA&s=10")] text-black '>
              <button onClick={()=>deleteNotes(idx)}
               className='absolute cursor-pointer top-5 right-2 bg-yellow-800 text-white p-2 rounded-es-xl mt-2 '><X size={12}/></button>
              <h3 className=' leading-tight font-bold text-xl'>{elem.notes}</h3>
              <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.details}</p>
            </div>
           })}
          
          </div>
        </div>
    </div>
  )
}

export default App
