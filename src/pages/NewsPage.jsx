import { useState } from 'react';
import { useInView } from '../hooks/useInView.js';
import { NEWS } from '../data/index.js';

function NewsDetail({ item, onBack }) {
  return (
    <main className="pt-[70px] bg-[#0B3D2E] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <button
          onClick={onBack}
          className="flex items-center gap-2 font-body text-[#F5EDD6]/50 hover:text-[#D4A843] text-sm mb-10 transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Yangiliklarga qaytish
        </button>

        <div className="text-center mb-10 animate-fade-up">
          <span className="text-8xl block mb-6">{item.emoji}</span>
          <span className="font-body px-3 py-1 rounded-full text-xs font-bold bg-[#D4A843]/12 text-[#D4A843] border border-[#D4A843]/25">
            {item.tag}
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-[#F5EDD6] mt-5 mb-4 leading-tight">
            {item.title}
          </h1>
          <div className="font-body text-[#F5EDD6]/35 text-sm">{item.date} · AIKMT Tahririyati</div>
        </div>

        <div className="space-y-5 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          {item.body.split('\n\n').map((para, i) => (
            <p key={i} className="font-body text-[#F5EDD6]/65 leading-relaxed text-base">
              {para}
            </p>
          ))}
          <p className="font-body text-[#F5EDD6]/40 leading-relaxed text-sm">
            Kollejimiz haqida qo'shimcha ma'lumot yoki dasturlarimiz uchun Aloqa sahifamizga tashrif buyuring.
          </p>
        </div>
      </div>
    </main>
  );
}

export default function NewsPage() {
  const [selected, setSelected] = useState(null);
  const [ref, inView] = useInView(0.1);

  if (selected) return <NewsDetail item={selected} onBack={() => setSelected(null)} />;

  return (
    <main className="pt-[70px]">
      {/* Hero */}
      <section className="py-24 bg-[#0B3D2E] relative overflow-hidden" aria-labelledby="news-h1">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4ECDC4]/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center animate-fade-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-body font-bold tracking-[0.2em] uppercase border text-[#4ECDC4] border-[#4ECDC4]/30 bg-[#4ECDC4]/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ECDC4] animate-pulse" />
            So'nggi yangiliklar
          </span>
          <h1 id="news-h1" className="font-display text-5xl sm:text-7xl font-bold text-[#F5EDD6] mt-3 mb-5">
            Yangiliklar & <span className="text-[#D4A843]">Tadbirlar</span>
          </h1>
          <p className="font-body text-[#F5EDD6]/60 text-xl max-w-xl mx-auto">
            AIKMT'ning so'nggi yutuqlari, hamkorliklari va imkoniyatlari bilan xabardor bo'ling.
          </p>
        </div>
      </section>

      {/* News grid */}
      <section
        ref={ref}
        className="py-20 bg-[#061F17] border-t border-[#F5EDD6]/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS.map((n, i) => (
            <article
              key={n.id}
              onClick={() => setSelected(n)}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelected(n)}
              role="article"
              aria-label={`Yangilik: ${n.title}`}
              className={`group cursor-pointer h-full p-7 rounded-3xl bg-[#0B3D2E] border border-[#F5EDD6]/6 hover:border-[#D4A843]/20 hover:-translate-y-2 flex flex-col transition-all duration-400 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-6xl mb-5 text-center bg-[#F5EDD6]/3 rounded-2xl py-5">{n.emoji}</div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-body px-2.5 py-1 rounded-lg bg-[#D4A843]/10 text-[#D4A843] text-[10px] font-black border border-[#D4A843]/18">
                  {n.tag}
                </span>
                <span className="font-body text-[#F5EDD6]/30 text-xs">{n.date}</span>
              </div>
              <h3 className="font-display font-bold text-base text-[#F5EDD6] mb-3 group-hover:text-[#D4A843] transition-colors leading-snug flex-1">
                {n.title}
              </h3>
              <p className="font-body text-[#F5EDD6]/45 text-sm leading-relaxed mb-5 line-clamp-2">{n.short}</p>
              <div className="flex items-center gap-1.5 font-body text-[#D4A843] text-xs font-bold group-hover:gap-3 transition-all">
                To'liq o'qish <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
