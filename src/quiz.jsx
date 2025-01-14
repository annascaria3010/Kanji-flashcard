import React, {useState} from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import kanjiList from './kanjiList';
import './quiz.css'
import { useTranslation } from 'react-i18next';

const quiz = () => {
   const { t } = useTranslation();
  
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
    };

  const [currentIndex, setCurrentIndex] =useState(Math.floor(Math.random() * kanjiList.length));
  const [options, setOptions] = useState(generateOptions(currentIndex));
  const [message, setMessage] = useState("");
  const [score,setScore] = useState(0)
  const [isAnswered, setIsAnswered] = useState(false);

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
    setIsAnswered(false);
  };

  const handleOptionClick = (selectedIndex) => {
    if (isAnswered) return;

    setIsAnswered(true);
    if (selectedIndex === currentIndex) {
      setMessage("Correct! 🎉");
      setScore((prevScore) => prevScore + 1);
    } else {
      setMessage(
        <>
          Incorrect! The correct answer is{" "}
          <span style={{ color: "red" }}>"{kanjiList[currentIndex].kunyomi}"</span>.
        </>
      );
    }
  };

  const handleReset =()=> {
    setScore (0);
    const randomIndex = Math.floor(Math.random() * kanjiList.length); // Get a random index
    setCurrentIndex(randomIndex);
    setOptions(generateOptions(randomIndex));
    setMessage("");
    setIsAnswered(false);
  }

  const currentKanji = kanjiList[currentIndex];

  return (
    <div className='Home'>
    <Header/>
    <Navbar/>
    <button onClick={handleReset} className="reset-button">{t('flashCards.reset')}</button>
   <h1 className='Heading'>{t('quiz.heading')}</h1>

   <div className='scoreBoard'> Score : {score}</div>
    
   <div className='quiz-box'>
      
        <h2 className='kanji'>{currentKanji.kanji}</h2>
        <div className='options-container'>
          {options.map((optionIndex) => (
            <button 
            key={optionIndex}
            onClick ={() => handleOptionClick(optionIndex)}
            className='quiz-option'
            >
          {kanjiList[optionIndex].kunyomi}
            </button>
            
          ))}
        </div>
        {message && <div className="quiz-message">{message}</div>}
          
   </div>
   <button onClick={handleNext} className="nextQuiz-button">{t('flashCards.button')}</button>
    
    </div>
  )
}

export default quiz