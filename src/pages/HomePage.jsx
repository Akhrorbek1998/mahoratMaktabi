import { useState, useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView.js';
import { useCountUp } from '../hooks/useCountUp.js';
import { useGSAP } from '../hooks/useGSAP.js';
import { STATS, PROGRAMS, DUAL_SCHEDULE, INTERNATIONAL } from '../data/index.js';

// ── Hero Section ─────────────────────────────────────────────
function HeroSection({ setPage }) {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const badgeRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const [slideIdx, setSlideIdx] = useState(0);

  const slides = [
    { headline: ["Kelajakni", "Hoziroq", "Qur"], accent: 1, sub: "O'zbekistondagi eng innovatsion dual ta'lim tizimi orqali IT sohasida dunyo darajasidagi mutaxassis bo'ling." },
    { headline: ["O'qiy Turib", "Daromad", "Top"], accent: 1, sub: "Haftaning 4 kuni real kompaniyalarda ishlang. Maosh oling. Tajriba orttiring. Diplom oling." },
    { headline: ["Germaniya &", "Koreyada", "Tahsil"], accent: 0, sub: "1-kurs tugagach xalqaro almashinuv dasturiga qo'shiling. Dunyoni kashf eting." },
    { headline: ["164 Davlatda", "Tan Olinadigan", "Diplom"], accent: 0, sub: "AIMM diplomi xalqaro bozorda qadrli. Dunyoning istalgan joyida ishlash imkoniyati." },
  ];

  useGSAP((gsap) => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from(badgeRef.current, { y: -20, opacity: 0, duration: 0.6 })
        .from(titleRef.current?.children || [], { y: 50, opacity: 0, stagger: 0.12, duration: 0.8 }, '-=0.3')
        .from(subRef.current, { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
        .from(ctaRef.current?.children || [], { y: 20, opacity: 0, stagger: 0.1, duration: 0.5 }, '-=0.3');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setSlideIdx((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);

  const slide = slides[slideIdx];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B3D2E]"
      aria-label="Kirish bo'limi"
    >
      {/* Background elements */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212,168,67,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,168,67,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#D4A843]/4 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4ECDC4]/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B3D2E]/90" />

      {/* Spinning geometric accent */}
      <div className="absolute right-8 top-1/4 hidden xl:flex items-center justify-center w-72 h-72">
        <div className="absolute inset-0 border border-[#D4A843]/10 rounded-full animate-spin-slow" />
        <div className="absolute inset-6 border border-[#4ECDC4]/10 rounded-full animate-spin-slow-rev" />
        <div className="absolute inset-12 border border-[#D4A843]/10 rounded-full animate-spin-slow" />
        <div className="text-7xl animate-float">🏛️</div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
        {/* Badge */}
        <div ref={badgeRef}>
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-body font-bold tracking-[0.25em] uppercase border text-[#D4A843] border-[#D4A843]/30 bg-[#D4A843]/8 backdrop-blur-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] animate-pulse" />
            Prezident Texnika Kolleji · Andijon viloyati
          </span>
        </div>

        {/* Animated Headline */}
        <div
          key={slideIdx}
          ref={titleRef}
          className="mb-6"
          style={{ animation: 'fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both' }}
        >
          {slide.headline.map((word, i) => (
            <div
              key={i}
              className={`block font-display leading-[1.0] tracking-tight ${
                i === slide.accent
                  ? 'text-[#D4A843]'
                  : 'text-[#F5EDD6]'
              }`}
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 700 }}
            >
              {word}
            </div>
          ))}
        </div>

        {/* Sub */}
        <p
          ref={subRef}
          key={'sub' + slideIdx}
          className="font-body text-[#F5EDD6]/70 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          style={{ animation: 'fadeUp 0.6s 0.1s cubic-bezier(0.22,1,0.36,1) both' }}
        >
          {slide.sub}
        </p>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlideIdx(i)}
              aria-label={`Slayd ${i + 1}`}
              className={`rounded-full transition-all duration-400 ${
                i === slideIdx
                  ? 'w-8 h-2 bg-[#D4A843]'
                  : 'w-2 h-2 bg-[#F5EDD6]/20 hover:bg-[#F5EDD6]/40'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setPage('Programs')}
            className="relative group overflow-hidden px-10 py-4 rounded-2xl font-body font-bold text-base bg-gradient-to-r from-[#D4A843] to-[#B8902E] text-[#0B3D2E] shadow-xl shadow-[#D4A843]/30 hover:shadow-[#D4A843]/60 hover:-translate-y-1 transition-all duration-300"
          >
            <span className="absolute inset-0 bg-[#E8C46A] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative">Yo'nalishlarni Ko'rish →</span>
          </button>
          <button
            onClick={() => setPage('About')}
            className="px-10 py-4 rounded-2xl font-body font-bold text-base border-2 border-[#F5EDD6]/20 text-[#F5EDD6] hover:border-[#D4A843]/50 hover:bg-[#D4A843]/8 transition-all duration-300"
          >
            Kollej haqida
          </button>
        </div>

        {/* Scroll cue */}
        <div className="mt-16 flex flex-col items-center gap-2 text-[#F5EDD6]/30">
          <span className="font-body text-[10px] tracking-widest uppercase">Pastga aylantiring</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#D4A843]/40 to-transparent" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  );
}

// ── Stats Strip ───────────────────────────────────────────────
function StatsStrip() {
  const [ref, inView] = useInView(0.2);

  return (
    <section
      ref={ref}
      className="bg-[#061F17] border-y border-[#F5EDD6]/5 py-14"
      aria-label="Asosiy ko'rsatkichlar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((s, i) => {
          const count = useCountUp(s.value + s.suffix, 1600, inView);
          return (
            <div
              key={s.label}
              className={`text-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="font-display font-bold text-4xl sm:text-5xl text-[#F5EDD6] mb-1">{count}</div>
              <div className="font-body font-semibold text-[#D4A843] text-sm mb-0.5">{s.label}</div>
              <div className="font-body text-[#F5EDD6]/35 text-xs">{s.sublabel}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ── About Intro ───────────────────────────────────────────────
function AboutIntro({ setPage }) {
  const [leftRef, leftIn] = useInView();
  const [rightRef, rightIn] = useInView();

  return (
    <section className="py-28 bg-[#0B3D2E] overflow-hidden" aria-labelledby="about-intro-h">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div
          ref={leftRef}
          className={`transition-all duration-700 ${leftIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-body font-bold tracking-[0.2em] uppercase border text-[#4ECDC4] border-[#4ECDC4]/30 bg-[#4ECDC4]/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ECDC4] animate-pulse" />
            Biz haqimizda
          </span>
          <h2
            id="about-intro-h"
            className="font-display text-4xl sm:text-5xl font-bold text-[#F5EDD6] mt-2 mb-6 leading-tight"
          >
            Andijonning yagona{' '}
            <span className="text-[#D4A843]">Prezident</span>{' '}
            texnika kolleji
          </h2>
          <p className="font-body text-[#F5EDD6]/70 text-lg leading-relaxed mb-4">
            Prezident farmoni asosida tashkil etilgan AIMM — Andijon viloyatidagi yagona Prezident texnika kolleji. Bu maqom ta'lim sifatiga bo'lgan eng yuqori talablarni anglatadi.
          </p>
          <p className="font-body text-[#F5EDD6]/50 leading-relaxed mb-8">
            Biz sinf xonasi nazariyasini real kompaniya tajribasi bilan birlashtirgan kashshof Dual ta'lim tizimimiz orqali sanoatga tayyor bitiruvchilar tayyorlaymiz.
          </p>
          <button
            onClick={() => setPage('About')}
            className="relative group overflow-hidden px-7 py-3.5 rounded-xl font-body font-bold text-sm bg-gradient-to-r from-[#D4A843] to-[#B8902E] text-[#0B3D2E] shadow-lg shadow-[#D4A843]/25 hover:shadow-[#D4A843]/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="absolute inset-0 bg-[#E8C46A] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative">Batafsil O'qish →</span>
          </button>
        </div>

        <div
          ref={rightRef}
          className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-150 ${rightIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
        >
          {[
            { icon: '🏛️', title: 'Prezident Maqomi', val: 'Yagona', desc: 'Andijon viloyatida' },
            { icon: '🌍', title: 'Diplom qamrovi', val: '164 davlat', desc: 'Xalqaro tan olinadi' },
            { icon: '👥', title: 'Talabalar', val: '1,200+', desc: 'Bu o\'quv yilida' },
            { icon: '🤝', title: 'Hamkor firma', val: '45+', desc: 'Amaliyot bazasi' },
          ].map((item, i) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-[#061F17] border border-[#F5EDD6]/6 hover:border-[#D4A843]/25 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="text-3xl group-hover:scale-110 inline-block transition-transform duration-300">{item.icon}</span>
              <div className="font-display font-bold text-xl text-[#F5EDD6] mt-3 mb-1">{item.val}</div>
              <div className="font-body text-[#D4A843] text-xs font-bold mb-0.5">{item.title}</div>
              <div className="font-body text-[#F5EDD6]/35 text-xs">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Programs Preview ──────────────────────────────────────────
function ProgramsPreview({ setPage }) {
  const [ref, inView] = useInView(0.1);

  return (
    <section className="py-28 bg-[#061F17]" aria-labelledby="programs-preview-h">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-body font-bold tracking-[0.2em] uppercase border text-[#A29BFE] border-[#A29BFE]/30 bg-[#A29BFE]/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A29BFE] animate-pulse" />
            Ta'lim yo'nalishlari
          </span>
          <h2
            id="programs-preview-h"
            className="font-display text-4xl sm:text-5xl font-bold text-[#F5EDD6] mt-2 mb-4"
          >
            O'z yo'lingizni <span className="text-[#D4A843]">tanlang</span>
          </h2>
          <p className="font-body text-[#F5EDD6]/55 max-w-xl mx-auto text-lg">
            Sanoat talabiga asoslangan 3 ta asosiy IT va 3 ta qo'shimcha yo'nalish.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.filter((p) => p.category === 'main').map((p, i) => (
            <article
              key={p.id}
              onClick={() => setPage('Programs')}
              className={`group relative p-8 rounded-3xl bg-[#0B3D2E] border border-[#F5EDD6]/6 overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-400 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 120 + 200}ms`, borderColor: `${p.color}20` }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                style={{ background: `radial-gradient(circle at 30% 20%, ${p.color}12, transparent 70%)` }}
              />
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: p.color }}
              />
              <div className="relative">
                <div className="text-5xl mb-5">{p.emoji}</div>
                <h3 className="font-display font-bold text-xl text-[#F5EDD6] mb-1">{p.title}</h3>
                <p className="font-body text-xs mb-3" style={{ color: p.color }}>{p.titleEn}</p>
                <p className="font-body text-[#F5EDD6]/55 text-sm leading-relaxed mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-[10px] font-bold px-2.5 py-1 rounded-md border"
                      style={{ color: p.color, borderColor: `${p.color}40`, background: `${p.color}12` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[#F5EDD6]/6">
                  <span className="font-body text-xs text-[#F5EDD6]/35">⏱ {p.duration}</span>
                  <span
                    className="font-body text-xs font-semibold group-hover:translate-x-1 transition-transform duration-200"
                    style={{ color: p.color }}
                  >
                    Batafsil →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setPage('Programs')}
            className="px-7 py-3 rounded-xl font-body font-semibold text-sm border border-[#F5EDD6]/15 text-[#F5EDD6]/60 hover:border-[#D4A843]/40 hover:text-[#D4A843] transition-all duration-300"
          >
            Barcha 6 yo'nalishni ko'rish ↗
          </button>
        </div>
      </div>
    </section>
  );
}

// ── Dual Education ────────────────────────────────────────────
function DualSection() {
  const [leftRef, leftIn] = useInView();
  const [rightRef, rightIn] = useInView();

  return (
    <section className="py-28 bg-[#0B3D2E] relative overflow-hidden" aria-labelledby="dual-h">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#D4A843]/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div
          ref={leftRef}
          className={`transition-all duration-700 ${leftIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-body font-bold tracking-[0.2em] uppercase border text-[#D4A843] border-[#D4A843]/30 bg-[#D4A843]/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] animate-pulse" />
            Bizning ustunligimiz
          </span>
          <h2
            id="dual-h"
            className="font-display text-4xl sm:text-5xl font-bold text-[#F5EDD6] mt-2 mb-6 leading-tight"
          >
            Dual Ta'lim <span className="text-[#D4A843]">Tizimi</span>
          </h2>
          <p className="font-body text-[#F5EDD6]/70 text-lg leading-relaxed mb-6">
            Ko'pgina kollejlar nazariya o'rgatib, sizi ish bozori haqiqatiga tashlaydi. Biz buni boshqacha qilamiz — tubdan boshqacha.
          </p>
          <p className="font-body text-[#F5EDD6]/50 leading-relaxed mb-8">
            Birinchi semestrdan boshlab haftaning <strong className="text-[#F5EDD6]">4 kuni real kompaniyada</strong> va <strong className="text-[#F5EDD6]">2 kuni kollejda</strong> o'qiysiz. Maosh olasiz. Haqiqiy loyihalar yaratAsiz. Haqiqiy aloqalar o'rnatasiz — diplom ola turib.
          </p>

          <div className="space-y-4">
            {[
              { icon: '💰', title: "O'qiy turib daromad top", desc: 'Amaliyot kunlarida haqiqiy maosh oling.' },
              { icon: '🧠', title: 'Bilimni darhol qo\'lla', desc: "Juma kuni o'rganganingizni dushanba kuni ishlatarsiz." },
              { icon: '🚀', title: "Tayyor holda bitir", desc: "Bitirish vaqtida CV'da 2+ yillik tajriba bo'ladi." },
            ].map((b, i) => (
              <div
                key={b.title}
                className={`flex items-start gap-4 p-5 rounded-2xl bg-[#061F17] border border-[#F5EDD6]/6 hover:border-[#D4A843]/25 transition-all duration-700 group ${
                  leftIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                }`}
                style={{ transitionDelay: `${i * 100 + 300}ms` }}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform flex-shrink-0">{b.icon}</span>
                <div>
                  <div className="font-body font-bold text-[#F5EDD6] text-sm mb-1">{b.title}</div>
                  <div className="font-body text-[#F5EDD6]/45 text-sm">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Week visualizer */}
        <div
          ref={rightRef}
          className={`transition-all duration-700 delay-200 ${rightIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
        >
          <div className="p-8 rounded-3xl bg-[#061F17] border border-[#F5EDD6]/7">
            <h3 className="font-display font-bold text-[#F5EDD6] text-lg mb-7 text-center">
              Odatiy haftalik jadval
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-8">
              {DUAL_SCHEDULE.map((d, i) => (
                <div
                  key={d.day}
                  className={`flex flex-col items-center gap-2 p-3.5 rounded-2xl border transition-all duration-500 ${
                    rightIn ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  } ${
                    d.type === 'work'
                      ? 'bg-[#4ECDC4]/10 border-[#4ECDC4]/25'
                      : 'bg-[#D4A843]/10 border-[#D4A843]/25'
                  }`}
                  style={{ transitionDelay: `${i * 80 + 200}ms` }}
                >
                  <span className="text-xl">{d.icon}</span>
                  <span
                    className="font-body text-[10px] font-black tracking-wide"
                    style={{ color: d.type === 'work' ? '#4ECDC4' : '#D4A843' }}
                  >
                    {d.day}
                  </span>
                  <span
                    className="font-body text-[9px] font-semibold"
                    style={{ color: d.type === 'work' ? '#4ECDC4' : '#D4A843', opacity: 0.7 }}
                  >
                    {d.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 justify-center mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#4ECDC4]" />
                <span className="font-body text-[#F5EDD6]/70 text-sm font-medium">4 kun — Kompaniya</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#D4A843]" />
                <span className="font-body text-[#F5EDD6]/70 text-sm font-medium">2 kun — Kollej</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "To'lanadigan ish kuni/hafta", val: '4', color: '#4ECDC4' },
                { label: "O'quv kuni/hafta", val: '2', color: '#D4A843' },
                { label: 'Haqiqiy tajriba/yil', val: '~200 soat', color: '#A29BFE' },
                { label: 'Bandlik darajasi', val: '94%', color: '#FF6B9D' },
              ].map((m) => (
                <div key={m.label} className="p-4 rounded-xl bg-[#0B3D2E] text-center">
                  <div className="font-display font-bold text-2xl" style={{ color: m.color }}>{m.val}</div>
                  <div className="font-body text-[#F5EDD6]/35 text-[11px] mt-1 leading-tight">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── International Section ─────────────────────────────────────
function InternationalSection({ setPage }) {
  const [ref, inView] = useInView(0.1);

  return (
    <section className="py-28 bg-[#061F17]" aria-labelledby="intl-h">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-body font-bold tracking-[0.2em] uppercase border text-[#4ECDC4] border-[#4ECDC4]/30 bg-[#4ECDC4]/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ECDC4] animate-pulse" />
            Xalqaro imkoniyatlar
          </span>
          <h2
            id="intl-h"
            className="font-display text-4xl sm:text-5xl font-bold text-[#F5EDD6] mt-2 mb-4"
          >
            Karyerangiz <span className="text-[#4ECDC4]">dunyo</span> miqyosida
          </h2>
          <p className="font-body text-[#F5EDD6]/55 max-w-xl mx-auto text-lg">
            1-kurs tugagandan so'ng almashinuv dasturlari ochiladi. Xalqaro amaliyot va xalqaro diplom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {INTERNATIONAL.map((c, i) => (
            <div
              key={c.country}
              className={`group p-8 rounded-3xl bg-[#0B3D2E] border border-[#F5EDD6]/6 hover:border-[#F5EDD6]/14 hover:-translate-y-1 transition-all duration-400 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              <div className="flex items-start gap-5 mb-6">
                <span className="text-6xl">{c.flag}</span>
                <div>
                  <h3 className="font-display font-bold text-2xl text-[#F5EDD6] mb-2">
                    {c.country} Dasturi
                  </h3>
                  <p className="font-body text-[#F5EDD6]/50 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {c.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3 font-body text-sm text-[#F5EDD6]/70">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 font-bold"
                      style={{ background: `${c.color}20`, color: c.color }}
                    >
                      ✓
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>
              <div
                className="pt-4 border-t border-[#F5EDD6]/5 font-body text-xs font-bold"
                style={{ color: c.color }}
              >
                📊 {c.stat}
              </div>
            </div>
          ))}
        </div>

        {/* Diploma banner */}
        <div
          className={`relative overflow-hidden p-10 rounded-3xl border border-[#D4A843]/15 text-center transition-all duration-700 delay-400 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ background: 'linear-gradient(135deg, rgba(212,168,67,0.08), rgba(11,61,46,0) 50%, rgba(78,205,196,0.06))' }}
        >
          <div className="relative">
            <span className="text-6xl">🌍</span>
            <h3 className="font-display font-bold text-3xl text-[#F5EDD6] mt-4 mb-3">
              Diplom <span className="text-[#D4A843]">164 davlatda</span> tan olinadi
            </h3>
            <p className="font-body text-[#F5EDD6]/50 max-w-md mx-auto mb-7 text-sm">
              AIMM diplomingiz xalqaro bozorda qadrli. Berlinden Seulgacha — diplom ishlab beradi.
            </p>
            <button
              onClick={() => setPage('Contact')}
              className="relative group overflow-hidden px-9 py-3.5 rounded-xl font-body font-bold text-sm bg-gradient-to-r from-[#D4A843] to-[#B8902E] text-[#0B3D2E] shadow-lg shadow-[#D4A843]/25 hover:shadow-[#D4A843]/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-[#E8C46A] opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">Ariza topshirish →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Marquee ───────────────────────────────────────────────────
function MarqueeStrip() {
  const items = ['💻 Dasturlash', '🎨 Dizayn', '🖥️ Muhandislik', '🇩🇪 Germaniya', '🇰🇷 Koreya', '🏛️ Prezident Kolleji', '🌍 164 Davlat', '💰 Dual Ta\'lim', '🚀 IT Karerayingiz'];
  const doubled = [...items, ...items];
  return (
    <div
      className="py-5 bg-[#D4A843] overflow-hidden"
      aria-hidden="true"
    >
      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="font-body font-bold text-[#0B3D2E] text-sm flex-shrink-0 flex items-center gap-2">
            {item}
            <span className="opacity-40">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ── CTA Section ───────────────────────────────────────────────
function CTASection({ setPage }) {
  const [ref, inView] = useInView(0.2);

  return (
    <section
      className="py-28 bg-[#0B3D2E] relative overflow-hidden"
      aria-label="Ariza topshirish"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4A843]/6 via-transparent to-[#4ECDC4]/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4A843]/4 blur-3xl" />

      <div
        ref={ref}
        className={`relative max-w-3xl mx-auto px-4 text-center transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-body font-bold tracking-[0.2em] uppercase border text-[#D4A843] border-[#D4A843]/30 bg-[#D4A843]/10 mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] animate-pulse" />
          Sayohatingizni boshlang
        </span>
        <h2 className="font-display text-5xl sm:text-7xl font-bold text-[#F5EDD6] leading-none mb-6 tracking-tight">
          Ajoyib narsa<br />
          <span className="text-[#D4A843]">yaratishga</span><br />
          tayyormisiz?
        </h2>
        <p className="font-body text-[#F5EDD6]/60 text-lg mb-10 max-w-xl mx-auto">
          2025–26 o'quv yili uchun ariza qabul boshlandi. 1,200+ talabaga qo'shiling.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setPage('Contact')}
            className="relative group overflow-hidden px-12 py-4 rounded-2xl font-body font-bold text-base bg-gradient-to-r from-[#D4A843] to-[#B8902E] text-[#0B3D2E] shadow-xl shadow-[#D4A843]/30 hover:shadow-[#D4A843]/60 hover:-translate-y-1 transition-all duration-300"
          >
            <span className="absolute inset-0 bg-[#E8C46A] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative">Ariza Topshirish →</span>
          </button>
          <button
            onClick={() => setPage('Contact')}
            className="px-12 py-4 rounded-2xl font-body font-bold text-base border-2 border-[#F5EDD6]/20 text-[#F5EDD6] hover:border-[#D4A843]/50 hover:bg-[#D4A843]/8 transition-all duration-300"
          >
            Qabul bo'limi
          </button>
        </div>
      </div>
    </section>
  );
}

// ── HomePage (main export) ────────────────────────────────────
export default function HomePage({ setPage }) {
  return (
    <main>
      <HeroSection setPage={setPage} />
      <StatsStrip />
      <AboutIntro setPage={setPage} />
      <ProgramsPreview setPage={setPage} />
      <DualSection />
      <MarqueeStrip />
      <InternationalSection setPage={setPage} />
      <CTASection setPage={setPage} />
    </main>
  );
}
