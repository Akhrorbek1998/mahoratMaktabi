# 🏛️ AIMM — Andijon Ilg'or Mahorat Maktabi

> Andijon viloyatidagi yagona Prezident texnika kollejining to'liq veb-sayti.

**Stack:** React 18 · TailwindCSS 3 · GSAP 3.12 · Vite 5

---

## 🚀 Ishga Tushirish

```bash
# 1. O'rnatish
npm install

# 2. Development server
npm run dev

# 3. Build
npm run build

# 4. Preview
npm run preview
```

Brauzerda oching: **http://localhost:5173**

---

## 📁 Loyiha Tuzilmasi

```
aimm-college/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── og-image.jpg              ← Open Graph / SEO rasmi
│
├── src/
│   ├── main.jsx                  ← React entry point
│   ├── App.jsx                   ← Router + layout shell
│   ├── index.css                 ← Tailwind + global animatsiyalar
│   │
│   ├── assets/
│   │   ├── images/               ← Hero, teacher rasmlari
│   │   └── icons/                ← SVG ikonkalar
│   │
│   ├── data/
│   │   └── index.js              ← Barcha statik kontent (dasturlar, o'qituvchilar, yangiliklar)
│   │
│   ├── hooks/
│   │   ├── useInView.js          ← Intersection Observer (scroll reveal)
│   │   ├── useCountUp.js         ← Animatsiyali raqam hisoblagich
│   │   └── useGSAP.js            ← GSAP integratsiya hook
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx        ← Sticky navigatsiya (mobil + desktop)
│   │   │   └── Footer.jsx        ← To'liq footer (havolalar, aloqa)
│   │   │
│   │   ├── ui/
│   │   │   └── index.jsx         ← GoldButton, SectionTag, RevealBlock, Chip
│   │   │
│   │   └── sections/             ← (Kengaytirish uchun joy — kelajakda)
│   │       ├── StatsStrip.jsx
│   │       ├── DualSection.jsx
│   │       └── CTASection.jsx
│   │
│   └── pages/
│       ├── HomePage.jsx          ← Hero, Stats, About intro, Programs preview, Dual, Xalqaro, CTA
│       ├── AboutPage.jsx         ← Prezident maqomi, vaqt chizig'i, diplom, qadriyatlar
│       ├── ProgramsPage.jsx      ← Barcha 6 dastur, filter tabs, karta layout
│       ├── TeachersPage.jsx      ← O'qituvchilar kartasi, animatsiyali avatar
│       ├── NewsPage.jsx          ← Yangilik kartasi + alohida yangilik sahifasi
│       └── ContactPage.jsx       ← Forma (validatsiya), aloqa ma'lumotlari, xarita
│
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 🎨 Dizayn Tizimi

| Token | Qiymat |
|-------|--------|
| Asosiy fon | `#0B3D2E` (chuqur zangori-yashil) |
| Ikkinchi fon | `#061F17` (qorong'i yashil) |
| Matn | `#F5EDD6` (iliq krem) |
| Oltin aktsent | `#D4A843` |
| Yashil aktsent | `#4ECDC4` |
| Display shrifti | Cormorant Garamond (serif) |
| Body shrifti | Plus Jakarta Sans (sans-serif) |

---

## 📄 Sahifalar

| Sahifa | Tarkib |
|--------|--------|
| **Home** | Hero (avto-slider), statistika, kollej haqida, dasturlar preview, dual ta'lim vizualizeri, xalqaro imkoniyatlar, CTA |
| **About** | Prezident maqomi, tarix jadvali, diplom tan olinishi (164 davlat), qadriyatlar |
| **Programs** | Filter tabs, barcha 6 dastur kartasi, karyera yo'llari, dual eslatma |
| **Teachers** | 8 nafar o'qituvchi kartasi, hover effektlar, tajriba ko'rsatkichlari |
| **News** | 6 ta yangilik kartasi + individual yangilik sahifasi |
| **Contact** | Tekshirilgan forma, aloqa ma'lumotlari, Google Maps havolasi |

---

## ⚡ Texnik Xususiyatlar

- **GSAP** CDN orqali dinamik yuklanadi — Hero sahifasiga kirish animatsiyasi
- **IntersectionObserver** — har bir bo'limda scroll-reveal (useInView hook)
- **useCountUp** — statistika animatsiyasi
- **Sahifalar o'tishi** — har bir navigatsiyada silliq fadeUp animatsiyasi
- **Sticky filter tabs** — Dasturlar sahifasida
- **Marquee lenta** — Bosh sahifada oltin lenta
- **Forma validatsiyasi** — hato holatlari + yuklash spinner
- **ARIA atributlari** — to'liq klaviatura navigatsiyasi
- **Silliq o'tish** — CSS `scroll-behavior: smooth`
- **Maxsus scrollbar** — oltin rangli

---

## 🌐 SEO

- Semantik HTML (header, main, section, article, footer)
- Meta teglar (description, keywords, OG tags) — `index.html`
- To'g'ri sarlavha ierarxiyasi (h1 → h2 → h3)
- `lang="uz"` atributi
- `aria-label`, `aria-current`, `aria-required`, `role` atributlari

---

## 📱 Responsive Nuqtalar

| Breakpoint | Qiymat |
|-----------|--------|
| Mobil | 320px+ |
| Tablet | 640px+ (sm) |
| Desktop kichik | 1024px+ (lg) |
| Desktop katta | 1280px+ (xl) |

---

*© 2025 Andijon Ilg'or Mahorat Maktabi. Barcha huquqlar himoyalangan.*
