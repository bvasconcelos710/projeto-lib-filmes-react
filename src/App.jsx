import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

import Navbar from './components/Navbar'
function App() {

  return (
    <div className="app-container">
      <Navbar />
      <Outlet />
    </div>

  )
}

export default App
