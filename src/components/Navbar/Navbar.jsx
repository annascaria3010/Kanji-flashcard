import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className="Nav-bar">
    <Link to="/" className="titles">{t('navbar.home')}</Link>
    <Link to="/flash-cards" className="titles">{t('navbar.flashCards')}</Link>
    <Link to="/quiz" className="titles">{t('navbar.quiz')}</Link>
    <Link to="/settings" className="titles">{t('navbar.settings')}</Link>
  </div>
);
};

export default Navbar;
