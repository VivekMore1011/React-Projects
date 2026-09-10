
//form handling and the two way binding 

import React, { useState } from 'react'

const App = () => {


  const [title, setTitle] = useState('')


  const submitHandler = (e) => {
    e.preventDefault()
    console.log('form Submitted ', title);

    setTitle('')
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter Your name' value={title} onChange={(e) => {
          setTitle(e.target.value);
        }} /><br /><br />
        <button>Submit </button>
      </form>

    </div>
  )
}

export default App