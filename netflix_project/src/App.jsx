import React from 'react'
import Home from './pages/Home/Home'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/login' element={<Login></Login>}/>
      <Route path='/player/:id' element={<Player></Player>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
