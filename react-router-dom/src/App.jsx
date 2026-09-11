
//AXIOS in REACT

/*
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

*/

//Routing in the react 

import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Product from './pages/Product'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
      </Routes>

    </div>
  )
}

export default App