import React, { useState } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import './settings.css';

const Settings = () => {
  const [showModal, setShowModal] = useState(false);
  const [newKanji, setNewKanji] = useState({
    kanji: '',
    meaning: '',
    onyomi: '',
    kunyomi: '',
  });
  const [kanjiList, setKanjiList] = useState(() => {
    const storedKanji = localStorage.getItem('kanjiList');
    return storedKanji ? JSON.parse(storedKanji) : [];
  });

  const handleAdd = () => {
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewKanji((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const updatedKanjiList = [...kanjiList, newKanji];
    setKanjiList(updatedKanjiList);
    localStorage.setItem('kanjiList', JSON.stringify(updatedKanjiList));
    setShowModal(false);
    setNewKanji({ kanji: '', meaning: '', onyomi: '', kunyomi: '' });
  };

  return (
    <div className="Home">
      <Header />
      <Navbar />
      <div className="settings-headings">
        <h2 className="headings" onClick={handleAdd}>
          Add
        </h2>
        <h2 className="headings">Edit</h2>
        <h2 className="headings">Delete</h2>
      </div>

      {/* Modal for Adding Kanji */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add New Kanji</h3>
            <input
              type="text"
              name="kanji"
              placeholder="Kanji"
              value={newKanji.kanji}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="meaning"
              placeholder="Meaning"
              value={newKanji.meaning}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="onyomi"
              placeholder="On'yomi"
              value={newKanji.onyomi}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="kunyomi"
              placeholder="Kun'yomi"
              value={newKanji.kunyomi}
              onChange={handleInputChange}
            />
            <div className="modal-actions">
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <div className="kanji-list">
        <h3>Kanji List</h3>
        <ul>
          {kanjiList.map((item, index) => (
            <li key={index}>
              <strong>{item.kanji}</strong> - {item.meaning} (on-reading: {item.onyomi}, kun-reading: {item.kunyomi})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Settings;
