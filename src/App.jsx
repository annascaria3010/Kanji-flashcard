import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { useTranslation } from 'react-i18next';
import kanjiList from './kanjiList';

const App = () => {
  const { t } = useTranslation();

  // State to manage the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedKanji, setSelectedKanji] = useState(null);

  // Function to open the modal with the selected kanji
  const openModal = (kanji) => {
    setSelectedKanji(kanji);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedKanji(null);
  };

  return (
    <div className='Home'>
      <Header />
      <Navbar />
      <h1 className='headings'>{t('app.heading')}</h1>
      <table className="kanji-table">
        <tbody>
          {kanjiList.map((kanji, index) => {
            // Create a new row every 13 kanji
            if (index % 13 === 0) {
              return (
                <tr key={index}>
                  {kanjiList.slice(index, index + 13).map((k) => (
                    <td key={k.id} className="kanji-details">
                      <a id={k.id} onClick={() => openModal(k)}>
                        {k.kanji}
                      </a>
                    </td>
                  ))}
                </tr>
              );
            }
            return null; // Return null if not creating a new row
          })}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}> 
            {selectedKanji && (
              <>
                <h2 className='selectedKanji'>{selectedKanji.kanji}</h2>
                <p className='details'><strong>Meaning :</strong> { selectedKanji.meaning}</p>
                <p className='details'><strong>On-reading :</strong> {selectedKanji.onyomi}</p>
                <p className='details'><strong>Kun-reading :</strong> {selectedKanji.kunyomi}</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
