import { useState } from 'react';
import { useInView } from '../hooks/useInView.js';
import { PROGRAMS } from '../data/index.js';

export default function ProgramsPage() {
  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView(0.1);

  const filters = [
    { id: 'all', label: 'Barcha yo\'nalishlar' },
    { id: 'main', label: 'Asosiy IT' },
    { id: 'additional', label: 'Qo\'shimcha' },
  ];
  const shown = filter === 'all' ? PROGRAMS : PROGRAMS.filter((p) => p.category === filter);

  return (
    <main className="pt-[70px]">
      {/* Hero */}
      <section className="py-24 bg-[#0B3D2E] relative overflow-hidden" aria-labelledby="prog-h1">
        <div className="absolute inset-0 bg-gradient-to-b from-[#A29BFE]/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center animate-fade-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-body font-bold tracking-[0.2em] uppercase border text-[#A29BFE] border-[#A29BFE]/30 bg-[#A29BFE]/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A29BFE] animate-pulse" />
            Ta'lim katalogi
          </span>
          <h1 id="prog-h1" className="font-display text-5xl sm:text-7xl font-bold text-[#F5EDD6] mt-3 mb-5">
            Yo'nalishlarimiz
          </h1>
          <p className="font-body text-[#F5EDD6]/60 text-xl max-w-2xl mx-auto">
            Sanoat hamkorlari bilan birga yaratilgan 6 ta yo'nalish — dual tizim orqali amalga oshiriladi.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="sticky top-[70px] z-30 bg-[#061F17]/95 backdrop-blur-xl border-y border-[#F5EDD6]/5 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex gap-2 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-xl font-body text-sm font-bold transition-all duration-200 ${
                filter === f.id
                  ? 'bg-[#D4A843] text-[#0B3D2E] shadow-lg shadow-[#D4A843]/30'
                  : 'text-[#F5EDD6]/55 hover:text-[#F5EDD6] hover:bg-[#F5EDD6]/5'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Programs grid */}
      <section className="py-20 bg-[#0B3D2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {(filter === 'all' || filter === 'main') && (
            <>
              <div ref={ref} className={`mb-10 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
                <h2 className="font-display font-bold text-2xl text-[#F5EDD6] flex items-center gap-3">
                  <span className="w-1.5 h-8 rounded-full bg-[#D4A843]" />
                  Asosiy IT yo'nalishlari
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {shown.filter((p) => p.category === 'main').map((p, i) => (
                  <article
                    key={p.id}
                    className={`group relative p-8 rounded-3xl bg-[#061F17] border overflow-hidden hover:-translate-y-2 transition-all duration-400 ${
                      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ borderColor: `${p.color}25`, transitionDelay: `${i * 100}ms` }}
                  >
                    <div
                      className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                      style={{ background: p.color }}
                    />
                    <div className="relative">
                      <div className="flex items-start justify-between mb-5">
                        <span className="text-5xl">{p.emoji}</span>
                        <span
                          className="font-body text-xs font-bold px-3 py-1 rounded-full border"
                          style={{ color: p.color, borderColor: `${p.color}40`, background: `${p.color}12` }}
                        >
                          {p.duration}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-xl text-[#F5EDD6] mb-1">{p.title}</h3>
                      <p className="font-body text-xs mb-4" style={{ color: p.color }}>{p.titleEn}</p>
                      <p className="font-body text-[#F5EDD6]/50 text-sm leading-relaxed mb-5">{p.description}</p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="font-body text-[10px] font-bold px-2.5 py-1 rounded-md bg-[#F5EDD6]/5 text-[#F5EDD6]/55"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="pt-5 border-t border-[#F5EDD6]/5">
                        <p className="font-body text-xs font-bold text-[#F5EDD6]/35 mb-2">Karyera yo'llari</p>
                        <div className="flex flex-wrap gap-2">
                          {p.outcomes.map((o) => (
                            <span
                              key={o}
                              className="font-body text-[10px] px-2 py-1 rounded-md"
                              style={{ background: `${p.color}12`, color: p.color }}
                            >
                              {o}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-5 grid grid-cols-2 gap-2 text-[10px] font-body text-[#F5EDD6]/30">
                        <span>🏢 Haqiqiy kompaniya</span>
                        <span>🌍 Xalqaro almashinuv</span>
                        <span>💰 Maoshli amaliyot</span>
                        <span>📜 Global diplom</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}

          {(filter === 'all' || filter === 'additional') && (
            <>
              <div className="mb-10">
                <h2 className="font-display font-bold text-2xl text-[#F5EDD6] flex items-center gap-3">
                  <span className="w-1.5 h-8 rounded-full bg-[#4ECDC4]" />
                  Qo'shimcha yo'nalishlar
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {shown.filter((p) => p.category === 'additional').map((p, i) => (
                  <article
                    key={p.id}
                    className={`group p-7 rounded-3xl bg-[#061F17] border hover:border-opacity-60 hover:-translate-y-1 transition-all duration-300`}
                    style={{ borderColor: `${p.color}20` }}
                  >
                    <span className="text-5xl">{p.emoji}</span>
                    <h3 className="font-display font-bold text-xl text-[#F5EDD6] mt-5 mb-1">{p.title}</h3>
                    <p className="font-body text-xs mb-3" style={{ color: p.color }}>{p.titleEn}</p>
                    <p className="font-body text-[#F5EDD6]/50 text-sm leading-relaxed mb-4">{p.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="font-body text-[10px] font-bold px-2.5 py-1 rounded-md border"
                          style={{ color: p.color, borderColor: `${p.color}40`, background: `${p.color}12` }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="font-body text-[#F5EDD6]/30 text-xs">⏱ {p.duration} · Dual tizim kiradi</p>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Dual note */}
      <section className="py-16 bg-[#061F17] border-t border-[#F5EDD6]/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="p-10 rounded-3xl border border-[#D4A843]/12 bg-gradient-to-br from-[#D4A843]/5 to-transparent">
            <h3 className="font-display font-bold text-2xl text-[#F5EDD6] mb-4">
              Barcha yo'nalishlar <span className="text-[#D4A843]">Dual ta'limni</span> o'z ichiga oladi
            </h3>
            <p className="font-body text-[#F5EDD6]/50 mb-6 text-sm">
              Qaysi yo'nalishni tanlashingizdan qat'iy nazar — haftaning 4 kuni real kompaniyada, 2 kuni kollejda.
            </p>
            <div className="flex justify-center flex-wrap gap-6 font-body text-sm font-semibold">
              <span className="text-[#4ECDC4]">✦ 4 kun — kompaniya</span>
              <span className="text-[#D4A843]">✦ 2 kun — kollej</span>
              <span className="text-[#A29BFE]">✦ Maosh — 1-kundan</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
