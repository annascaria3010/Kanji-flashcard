import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className="Nav-bar">
    <Link to="/" className="titles">{t('Home')}</Link>
    <Link to="/flash-cards" className="titles">{t('FlashCards')}</Link>
    <Link to="/quiz" className="titles">{t('Quiz')}</Link>
    <Link to="/settings" className="titles">{t('Settings')}</Link>
  </div>
);
};

export default Navbar;
