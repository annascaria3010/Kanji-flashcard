import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div className='Home'>
      <Header/>
      <Navbar/>
      <h1>Home page</h1>
    </div>
  )
}

export default App