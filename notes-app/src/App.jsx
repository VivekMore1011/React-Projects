import React from 'react'
import { useState } from 'react';

const App = () => {

const [title, setTitle] = useState('')
const [details, setDetails] = useState('')
const [task, setTask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];
    
 copyTask.push({title,details})

 setTask(copyTask)

 

    setTitle('')
    setDetails('')
  }


  return (
    <div className='h-screen lg:flex bg-black text-white p-10'>
              <h1 className='text-3xl font-bold'>Add Notes</h1>

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex  flex-col items-start  gap-4 lg:w-1/2 p-10'>

{/* Pehala Input for heading */}
        <input type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full py-2 border-2 font-medium outline-none rounded'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />

        {/* Detailed wala Input */}
        <textarea type="text"
          className='px-5 w-full h-32 py-2 font-medium flex items-start flex-row border-2 outline-none rounded'
          placeholder='Write Details'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />
        <button 
        className= 'bg-white  active:bg-gray-300 w-full text-black px-5 py-2 font-medium rounded scale-95'
        >
          Add Notes
        </button>

      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
         {task.map(function(elem,idx){
          return <div key={idx} className='h-52 w-40 rounded-xl p-4 text-black bg-cover  bg-[url(https://cdn.vectorstock.com/i/1000v/09/39/colorful-sticky-notes-vector-3670939.jpg)]'>
            <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
            <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.details}</p>
          </div>
          

         })}

        </div>
      </div>
    </div>
  )
}

export default App