export const NAV_LINKS = ['Home', 'About', 'Programs', 'Teachers', 'News', 'Contact'];

export const STATS = [
  { value: '164', suffix: '', label: "Davlat Diplomi", sublabel: 'mamlakatda tan olinadi', icon: '🌍' },
  { value: '94',  suffix: '%', label: "Bandlik darajasi", sublabel: 'bitiruvchilar orasida', icon: '💼' },
  { value: '45',  suffix: '+', label: "Hamkor kompaniyalar", sublabel: 'amaliyot bazasi', icon: '🏢' },
  { value: '1',   suffix: '', label: "Prezident kolleji", sublabel: "viloyatda yagona", icon: '🏛️' },
];

export const PROGRAMS = [
  {
    id: 1, category: 'main', emoji: '💻', title: "Dasturlash", titleEn: "Programming",
    duration: "3 yil", tags: ['Python', 'JavaScript', 'React', 'AI/ML'], color: '#4ECDC4',
    description: "Zamonaviy dasturlash tillari, sun'iy intellekt va full-stack web ishlanmasi bo'yicha chuqur bilim oling. Real kompaniyalarda loyihalar ustida ishlaysiz.",
    outcomes: ["Full-stack developer", "AI muhandis", "Mobile dasturchi"],
  },
  {
    id: 2, category: 'main', emoji: '🎨', title: "Grafik Dizayn", titleEn: "Graphic Design",
    duration: "2 yil", tags: ['Figma', 'UI/UX', 'Branding', 'Motion'], color: '#FF6B9D',
    description: "Raqamli dunyo uchun vizual aloqa san'atini o'rganing. Brend identifikatsiyasidan motion grafik va UI/UX dizayniga qadar.",
    outcomes: ["UI/UX dizayner", "Brand mutaxassisi", "Motion designer"],
  },
  {
    id: 3, category: 'main', emoji: '🖥️', title: "Kompyuter Muhandisligi", titleEn: "Computer Engineering",
    duration: "3 yil", tags: ['Hardware', 'Networks', 'IoT', 'Embedded'], color: '#FFE66D',
    description: "Kompyuter tizimlarini qurishni o'rganing: apparat arxitekturasi, tarmoq muhandisligi va o'rnatilgan tizimlar.",
    outcomes: ["Tarmoq muhandisi", "IoT mutaxassisi", "Tizim arxitektori"],
  },
  {
    id: 4, category: 'additional', emoji: '✏️', title: "Dizayn", titleEn: "Design",
    duration: "2 yil", tags: ['Interior', 'Product', 'Visual'], color: '#A29BFE',
    description: "Ichki va mahsulot dizaynining asoslarini o'rganing. Ijodiy loyihalash va vizual kommunikatsiya.",
    outcomes: ["Interior dizayner", "Mahsulot dizayner"],
  },
  {
    id: 5, category: 'additional', emoji: '🌿', title: "Bog'dorchilik", titleEn: "Gardening",
    duration: "2 yil", tags: ['Landshaft', 'Ekologiya', 'Dizayn'], color: '#55EFC4',
    description: "Zamonaviy landshaft dizayni va barqavor bog'dorchilik texnikalarini o'rganing.",
    outcomes: ["Landshaft dizayner", "Bog'bon mutaxassisi"],
  },
  {
    id: 6, category: 'additional', emoji: '🍳', title: "Oshpazlik San'ati", titleEn: "Culinary Arts",
    duration: "2 yil", tags: ['Pazandachilik', 'Konditerlik', 'Xalqaro oshxona'], color: '#FD79A8',
    description: "Professional oshpazlik va zamonaviy gastronomiyani o'rganing. Xalqaro oshxona madaniyati bilan tanishing.",
    outcomes: ["Professional oshpaz", "Restoran menejeri"],
  },
];

export const TEACHERS = [
  { id: 1, name: "Alisher Toshmatov",  role: "Dasturlash bo'limi rahbari",  exp: "12 yil", courses: "Python · React · AI",     initials: "AT", color: "#4ECDC4" },
  { id: 2, name: "Dilnoza Yusupova",   role: "Grafik Dizayn o'qituvchisi",  exp: "9 yil",  courses: "Figma · UI/UX · Brand",   initials: "DY", color: "#FF6B9D" },
  { id: 3, name: "Bobur Karimov",      role: "Kompyuter Muhandisligi",       exp: "11 yil", courses: "Networks · IoT · HW",     initials: "BK", color: "#FFE66D" },
  { id: 4, name: "Sarvinoz Ergasheva", role: "Nemis tili va almashinuv",     exp: "10 yil", courses: "Nemis B2/C1 · Madaniyat", initials: "SE", color: "#A29BFE" },
  { id: 5, name: "Jasur Nazarov",      role: "UX/UI mutaxassisi",            exp: "7 yil",  courses: "Research · Webflow",      initials: "JN", color: "#55EFC4" },
  { id: 6, name: "Malika Rahimova",    role: "Oshpazlik san'ati",            exp: "8 yil",  courses: "Xalqaro oshxona",         initials: "MR", color: "#FD79A8" },
  { id: 7, name: "Timur Xoliqov",      role: "Koreys tili va almashinuv",    exp: "6 yil",  courses: "Korean B2 · TOPIK",       initials: "TX", color: "#74B9FF" },
  { id: 8, name: "Nodira Abdullayeva", role: "Grafik dizayn",                exp: "8 yil",  courses: "Illustrator · Motion",    initials: "NA", color: "#FD9644" },
];

export const NEWS = [
  { id: 1, date: "15 Mart 2025",   tag: "Almashinuv",   emoji: "🇩🇪", title: "15 nafar talabamiz Germaniyaga amaliyotga ketdi",           short: "Eng yaxshi dasturlash talabalari Germaniyaning yetakchi IT kompaniyalarida 3 oylik amaliyot o'taydi.", body: "Bu yil 15 nafar talabamiz Germaniyaning Frankfurt va Myunxen shaharlaridagi yetakchi texnologiya kompaniyalarida 3 oylik haq to'lanadigan amaliyot o'tash imkoniyatiga ega bo'ldi. Bu kollejimiz va Germaniya texnologiya institutlari o'rtasidagi hamkorlikning yorqin natijasi.\n\nTalabalar real loyihalarda ishlaydi, Germaniya mutaxassislari bilan hamkorlik qiladi va zamonaviy ishlab chiqarish muhitida tajriba orttiradi. Amaliyot davomida ular oylik maosh oladi va turar joy bilan ta'minlanadi." },
  { id: 2, date: "28 Fevral 2025", tag: "Yutuq",         emoji: "🏆", title: "AIKMT milliy mukofotini qo'lga kiritdi",                     short: "Dual ta'lim tizimini joriy etishdagi muvaffaqiyat uchun milliy miqyosdagi mukofot.", body: "Andijon Ilg'or Mahorat Maktabi 2025-yilgi milliy mukofotiga sazovor bo'ldi. Oliy ta'lim vazirligi tomonidan berilgan bu mukofot kollejimizning dual ta'lim tizimini amalga oshirishdagi yuqori ko'rsatkichlari uchun berildi.\n\nMukofot topshirish marosimida vazirlik vakili kollejimizning 94% bandlik ko'rsatkichini alohida ta'kidladi." },
  { id: 3, date: "10 Yanvar 2025", tag: "Hamkorlik",     emoji: "🇰🇷", title: "Seul Texnologiya Instituti bilan yangi memorandum imzolandi", short: "Koreys almashinuv dasturiga 20 nafar qo'shimcha o'rin qo'shildi.", body: "Kollejimiz Seul Texnologiya Instituti bilan yangi hamkorlik memorandumini imzoladi. Ushbu bitim mavjud koreys hamkorligimizni kengaytiradi va har o'quv yilida 20 nafar qo'shimcha talaba uchun almashinuv o'rinlarini ochib beradi." },
  { id: 4, date: "5 Dekabr 2024",  tag: "Bitiruvchilar", emoji: "🎓", title: "2024-yil bitiruvchilarining 94% ish bilan ta'minlandi",        short: "Rekord ko'rsatkich — bitiruvchilar 3 oy ichida ishga joylashdi.", body: "2024-yilgi bitiruvchilarimiz tarixiy rekord o'rnatdi: bitiruvchilarning 94 foizi diplom olganidan 3 oy ichida rasmiy ish joyini topdi. Bu ko'rsatkich O'zbekiston texnika kollejlari o'rtasida eng yuqori natija sifatida qayd etildi." },
  { id: 5, date: "20 Noyabr 2024", tag: "Tadbir",        emoji: "⚡", title: "Yillik Hackathon'ga 500+ ishtirokchi to'plandi",               short: "48 soatlik musobaqada O'zbekiston bo'ylab 500 nafar talaba qatnashdi.", body: "Kollejimizning yillik texnologiyalar hackathoni bu yil yangi rekord o'rnatdi: O'zbekistonning 30+ shahridan 500 nafar ishtirokchi. 48 soatlik intensiv musobaqada jamoalar qishloq xo'jaligi, sog'liqni saqlash va fuqarolik texnologiyalari sohasidagi muammolarni hal qildi." },
  { id: 6, date: "1 Oktyabr 2024", tag: "Infratuzilma",  emoji: "🤖", title: "Yangi AI & Robototexnika laboratoriyasi ochildi",              short: "GPU klasterlari va robotik qurilmalar bilan jihozlangan zamonaviy laboratoriya.", body: "Kollejimizda yangi AI va Robototexnika laboratoriyasi tantanali ochildi. 500 mln so'mlik investitsiya bilan jihozlangan bu laboratoriya yuqori unumdor GPU hisoblash klasterlari, sanoat robototexnikasi va maker space bilan ta'minlangan." },
];

export const INTERNATIONAL = [
  { country: "Germaniya", flag: "🇩🇪", color: "#FFD700", desc: "Germaniyaning yetakchi IT va muhandislik kompaniyalarida amaliyot.", perks: ["Haq to'lanadigan IT amaliyoti", "Nemis tili B2 tayyorgarlik", "3–6 oylik dastur", "Turar-joy yordam"], stat: "Yiliga 30+ talaba" },
  { country: "Koreya",    flag: "🇰🇷", color: "#CD5C5C", desc: "Koreyaning Samsung, LG va Hyundai ekotizimida tajriba oling.",     perks: ["K-Tech sanoat amaliyoti",  "TOPIK koreys tili imtihoni",   "Oylik stipendiya",     "Madaniy immersi dasturi"], stat: "Yiliga 20+ talaba" },
];

export const DUAL_SCHEDULE = [
  { day: "Dush", type: "work",    icon: "🏢", label: "Kompaniya" },
  { day: "Sesh", type: "work",    icon: "🏢", label: "Kompaniya" },
  { day: "Chor", type: "work",    icon: "🏢", label: "Kompaniya" },
  { day: "Pay",  type: "work",    icon: "🏢", label: "Kompaniya" },
  { day: "Juma", type: "college", icon: "🎓", label: "Kollej"    },
  { day: "Shan", type: "college", icon: "🎓", label: "Kollej"    },
];
