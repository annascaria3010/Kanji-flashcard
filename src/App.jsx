import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import { useTranslation } from 'react-i18next'
import kanjiList from './kanjiList'

const App = () => {
  const { t } = useTranslation();

 

  return (
    <div className='Home'>
      <Header/>
      <Navbar/>
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
                      <a id={k.id}>{k.kanji}</a>
                    </td>
                  ))}
                </tr>
              );
            }
            return null; // Return null if not creating a new row
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App