import { useState, useEffect, useRef } from 'react';
import Home from './pages/Home';
import PlaisioCaseStudy from './pages/PlaisioCaseStudy';
import BetEaseCaseStudy from './pages/BetEaseCaseStudy';
import MambaCaseStudy from './pages/MambaCaseStudy';
import About from './pages/About';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [previousPage, setPreviousPage] = useState<string | null>(null);
  const currentPageRef = useRef(currentPage);

  useEffect(() => {
    currentPageRef.current = currentPage;
  }, [currentPage]);

  useEffect(() => {
    // Initialize state from URL on first load
    const urlParams = new URLSearchParams(window.location.search);
    const initialPage = urlParams.get('page') || 'home';
    
    // Always replace state on initial load to avoid null state in history
    window.history.replaceState({ page: initialPage }, '', `?page=${initialPage}`);
    setCurrentPage(initialPage);

    const handlePopState = (event: PopStateEvent) => {
      const newPage = event.state?.page || 'home';
      setPreviousPage(currentPageRef.current);
      setCurrentPage(newPage);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: string) => {
    if (page === currentPageRef.current) return;
    setPreviousPage(currentPageRef.current);
    window.history.pushState({ page }, '', `?page=${page}`);
    setCurrentPage(page);
    // When navigating to a new page, typically want to start at top. 
    // Home handles its own restoration.
    if (page !== 'home') {
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {currentPage === 'home' && <Home navigateTo={navigateTo} returnFrom={previousPage} />}
      {currentPage === 'about' && <About navigateTo={navigateTo} />}
      {currentPage === 'plaisio' && <PlaisioCaseStudy navigateTo={navigateTo} />}
      {currentPage === 'betease' && <BetEaseCaseStudy navigateTo={navigateTo} />}
      {currentPage === 'mamba' && <MambaCaseStudy navigateTo={navigateTo} />}
    </>
  );
}
