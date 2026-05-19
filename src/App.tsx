import { useState } from 'react';
import Home from './pages/Home';
import PlaisioCaseStudy from './pages/PlaisioCaseStudy';
import BetEaseCaseStudy from './pages/BetEaseCaseStudy';
import MambaCaseStudy from './pages/MambaCaseStudy';
import About from './pages/About';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      {currentPage === 'home' && <Home navigateTo={setCurrentPage} />}
      {currentPage === 'about' && <About navigateTo={setCurrentPage} />}
      {currentPage === 'plaisio' && <PlaisioCaseStudy navigateTo={setCurrentPage} />}
      {currentPage === 'betease' && <BetEaseCaseStudy navigateTo={setCurrentPage} />}
      {currentPage === 'mamba' && <MambaCaseStudy navigateTo={setCurrentPage} />}
    </>
  );
}
