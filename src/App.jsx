import { useState, useCallback } from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProgramsPage from './pages/ProgramsPage.jsx';
import TeachersPage from './pages/TeachersPage.jsx';
import NewsPage from './pages/NewsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

const PAGE_MAP = {
  Home:     HomePage,
  About:    AboutPage,
  Programs: ProgramsPage,
  Teachers: TeachersPage,
  News:     NewsPage,
  Contact:  ContactPage,
};

export default function App() {
  const [page, setPage] = useState('Home');

  const navigate = useCallback((p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const PageComponent = PAGE_MAP[page] || HomePage;

  return (
    <div className="min-h-screen bg-[#0B3D2E] text-[#F5EDD6]">
      <Navbar page={page} setPage={navigate} />

      {/* Page transition wrapper */}
      <div
        key={page}
        style={{ animation: 'fadeUp 0.45s cubic-bezier(0.22,1,0.36,1) both' }}
      >
        <PageComponent setPage={navigate} />
      </div>

      <Footer setPage={navigate} />
    </div>
  );
}
