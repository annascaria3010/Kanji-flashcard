import React, { useState } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import './flashCard.css';


const FlashCard = ({ kanjiList }) => {
  const [currentIndex, setCurrentIndex] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);

  // Function to get random Kanji characters
  // const getRandomKanji = () => {
  //   const randomIndex = Math.floor(Math.random() * kanjiList.length);
  //   return kanjiList[randomIndex];
  // };

  // Set random Kanji on component mount

  const currentKanji = kanjiList[currentIndex];
 

  const handleFlip = () => {
    setIsFlipped(!isFlipped); // Toggle the flip state
  };

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * kanjiList.length); // Get a random index
    setCurrentIndex(randomIndex);
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
          onClick={handleFlip}
        >
          {!isFlipped ? (
          // Front of the card: Display the Kanji
          <div className="front">
            <h1>{currentKanji.kanji}</h1>
          </div>
        ) : (
          // Back of the card: Display details
          <div className="back">
            <p><strong>Meaning:</strong> {currentKanji.meaning}</p>
            <p><strong>On'yomi:</strong> {currentKanji.onyomi}</p>
            <p><strong>Kun'yomi:</strong> {currentKanji.kunyomi}</p>
          </div>
        )}
      </div>
      <button onClick={handleNext} className="next-button">Next</button>
    </div>
    </div>
  );
};

export default FlashCard;
