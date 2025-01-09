import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import './settings.css'
import { useTranslation } from 'react-i18next'

const settings = () => {
 const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    
  };


  return (
    <div className='Home'>
    <Header/>
    <Navbar/>
    <div className="language-switcher">
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('ja')}>日本語</button>
      </div>
    <div className='settings-headings'>
    <h2 className='headings'>Add</h2>
    <h2 className='headings'>Edit</h2>
    <h2 className='headings'>Delete</h2>
    </div>
    </div>
  )
}

export default settings