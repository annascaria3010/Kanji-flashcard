import React from 'react'
import './Header.css'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="header-container">
        <img src="kanji.svg" alt="Kanji" className="header-image"/>
        <div className="header-title">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Kavoon&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        </style>
            <div >{t('Lets Gooo')}</div>
            <div>{t('KANJI')}</div>
        </div>
    </div>
  )
}

export default Header