import React from 'react'
import Dashboard from './DashBoard/Dashboard.jsx'
import Login from './Auth/Login.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Results from './results/Results.jsx'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Dashboard />}/>
      <Route exact path='/login' element={<Login />}/>
      <Route exact path='/results' element={<Results />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}


export default App