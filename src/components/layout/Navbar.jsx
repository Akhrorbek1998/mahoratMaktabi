import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../data/index.js';

export default function Navbar({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (p) => {
    setPage(p);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B3D2E]/95 backdrop-blur-2xl shadow-xl shadow-black/30 border-b border-[#F5EDD6]/5'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[70px]"
        role="navigation"
        aria-label="Asosiy navigatsiya"
      >
        {/* Logo */}
        <button
          onClick={() => navigate('Home')}
          className="flex items-center gap-3 group"
          aria-label="AIMM — Bosh sahifaga o'tish"
        >
          <div className="relative w-10 h-10 flex-shrink-0">
            <div className="absolute inset-0 rounded-xl bg-[#D4A843] rotate-6 opacity-80 group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-xl bg-[#0B3D2E] border border-[#D4A843]/40 flex items-center justify-center">
              <span className="font-display font-bold text-[#D4A843] text-xl leading-none">A</span>
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-[#F5EDD6] text-base tracking-wide">AIMM</span>
            <span className="font-body text-[#D4A843] text-[9px] font-semibold tracking-[0.25em] uppercase">Maktabi</span>
          </div>
        </button>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                onClick={() => navigate(link)}
                aria-current={page === link ? 'page' : undefined}
                className={`relative px-4 py-2 rounded-lg font-body text-[13px] font-medium transition-all duration-200 ${
                  page === link
                    ? 'text-[#D4A843]'
                    : 'text-[#F5EDD6]/70 hover:text-[#F5EDD6]'
                }`}
              >
                {page === link && (
                  <span className="absolute inset-0 rounded-lg bg-[#D4A843]/10 border border-[#D4A843]/20" />
                )}
                <span className="relative">{link}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button
            onClick={() => navigate('Contact')}
            className="relative group overflow-hidden px-6 py-2.5 rounded-xl font-body font-bold text-sm bg-gradient-to-r from-[#D4A843] to-[#B8902E] text-[#0B3D2E] shadow-lg shadow-[#D4A843]/25 hover:shadow-[#D4A843]/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="absolute inset-0 bg-[#E8C46A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Ariza Topshirish →</span>
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
          aria-expanded={menuOpen}
          className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[#F5EDD6]/5 transition-colors"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-0.5 bg-[#F5EDD6] rounded-full transition-all duration-300 ${
                i === 0 ? (menuOpen ? 'w-5 rotate-45 translate-y-2' : 'w-5') :
                i === 1 ? (menuOpen ? 'opacity-0 w-0' : 'w-4') :
                           (menuOpen ? 'w-5 -rotate-45 -translate-y-2' : 'w-3')
              }`}
            />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0B3D2E]/98 backdrop-blur-2xl border-t border-[#F5EDD6]/5 px-4 py-5 space-y-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => navigate(link)}
              className={`w-full text-left px-4 py-3 rounded-xl font-body text-sm font-medium transition-all ${
                page === link
                  ? 'bg-[#D4A843]/15 text-[#D4A843] border border-[#D4A843]/20'
                  : 'text-[#F5EDD6]/70 hover:text-[#F5EDD6] hover:bg-[#F5EDD6]/5'
              }`}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => navigate('Contact')}
            className="w-full mt-3 py-3 rounded-xl font-body font-bold text-sm bg-gradient-to-r from-[#D4A843] to-[#B8902E] text-[#0B3D2E]"
          >
            Ariza Topshirish →
          </button>
        </div>
      </div>
    </header>
  );
}
