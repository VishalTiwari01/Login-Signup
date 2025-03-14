import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './components/Login'
import SignupPage from './components/Register'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App