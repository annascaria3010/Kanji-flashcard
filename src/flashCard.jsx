import React, { useState } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import './flashCard.css'


const FlashCard = () => {

  

  const [currentKanji, setCurrentKanji] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);

  // Function to get random Kanji characters
  const getRandomKanji = () => {
    const randomIndex = Math.floor(Math.random() * kanjiLis.length);
    return kanjiList[randomIndex];
  };

  // Set random Kanji on component mount
  React.useEffect(() => {
    setCurrentKanji(getRandomKanji());
  }, []);

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev); // Toggle the flip state
  };

  const handleNextClick = () => {
    setCurrentKanji(getRandomKanji());
    setIsFlipped(false);
  };

   return (
    <div className="Home">
      <Header />
      <Navbar />
      <h1 className='flashCard-Heading'>Flash Card</h1>
      <div className="flashcard-container">
      <div
          className={`flashcard ${isFlipped ? "flipped" : ""}`}
          onClick={handleCardClick}
        >
          <div className="flashcard-front">{currentKanji}</div>
          <div className="flashcard-back">
            <span className='flashcard-backlist'>Meaning:</span>
            <span className='flashcard-backlist'>On Reading:</span>
            <span className='flashcard-backlist'>Kun Reading:</span>
          </div>
        </div>
      </div>
      <button className="next-button" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default FlashCard;
