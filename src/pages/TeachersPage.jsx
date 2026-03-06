import { useState } from 'react';
import { useInView } from '../hooks/useInView.js';
import { TEACHERS } from '../data/index.js';

export default function TeachersPage() {
  const [hovered, setHovered] = useState(null);
  const [ref, inView] = useInView(0.1);

  return (
    <main className="pt-[70px]">
      {/* Hero */}
      <section className="py-24 bg-[#0B3D2E] relative overflow-hidden" aria-labelledby="teach-h1">
        <div className="absolute inset-0 bg-gradient-to-b from-[#A29BFE]/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center animate-fade-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-body font-bold tracking-[0.2em] uppercase border text-[#A29BFE] border-[#A29BFE]/30 bg-[#A29BFE]/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A29BFE] animate-pulse" />
            O'qituvchilar jamoasi
          </span>
          <h1 id="teach-h1" className="font-display text-5xl sm:text-7xl font-bold text-[#F5EDD6] mt-3 mb-5">
            Jamoa bilan <span className="text-[#D4A843]">tanishing</span>
          </h1>
          <p className="font-body text-[#F5EDD6]/60 text-xl max-w-2xl mx-auto">
            Sanoat professionallaridan ta'lim olayotgan pedagoglар. Har bir o'qituvchi chuqur real-dunyo tajribasini har bir darsga olib kiradi.
          </p>
        </div>
      </section>

      {/* Teachers grid */}
      <section
        ref={ref}
        className="py-20 bg-[#061F17] border-t border-[#F5EDD6]/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TEACHERS.map((t, i) => (
            <article
              key={t.id}
              className={`group relative p-7 rounded-3xl bg-[#0B3D2E] border border-[#F5EDD6]/6 text-center cursor-default hover:-translate-y-2 overflow-hidden transition-all duration-400 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${i * 80}ms`,
                borderColor: hovered === i ? `${t.color}35` : undefined,
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${t.color}10, transparent 70%)` }}
              />

              {/* Avatar */}
              <div className="relative w-16 h-16 mx-auto mb-5">
                <div
                  className="absolute inset-0 rounded-2xl rotate-6 opacity-40 group-hover:rotate-12 transition-transform duration-400"
                  style={{ background: t.color }}
                />
                <div
                  className="absolute inset-0 rounded-2xl bg-[#061F17] border-2 flex items-center justify-center font-display font-bold text-lg"
                  style={{ borderColor: `${t.color}50`, color: t.color }}
                >
                  {t.initials}
                </div>
              </div>

              <h3 className="font-display font-bold text-base text-[#F5EDD6] mb-1 relative">{t.name}</h3>
              <p className="font-body text-sm font-semibold mb-3 relative" style={{ color: t.color }}>{t.role}</p>
              <p className="font-body text-[#F5EDD6]/40 text-xs mb-3 relative">{t.courses}</p>
              <div
                className="inline-flex items-center gap-1.5 font-body text-xs px-3 py-1.5 rounded-lg relative"
                style={{ background: `${t.color}12`, color: t.color }}
              >
                <span>⏳</span> {t.exp} tajriba
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-[#0B3D2E] border-t border-[#F5EDD6]/5">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-2xl text-[#F5EDD6] mb-3">
            O'qituvchilar jamoasiga qo'shiling
          </h2>
          <p className="font-body text-[#F5EDD6]/45 text-sm mb-6">
            Sanoat mutaxassisi sifatida o'z hunarini keyingi avlodga o'rgatmoqchimisiz? Biz sizni kutmoqdamiz.
          </p>
          <button className="px-7 py-3.5 rounded-xl font-body font-bold text-sm border-2 border-[#D4A843]/40 text-[#D4A843] hover:border-[#D4A843] hover:bg-[#D4A843]/10 transition-all duration-300">
            Murojaat Qilish →
          </button>
        </div>
      </section>
    </main>
  );
}
