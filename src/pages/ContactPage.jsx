import { useState } from 'react';
import { useInView } from '../hooks/useInView.js';
import { PROGRAMS } from '../data/index.js';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', program: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [leftRef, leftIn] = useInView();
  const [rightRef, rightIn] = useInView();

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Ismingizni kiriting';
    if (!form.email.includes('@')) e.email = 'To\'g\'ri email kiriting';
    if (!form.message.trim()) e.message = 'Xabar matnini kiriting';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1800);
  };

  const inputBase =
    'w-full bg-[#0B3D2E] border rounded-xl px-4 py-3.5 font-body text-sm text-[#F5EDD6] placeholder-[#F5EDD6]/25 focus:outline-none transition-all duration-200';
  const inputClass = (field) =>
    `${inputBase} ${errors[field] ? 'border-red-500/60 focus:border-red-400' : 'border-[#F5EDD6]/10 focus:border-[#D4A843]/50'}`;

  return (
    <main className="pt-[70px]">
      {/* Hero */}
      <section className="py-24 bg-[#0B3D2E] relative overflow-hidden" aria-labelledby="contact-h1">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4A843]/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center animate-fade-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-body font-bold tracking-[0.2em] uppercase border text-[#D4A843] border-[#D4A843]/30 bg-[#D4A843]/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] animate-pulse" />
            Aloqa
          </span>
          <h1 id="contact-h1" className="font-display text-5xl sm:text-7xl font-bold text-[#F5EDD6] mt-3 mb-5">
            Bog'lanaylik <span className="text-[#D4A843]">📬</span>
          </h1>
          <p className="font-body text-[#F5EDD6]/60 text-xl max-w-xl mx-auto">
            Qabul, dasturlar yoki hamkorlik bo'yicha savollaringiz bormi? Jamoamiz 24 soat ichida javob beradi.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-20 bg-[#061F17] border-t border-[#F5EDD6]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-14">

          {/* Form — 3 cols */}
          <div
            ref={leftRef}
            className={`lg:col-span-3 transition-all duration-700 ${leftIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <h2 className="font-display font-bold text-2xl text-[#F5EDD6] mb-8">Xabar Yuboring</h2>

            {sent ? (
              <div className="p-14 rounded-3xl bg-[#4ECDC4]/6 border border-[#4ECDC4]/20 text-center">
                <div className="text-7xl mb-5">✅</div>
                <h3 className="font-display font-bold text-2xl text-[#F5EDD6] mb-3">Xabar Qabul Qilindi!</h3>
                <p className="font-body text-[#F5EDD6]/60 mb-2">
                  Rahmat, <strong className="text-[#D4A843]">{form.name}</strong>.
                </p>
                <p className="font-body text-[#F5EDD6]/40 text-sm mb-8">
                  Qabul bo'limimiz <strong>{form.email}</strong> manziliga 24 soat ichida javob beradi.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name:'',email:'',phone:'',program:'',message:'' }); }}
                  className="font-body text-[#D4A843] text-sm font-bold hover:underline"
                >
                  Yana xabar yuborish →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Aloqa shakli" className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block font-body text-[#F5EDD6]/45 text-xs font-semibold uppercase tracking-wide mb-2">
                      To'liq Ism *
                    </label>
                    <input
                      id="name" name="name" type="text" value={form.name}
                      onChange={(e) => { setForm((f) => ({ ...f, name: e.target.value })); setErrors((er) => ({ ...er, name: '' })); }}
                      placeholder="Ismingiz" className={inputClass('name')}
                      aria-required="true" aria-describedby={errors.name ? 'name-err' : undefined}
                    />
                    {errors.name && <p id="name-err" className="font-body text-red-400 text-xs mt-1.5" role="alert">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-body text-[#F5EDD6]/45 text-xs font-semibold uppercase tracking-wide mb-2">
                      Email *
                    </label>
                    <input
                      id="email" name="email" type="email" value={form.email}
                      onChange={(e) => { setForm((f) => ({ ...f, email: e.target.value })); setErrors((er) => ({ ...er, email: '' })); }}
                      placeholder="email@misol.uz" className={inputClass('email')}
                      aria-required="true" aria-describedby={errors.email ? 'email-err' : undefined}
                    />
                    {errors.email && <p id="email-err" className="font-body text-red-400 text-xs mt-1.5" role="alert">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block font-body text-[#F5EDD6]/45 text-xs font-semibold uppercase tracking-wide mb-2">
                      Telefon
                    </label>
                    <input
                      id="phone" name="phone" type="tel" value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      placeholder="+998 XX XXX XX XX" className={inputClass('phone')}
                    />
                  </div>
                  <div>
                    <label htmlFor="program" className="block font-body text-[#F5EDD6]/45 text-xs font-semibold uppercase tracking-wide mb-2">
                      Yo'nalish qiziqishi
                    </label>
                    <select
                      id="program" name="program" value={form.program}
                      onChange={(e) => setForm((f) => ({ ...f, program: e.target.value }))}
                      className={`${inputClass('program')} cursor-pointer`}
                    >
                      <option value="" className="bg-[#0B3D2E]">Yo'nalishni tanlang</option>
                      <optgroup label="Asosiy IT" className="bg-[#0B3D2E]">
                        {PROGRAMS.filter((p) => p.category === 'main').map((p) => (
                          <option key={p.id} value={p.title} className="bg-[#0B3D2E]">{p.emoji} {p.title}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Qo'shimcha" className="bg-[#0B3D2E]">
                        {PROGRAMS.filter((p) => p.category === 'additional').map((p) => (
                          <option key={p.id} value={p.title} className="bg-[#0B3D2E]">{p.emoji} {p.title}</option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-body text-[#F5EDD6]/45 text-xs font-semibold uppercase tracking-wide mb-2">
                    Xabar *
                  </label>
                  <textarea
                    id="message" name="message" rows={5} value={form.message}
                    onChange={(e) => { setForm((f) => ({ ...f, message: e.target.value })); setErrors((er) => ({ ...er, message: '' })); }}
                    placeholder="Maqsadlaringiz, savollaringiz yoki qanday yordam kerakligini yozing…"
                    className={`${inputClass('message')} resize-none`}
                    aria-required="true" aria-describedby={errors.message ? 'msg-err' : undefined}
                  />
                  {errors.message && <p id="msg-err" className="font-body text-red-400 text-xs mt-1.5" role="alert">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-xl font-body font-bold text-sm tracking-wide flex items-center justify-center gap-3 transition-all duration-300 ${
                    loading
                      ? 'bg-[#D4A843]/40 text-[#0B3D2E]/50 cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#D4A843] to-[#B8902E] text-[#0B3D2E] hover:shadow-xl hover:shadow-[#D4A843]/25 hover:-translate-y-0.5'
                  }`}
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#0B3D2E]/30 border-t-[#0B3D2E] rounded-full animate-spin" />
                      Yuborilmoqda…
                    </>
                  ) : 'Xabar Yuborish →'}
                </button>
              </form>
            )}
          </div>

          {/* Info — 2 cols */}
          <div
            ref={rightRef}
            className={`lg:col-span-2 space-y-5 transition-all duration-700 delay-150 ${rightIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <h2 className="font-display font-bold text-2xl text-[#F5EDD6] mb-7">Aloqa Ma'lumotlari</h2>

            {[
              { icon: '📍', label: 'Manzil', val: 'Andijon shahri, O\'zbekiston', sub: 'Andijon viloyati, 170100' },
              { icon: '📞', label: 'Telefon', val: '+998 (74) 123-45-67', sub: 'Dush–Shan, 8:00–18:00' },
              { icon: '✉️', label: 'Email', val: 'info@AIKMT.edu.uz', sub: 'admissions@AIKMT.edu.uz' },
              { icon: '🕐', label: 'Ish vaqti', val: 'Dush–Shan: 08:00–18:00', sub: 'Qabul bo\'limi doim ochiq' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#0B3D2E] border border-[#F5EDD6]/6 hover:border-[#D4A843]/18 transition-all group"
              >
                <span className="text-2xl w-11 h-11 flex-shrink-0 rounded-xl bg-[#D4A843]/10 flex items-center justify-center group-hover:bg-[#D4A843]/18 transition-colors">
                  {item.icon}
                </span>
                <div>
                  <div className="font-body text-[#F5EDD6]/35 text-xs font-semibold uppercase tracking-wider mb-0.5">{item.label}</div>
                  <div className="font-body text-[#F5EDD6] text-sm font-bold">{item.val}</div>
                  <div className="font-body text-[#F5EDD6]/30 text-xs mt-0.5">{item.sub}</div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-[#F5EDD6]/6 bg-[#0B3D2E] h-[200px] flex flex-col items-center justify-center gap-3">
              <span className="text-5xl">🗺️</span>
              <div className="text-center">
                <div className="font-body font-bold text-[#F5EDD6] text-sm">Andijon Ilg'or Mahorat Maktabi</div>
                <div className="font-body text-[#F5EDD6]/35 text-xs mt-1">Andijon shahri, O'zbekiston 🇺🇿</div>
              </div>
              <a
                href="https://maps.google.com/?q=Andijon+Uzbekistan"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body px-4 py-2 bg-[#D4A843]/12 text-[#D4A843] text-xs font-bold rounded-lg border border-[#D4A843]/20 hover:bg-[#D4A843]/22 transition-all"
              >
                Google Maps'da ochish ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
