import React, { useState } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import './flashCard.css';
import kanjiList from './kanjiList';
import { useTranslation } from 'react-i18next';


const FlashCard = () => {

   const { i18n,t } = useTranslation();
  
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
    };
  if (!kanjiList.length) {
    return <div>No Kanji data available.</div>; // Fallback for empty or undefined kanjiList
  }
  
  const [currentIndex, setCurrentIndex] = useState(Math.floor(Math.random() * kanjiList.length));
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped); // Toggle the flip state
  };

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * kanjiList.length); // Get a random index
    setCurrentIndex(randomIndex);
    setIsFlipped(false);
  };

  const currentKanji = kanjiList[currentIndex];

   return (
    <div className="Home">
      <Header />
      <Navbar />
      <div className="language-switcher">
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('ja')}>日本語</button>
      </div>
      <h1 className='flashCard-Heading'>{t('flashCards.heading')}</h1>
      <div className="flashcard-container">
      <div
          className={`flashcard ${isFlipped ? "flipped" : ""}`}
          onClick={handleFlip}
        >
          {!isFlipped ? (
          
          <div className="flashcard-front">
            <h1>{currentKanji.kanji}</h1>
          </div>
        ) : (
          
          <div className="flashcard-back">
            <p className='flashcard-backlist'><strong>Meaning:</strong> {currentKanji.meaning}</p>
            <p className='flashcard-backlist'><strong>On'yomi:</strong> {currentKanji.onyomi}</p>
            <p className='flashcard-backlist'><strong>Kun'yomi:</strong> {currentKanji.kunyomi}</p>
          </div>
        )}
      </div>
      <button onClick={handleNext} className="next-button">{t('flashCards.button')}</button>
    </div>
    </div>
  );
};

export default FlashCard;
