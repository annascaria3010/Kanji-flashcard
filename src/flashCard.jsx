import React, { useState } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import './flashCard.css'

const FlashCard = () => {

  const kanjiList = [
    "一", "二", "三", "四", "五", "六", "七", "八", "九", "十",
    "人", "今", "日", "週", "月", "年", "中", "山", "川", "左",
    "右", "大", "木", "本", "水", "火", "父", "母", "耳", "口",
    "休", "何", "入", "上", "前", "下", "千", "午", "友", "古",
    "名", "国", "外", "女", "男", "子", "学", "生", "小", "書",
    "毎", "先", "会", "万", "円", "出", "分", "北", "半", "南",
    "土", "多", "天", "安", "少", "店", "後", "手", "新", "時",
    "来", "東", "校", "気", "白", "百", "目", "社", "空", "立",
    "聞", "花", "行", "西", "見", "言", "話", "語", "読", "買",
    "足", "車", "道", "金", "長", "間", "雨", "電", "食", "飲",
    "駅", "高", "魚"
  ];

  const [currentKanji, setCurrentKanji] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);

  // Function to get random Kanji characters
  const getRandomKanji = () => {
    const randomIndex = Math.floor(Math.random() * kanjiList.length);
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
          <div className="flashcard-back">Meaning/Info</div>
        </div>
      </div>
      <button className="next-button" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default FlashCard;
