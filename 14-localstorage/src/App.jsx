import React from 'react'
import axios from'axios'

const App = () => {

  const getData= async()=>{
    const response=await axios.get("https://jsonplaceholder.typicode.com/albums");
    console.log(response.data);
  }


  return (
    <div>
      <button onClick={getData}>Data</button>
    </div>
  )
}

export default App