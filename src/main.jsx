import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import FlashCard from './flashCard.jsx';
import Quiz from './quiz.jsx';
import Settings from './settings.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/flash-cards" element={<FlashCard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  </StrictMode>,
)
