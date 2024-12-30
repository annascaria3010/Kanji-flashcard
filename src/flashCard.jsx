import React, { useState } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import './flashCard.css';
import kanjiList from './kanjiList';


const FlashCard = () => {
  if (!kanjiList.length) {
    return <div>No Kanji data available.</div>; // Fallback for empty or undefined kanjiList
  }
  
  const [currentIndex, setCurrentIndex] = useState(Math.floor(Math.random() * kanjiList.length));
  const [isFlipped, setIsFlipped] = useState(false);

  // Function to get random Kanji characters
  // const getRandomKanji = () => {
  //   const randomIndex = Math.floor(Math.random() * kanjiList.length);
  //   return kanjiList[randomIndex];
  // };

  // Set random Kanji on component mount

  
 

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
      <h1 className='flashCard-Heading'>Flash Card</h1>
      <div className="flashcard-container">
      <div
          className={`flashcard ${isFlipped ? "flipped" : ""}`}
          onClick={handleFlip}
        >
          {!isFlipped ? (
          // Front of the card: Display the Kanji
          <div className="flashcard-front">
            <h1>{currentKanji.kanji}</h1>
          </div>
        ) : (
          // Back of the card: Display details
          <div className="flashcard-back">
            <p className='flashcard-backlist'><strong>Meaning:</strong> {currentKanji.meaning}</p>
            <p className='flashcard-backlist'><strong>On'yomi:</strong> {currentKanji.onyomi}</p>
            <p className='flashcard-backlist'><strong>Kun'yomi:</strong> {currentKanji.kunyomi}</p>
          </div>
        )}
      </div>
      <button onClick={handleNext} className="next-button">Next</button>
    </div>
    </div>
  );
};

export default FlashCard;
