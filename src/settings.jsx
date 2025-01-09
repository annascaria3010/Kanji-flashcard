import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import './settings.css'


const settings = () => {
  return (
    <div className='Home'>
    <Header/>
    <Navbar/>
    <div className='settings-headings'>
    <h2 className='headings'>Add</h2>
    <h2 className='headings'>Edit</h2>
    <h2 className='headings'>Delete</h2>
    </div>
    </div>
  )
}

export default settings