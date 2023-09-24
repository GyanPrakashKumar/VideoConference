import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Room from './pages/room'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomCode" element={<Room />} />
      </Routes>
    </>
  )
}

export default App
