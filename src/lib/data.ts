export const festival = {
  name: "DritaFest",
  fullName: "Festivali Ndërkombëtar i Filmit — DritaFest",
  edition: "Edicioni i 12-të",
  dates: "15–20 Tetor 2026",
  city: "Prishtinë, Kosovë",
  tagline: "Aty ku dritat e ekranit takojnë dritat e qytetit.",
  description:
    "DritaFest është festivali vjetor i filmit që sjell në një vend regjizorë, aktorë dhe dashamirës të kinemasë nga e gjithë bota. Për gjashtë ditë, qyteti shndërrohet në një skenë të gjallë kinemaje: premiera, biseda me krijues, punëtori dhe netë të hapura projeksionesh.",
  email: "info@dritafest.example",
  phone: "+383 44 000 000",
  address: "Rr. e Kinemasë 7, 10000 Prishtinë",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
};

export type Screening = {
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  venue: string;
};

export type Film = {
  slug: string;
  title: string;
  originalTitle?: string;
  country: string;
  year: number;
  director: string;
  duration: number; // minutes
  genre: string;
  language: string;
  subtitles?: string;
  category: "Konkurrimi Kryesor" | "Panorama" | "Të Rinjtë" | "Dokumentar" | "Film Hapjeje" | "Film Mbylljeje";
  synopsis: string;
  screenings: Screening[];
  gradient: string; // for poster placeholder
};

export const films: Film[] = [
  {
    slug: "netet-e-gjata",
    title: "Netët e Gjata",
    originalTitle: "The Long Nights",
    country: "Kosovë / Shqipëri",
    year: 2026,
    director: "Arta Krasniqi",
    duration: 104,
    genre: "Dramë",
    language: "Shqip",
    subtitles: "Anglisht",
    category: "Film Hapjeje",
    synopsis:
      "Një familje në Prizren përballet me kthimin e papritur të djalit të madh pas dhjetë vitesh mungesë. Një dramë e ngrohtë dhe e ashpër njëkohësisht mbi faljen dhe kujtesën.",
    screenings: [{ date: "2026-10-15", time: "20:00", venue: "Kinema Lumbardhi" }],
    gradient: "from-rose-500 via-red-600 to-neutral-900",
  },
  {
    slug: "deti-nen-dhe",
    title: "Deti Nën Dhé",
    originalTitle: "Sea Underground",
    country: "Itali",
    year: 2025,
    director: "Marco Ferrante",
    duration: 96,
    genre: "Dramë / Fantazi",
    language: "Italisht",
    subtitles: "Shqip, Anglisht",
    category: "Konkurrimi Kryesor",
    synopsis:
      "Në një fshat bregdetar që po fundoset ngadalë, një peshkatar i moshuar beson se deti flet me të natën. Një fabul poetike mbi klimën, humbjen dhe shpresën.",
    screenings: [
      { date: "2026-10-16", time: "18:30", venue: "Kinema Armata" },
      { date: "2026-10-19", time: "16:00", venue: "Kino Jusuf Gërvalla" },
    ],
    gradient: "from-sky-500 via-blue-700 to-neutral-900",
  },
  {
    slug: "kufijte-e-fundit",
    title: "Kufijtë e Fundit",
    originalTitle: "Last Borders",
    country: "Gjermani / Kosovë",
    year: 2026,
    director: "Lena Hoffmann",
    duration: 112,
    genre: "Thriller",
    language: "Gjermanisht, Shqip",
    subtitles: "Anglisht",
    category: "Konkurrimi Kryesor",
    synopsis:
      "Një gazetare hetimore ndjek një rrjet kontrabande përgjatë kufirit ballkanik, duke zbuluar të vërteta që e vënë veten në rrezik.",
    screenings: [
      { date: "2026-10-17", time: "20:30", venue: "Kinema Lumbardhi" },
      { date: "2026-10-18", time: "14:00", venue: "Kinema Armata" },
    ],
    gradient: "from-amber-500 via-orange-700 to-neutral-900",
  },
  {
    slug: "vajza-nga-dritarja",
    title: "Vajza nga Dritarja",
    originalTitle: "The Girl at the Window",
    country: "Francë",
    year: 2025,
    director: "Camille Dubois",
    duration: 89,
    genre: "Dramë",
    language: "Frëngjisht",
    subtitles: "Shqip, Anglisht",
    category: "Panorama",
    synopsis:
      "Një adoleshente e mbyllur në apartamentin e saj gjatë një vere të nxehtë pariziene fillon të vëzhgojë jetët e fqinjëve dhe zbulon botën përmes dritares.",
    screenings: [{ date: "2026-10-16", time: "22:00", venue: "Kino Jusuf Gërvalla" }],
    gradient: "from-fuchsia-500 via-purple-700 to-neutral-900",
  },
  {
    slug: "trajektore",
    title: "Trajektore",
    originalTitle: "Trajectory",
    country: "Kosovë",
    year: 2026,
    director: "Blerim Hasani",
    duration: 78,
    genre: "Dokumentar",
    language: "Shqip",
    subtitles: "Anglisht",
    category: "Dokumentar",
    synopsis:
      "Portret intim i tre atletëve të rinj kosovarë që ëndërrojnë Olimpiadën, të xhiruar përgjatë katër viteve stërvitjeje dhe sakrifice.",
    screenings: [{ date: "2026-10-18", time: "18:00", venue: "Kinema Armata" }],
    gradient: "from-emerald-500 via-teal-700 to-neutral-900",
  },
  {
    slug: "vera-e-fundit-e-fëmijërisë",
    title: "Vera e Fundit e Fëmijërisë",
    originalTitle: "Last Summer of Childhood",
    country: "Kosovë / Maqedoni e Veriut",
    year: 2026,
    director: "Fjolla Berisha",
    duration: 92,
    genre: "Dramë / Koming-of-age",
    language: "Shqip",
    subtitles: "Anglisht",
    category: "Të Rinjtë",
    synopsis:
      "Tre shokë kalojnë verën e fundit para se rrugët e tyre të ndahen përgjithmonë, mes lojërave në lumë dhe bisedave për të ardhmen.",
    screenings: [
      { date: "2026-10-17", time: "17:00", venue: "Kino Jusuf Gërvalla" },
      { date: "2026-10-20", time: "12:00", venue: "Kinema Lumbardhi" },
    ],
    gradient: "from-lime-400 via-green-600 to-neutral-900",
  },
  {
    slug: "hijet-e-mullirit",
    title: "Hijet e Mullirit",
    originalTitle: "Shadows of the Mill",
    country: "Spanjë",
    year: 2025,
    director: "Iñaki Ortiz",
    duration: 101,
    genre: "Mister / Dramë",
    language: "Spanjisht",
    subtitles: "Shqip, Anglisht",
    category: "Panorama",
    synopsis:
      "Kthimi i një gruaje në fshatin ku u rrit nxjerr në sipërfaqe një sekret familjar të varrosur pranë mullirit të vjetër.",
    screenings: [{ date: "2026-10-19", time: "20:00", venue: "Kinema Armata" }],
    gradient: "from-yellow-500 via-amber-700 to-neutral-900",
  },
  {
    slug: "buzeqeshja-e-fundit",
    title: "Buzëqeshja e Fundit",
    originalTitle: "The Last Smile",
    country: "Kosovë",
    year: 2026,
    director: "Driton Mustafa",
    duration: 118,
    genre: "Dramë",
    language: "Shqip",
    subtitles: "Anglisht",
    category: "Film Mbylljeje",
    synopsis:
      "Film mbylljeje i festivalit: historia e një komediani të vjetër që përgatit shfaqjen e tij të fundit, ndërsa bën bilancin e një jete të përkushtuar skenës.",
    screenings: [{ date: "2026-10-20", time: "20:00", venue: "Kinema Lumbardhi" }],
    gradient: "from-red-500 via-rose-800 to-neutral-900",
  },
];

export type Guest = {
  name: string;
  role: string;
  bio: string;
  gradient: string;
};

export const guests: Guest[] = [
  {
    name: "Arta Krasniqi",
    role: "Regjisore, Kryetare e Jurisë",
    bio: "Regjisore e vlerësuar me disa çmime ndërkombëtare për filmat e saj mbi identitetin dhe kujtesën kolektive.",
    gradient: "from-rose-400 to-red-700",
  },
  {
    name: "Marco Ferrante",
    role: "Regjisor, Itali",
    bio: "I njohur për stilin e tij poetik vizual, pjesë e zgjedhur e konkurrimit kryesor këtë vit.",
    gradient: "from-sky-400 to-blue-700",
  },
  {
    name: "Elira Zeqiri",
    role: "Producente, Anëtare e Jurisë",
    bio: "Producente me përvojë dyzet-vjeçare në filmin evropian, mbështetëse e talenteve të reja rajonale.",
    gradient: "from-amber-400 to-orange-700",
  },
  {
    name: "Jonas Weber",
    role: "Kritik Filmi, Anëtar i Jurisë",
    bio: "Shkruan për revista ndërkombëtare kinemaje dhe ka qenë juri në më shumë se 20 festivale.",
    gradient: "from-emerald-400 to-teal-700",
  },
];

export type Venue = {
  name: string;
  address: string;
  note: string;
};

export const venues: Venue[] = [
  {
    name: "Kinema Lumbardhi",
    address: "Sheshi Kryesor, Prizren",
    note: "Kinema historike e hapur, vendi i filmit të hapjes dhe mbylljes.",
  },
  {
    name: "Kinema Armata",
    address: "Rr. Nëna Terezë, Prishtinë",
    note: "Sallë kryesore për konkurrimin ndërkombëtar dhe dokumentarët.",
  },
  {
    name: "Kino Jusuf Gërvalla",
    address: "Rr. UÇK, Pejë",
    note: "Fokusuar te programi Panorama dhe filmat e të rinjve.",
  },
];

export const ticketInfo = {
  single: "3€",
  day: "8€",
  full: "30€",
  note: "Biletat për shfaqjet e hapjes dhe mbylljes shiten veçmas dhe janë të limituara. Studentët përfitojnë 50% zbritje me karnet valid.",
};

export function programByDate() {
  const map = new Map<string, { film: Film; screening: Screening }[]>();
  for (const film of films) {
    for (const screening of film.screenings) {
      const list = map.get(screening.date) ?? [];
      list.push({ film, screening });
      map.set(screening.date, list);
    }
  }
  for (const list of map.values()) {
    list.sort((a, b) => a.screening.time.localeCompare(b.screening.time));
  }
  return [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
}
