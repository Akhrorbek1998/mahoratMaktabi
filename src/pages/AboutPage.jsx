import { useInView } from '../hooks/useInView.js';

export default function AboutPage() {
  const [ref1, in1] = useInView();
  const [ref2, in2] = useInView();
  const [ref3, in3] = useInView();

  return (
    <main className="pt-[70px]">
      {/* Hero */}
      <section className="py-24 bg-[#0B3D2E] relative overflow-hidden" aria-labelledby="about-h1">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4A843]/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center animate-fade-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-body font-bold tracking-[0.2em] uppercase border text-[#D4A843] border-[#D4A843]/30 bg-[#D4A843]/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] animate-pulse" />
            Kollej haqida
          </span>
          <h1
            id="about-h1"
            className="font-display text-5xl sm:text-7xl font-bold text-[#F5EDD6] mt-3 mb-6 leading-tight"
          >
            Shunchaki kollej <span className="text-[#D4A843]">emas</span>
          </h1>
          <p className="font-body text-[#F5EDD6]/65 text-xl leading-relaxed max-w-2xl mx-auto">
            Andijon Ilg'or Mahorat Maktabi — O'zbekiston yoshlarini global IT karerasiga tayyorlashda yangi standart o'rnatmoqda.
          </p>
        </div>
      </section>

      {/* Presidential status */}
      <section className="py-20 bg-[#061F17] border-t border-[#F5EDD6]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref={ref1}
            className={`transition-all duration-700 ${in1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#D4A843]/10 border border-[#D4A843]/25 mb-8">
              <span className="text-3xl">🏛️</span>
              <div>
                <div className="font-display font-bold text-[#D4A843] text-sm">Prezident Texnika Kolleji</div>
                <div className="font-body text-[#F5EDD6]/40 text-xs">Farmon asosida · Andijon viloyati</div>
              </div>
            </div>
            <h2 className="font-display text-4xl font-bold text-[#F5EDD6] mb-6 leading-tight">
              Andijon viloyatidagi yagona Prezident kolleji
            </h2>
            <p className="font-body text-[#F5EDD6]/65 leading-relaxed mb-4 text-lg">
              Prezident maqomimiz shunchaki unvon emas — bu mas'uliyat. Hukumat farmoni asosida tashkil etilgan AIMM qat'iy milliy standartlar asosida ishlaydi va eng yuqori darajadagi moliyaviy qo'llab-quvvatlash oladi.
            </p>
            <p className="font-body text-[#F5EDD6]/45 leading-relaxed mb-8">
              Bu maqom talabalarimizga davlat stipendiyalari, xalqaro almashinuv dasturlarida ustuvor o'rin va ish bozorida katta e'tibor qozongan diplom beradi.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Davlat moliyalashtirilishi", "ISO Standartlar", "Xalqaro akkreditatsiya", "Prezident Farmoni"].map((t) => (
                <span
                  key={t}
                  className="font-body px-3 py-1.5 rounded-lg bg-[#D4A843]/10 border border-[#D4A843]/20 text-[#D4A843] text-xs font-bold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div
            className={`space-y-4 transition-all duration-700 delay-200 ${in1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            {[
              { year: "2019", event: "Prezident farmoni bilan Andijon viloyatidagi birinchi Texnika kolleji tashkil etildi" },
              { year: "2020", event: "Birinchi 150 talaba 3 ta IT yo'nalishiga qabul qilindi" },
              { year: "2021", event: "15 ta mintaqaviy texnologiya kompaniyasi bilan dual ta'lim shartnomasi imzolandi" },
              { year: "2022", event: "Germaniya almashinuv dasturi ishga tushdi; birinchi 10 talaba xorijga ketdi" },
              { year: "2023", event: "Seul Texnologiya Instituti bilan koreys hamkorlik kelishuvi tuzildi" },
              { year: "2024", event: "1,200+ talaba; bitiruvchilar orasida 94% bandlik darajasiga erishildi" },
            ].map((ev, i) => (
              <div
                key={ev.year}
                className={`flex items-start gap-4 group transition-all duration-700 ${in1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${i * 80 + 400}ms` }}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#D4A843]/10 border border-[#D4A843]/20 flex items-center justify-center font-body font-black text-[#D4A843] text-sm group-hover:bg-[#D4A843]/20 transition-colors">
                  {ev.year}
                </div>
                <div className="flex-1 py-3.5 px-4 rounded-xl bg-[#0B3D2E] border border-[#F5EDD6]/5 font-body text-[#F5EDD6]/60 text-sm leading-relaxed group-hover:border-[#F5EDD6]/10 transition-colors">
                  {ev.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diploma recognition */}
      <section className="py-20 bg-[#0B3D2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div
            ref={ref2}
            className={`transition-all duration-700 ${in2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-body font-bold tracking-[0.2em] uppercase border text-[#4ECDC4] border-[#4ECDC4]/30 bg-[#4ECDC4]/10 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ECDC4] animate-pulse" />
              Global tan olinish
            </span>
            <h2 className="font-display text-4xl font-bold text-[#F5EDD6] mt-3 mb-6">
              Diplomingiz — dunyo bo'ylab ishlaydi
            </h2>
          </div>
          <div
            className={`max-w-4xl mx-auto grid sm:grid-cols-3 gap-6 transition-all duration-700 delay-150 ${in2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {[
              { num: "164", label: "Davlat", detail: "Xalqaro tan olingan malaka" },
              { num: "EU", label: "Mos", detail: "Yevropa Malakalar Tizimi bilan uyg'unlashgan" },
              { num: "GCC", label: "Tan olingan", detail: "Fors ko'rfazi hamkorlik kengashi davlatlarida qabul qilinadi" },
            ].map((d, i) => (
              <div
                key={d.num}
                className={`p-8 rounded-3xl bg-[#061F17] border border-[#4ECDC4]/12 hover:border-[#4ECDC4]/30 transition-all duration-700 ${in2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100 + 300}ms` }}
              >
                <div className="font-display font-bold text-4xl text-[#4ECDC4] mb-2">{d.num}</div>
                <div className="font-body font-bold text-[#F5EDD6] mb-2">{d.label}</div>
                <div className="font-body text-[#F5EDD6]/40 text-sm">{d.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#061F17] border-t border-[#F5EDD6]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            ref={ref3}
            className={`text-center mb-14 transition-all duration-700 ${in3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-body font-bold tracking-[0.2em] uppercase border text-[#A29BFE] border-[#A29BFE]/30 bg-[#A29BFE]/10 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A29BFE] animate-pulse" />
              Bizni harakatlantiruvchi kuch
            </span>
            <h2 className="font-display text-4xl font-bold text-[#F5EDD6] mt-3">Asosiy qadriyatlar</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🚀', title: 'Innovatsiya birinchi', desc: 'Sanoat talablarini aks ettirish uchun o\'quv dasturini muntazam yangilab turamiz.' },
              { icon: '🤝', title: 'Sanoat hamkorligi', desc: '45+ kompaniya hamkorlarimiz shunchaki amaliyot joyi emas — ular dasturlarimizni birga loyihalaydi.' },
              { icon: '🌐', title: 'Global fikrlash', desc: 'Har bir talaba birinchi kundan xalqaro karerayaga tayyorlanadi.' },
              { icon: '💡', title: 'Amaliyot > Nazariya', desc: 'Nazariya asoslanadi; amaliyot o\'zgartiradi. Dual tizimimiz har bir tushunchani real kontekstda qo\'llaydi.' },
              { icon: '❤️', title: 'Talaba muvaffaqiyati', desc: 'Har bir qaror — dars jadvalidan hamkorliklariga qadar — talabalar natijalarini yaxshilash uchun qabul qilinadi.' },
              { icon: '🏆', title: 'Sifat standarti', desc: 'Prezident kolleji sifatida biz har bo\'limda milliy normadan yuqori standartlarga amal qilamiz.' },
            ].map((v, i) => (
              <div
                key={v.title}
                className={`p-6 rounded-2xl bg-[#0B3D2E] border border-[#F5EDD6]/6 hover:border-[#D4A843]/18 transition-all duration-700 group cursor-default ${in3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 80 + 200}ms` }}
              >
                <span className="text-3xl group-hover:scale-110 inline-block transition-transform duration-300">{v.icon}</span>
                <h3 className="font-display font-bold text-[#F5EDD6] text-base mt-4 mb-2">{v.title}</h3>
                <p className="font-body text-[#F5EDD6]/45 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
