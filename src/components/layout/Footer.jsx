import { NAV_LINKS, PROGRAMS } from '../../data/index.js';

export default function Footer({ setPage }) {
  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="bg-[#061F17] border-t border-[#F5EDD6]/6 pt-16 pb-8"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => navigate('Home')} className="flex items-center gap-3 mb-5 group">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-xl bg-[#D4A843] rotate-6 opacity-70 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-xl bg-[#061F17] border border-[#D4A843]/40 flex items-center justify-center">
                  <span className="font-display font-bold text-[#D4A843] text-xl">A</span>
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-[#F5EDD6] text-sm">AIMM Maktabi</div>
                <div className="font-body text-[#D4A843]/70 text-[9px] tracking-widest uppercase">Andijon · O'zbekiston</div>
              </div>
            </button>
            <p className="font-body text-[#F5EDD6]/40 text-xs leading-relaxed mb-5">
              Andijon viloyatidagi yagona Prezident texnika kolleji. Kelajak mutaxassislarini tayyorlaymiz.
            </p>
            {/* Social */}
            <div className="flex gap-2">
              {[
                { icon: '📘', label: 'Facebook' },
                { icon: '📷', label: 'Instagram' },
                { icon: '▶️', label: 'YouTube' },
                { icon: '💬', label: 'Telegram' },
              ].map(({ icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-[#F5EDD6]/5 hover:bg-[#D4A843]/15 border border-[#F5EDD6]/8 hover:border-[#D4A843]/30 flex items-center justify-center text-sm transition-all"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-bold text-[#F5EDD6] text-sm mb-5 tracking-wide">Navigatsiya</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => navigate(link)}
                    className="font-body text-[#F5EDD6]/50 hover:text-[#D4A843] text-sm transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display font-bold text-[#F5EDD6] text-sm mb-5 tracking-wide">Yo'nalishlar</h3>
            <ul className="space-y-2.5">
              {PROGRAMS.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => navigate('Programs')}
                    className="font-body text-[#F5EDD6]/50 hover:text-[#D4A843] text-sm transition-colors flex items-center gap-2"
                  >
                    {p.emoji} {p.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-[#F5EDD6] text-sm mb-5 tracking-wide">Aloqa</h3>
            <div className="space-y-3 font-body text-[#F5EDD6]/50 text-sm">
              <p>📍 Andijon shahri, O'zbekiston</p>
              <p>📞 +998 (74) 123-45-67</p>
              <p>✉️ info@aimm.edu.uz</p>
              <p className="text-xs text-[#F5EDD6]/30 mt-4">Dush–Shan: 08:00–18:00</p>
            </div>
            <button
              onClick={() => navigate('Contact')}
              className="mt-5 w-full py-3 rounded-xl font-body font-bold text-sm bg-gradient-to-r from-[#D4A843] to-[#B8902E] text-[#0B3D2E] hover:shadow-lg hover:shadow-[#D4A843]/30 transition-all"
            >
              Ariza Topshirish →
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#F5EDD6]/5 pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-[#F5EDD6]/25 text-xs">
            © 2025 Andijon Ilg'or Mahorat Maktabi. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex items-center gap-2 font-body text-[#F5EDD6]/25 text-xs">
            <span className="w-2 h-2 rounded-full bg-[#4ECDC4] animate-pulse" />
            Andijon ilg'or kasbiy mahorat texnikumi  · Andijon viloyati · 🇺🇿
          </div>
        </div>
      </div>
    </footer>
  );
}
