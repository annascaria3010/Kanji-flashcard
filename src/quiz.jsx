import React, {useState} from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import kanjiList from './kanjiList';

const quiz = () => {
  const [currentIndex, setCurrentIndex] =useState(Math.floor(Math.random() * kanjiList.length));
  

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * kanjiList.length); // Get a random index
    setCurrentIndex(randomIndex);
    
  };

  const currentKanji = kanjiList[currentIndex];

  return (
    <div className='Home'>
    <Header/>
    <Navbar/>
   <h1 className='Heading'>Quiz</h1>
   <div className='quiz-box'>
      <div>
        <h2>{currentKanji.kanji}</h2>
        <div>
          {options.map((optionIndex) => (
            
          ))}
        </div>
      </div>
      <button onClick={handleNext} className="nextQuiz-button">Next</button>
   </div>
    </div>
  )
}

export default quiz