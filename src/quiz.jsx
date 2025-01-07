import React, {useState} from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import kanjiList from './kanjiList';
import './quiz.css'

const quiz = () => {
  const [currentIndex, setCurrentIndex] =useState(Math.floor(Math.random() * kanjiList.length));
  const [options, setOptions] = useState(generateOptions(currentIndex));
  const [message, setMessage] = useState("");

  function generateOptions(correctIndex) {
    const optionsSet = new Set();
    optionsSet.add(correctIndex); // Ensure the correct answer is included
  
    while (optionsSet.size < 4) {
      const randomIndex = Math.floor(Math.random() * kanjiList.length);
      optionsSet.add(randomIndex);
    }
    return Array.from(optionsSet).sort(() => Math.random() - 0.5);
  
  }

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * kanjiList.length); // Get a random index
    setCurrentIndex(randomIndex);
    setOptions(generateOptions(randomIndex));
    setMessage("");
  };

  const handleOptionClick = (selectedIndex) => {
    if (selectedIndex === currentIndex) {
      setMessage("Correct! 🎉");
    } else {
      setMessage(`Incorrect! The correct answer is "${kanjiList[currentIndex].meaning}".`);
    }
  };

  const currentKanji = kanjiList[currentIndex];

  return (
    <div className='Home'>
    <Header/>
    <Navbar/>
   <h1 className='Heading'>Quiz</h1>
   <div className='quiz-box'>
      
        <h2 className='kanji'>{currentKanji.kanji}</h2>
        <div className='options-container'>
          {options.map((optionIndex) => (
            <button 
            key={optionIndex}
            onClick ={() => handleOptionClick(optionIndex)}
            className='quiz-option'
            >
          {kanjiList[optionIndex].meaning}
            </button>
          ))}
        </div>
        {message && <div className="quiz-message">{message}</div>}
      
   </div>
   <button onClick={handleNext} className="nextQuiz-button">Next</button>
    </div>
  )
}

export default quiz