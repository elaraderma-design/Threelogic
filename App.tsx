import React, { useState } from 'react';
import { 
  Compass, 
  HelpCircle, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Trophy, 
  Sparkles, 
  Search,
  Anchor,
  User,
  ShieldAlert,
  X,
  Check
} from 'lucide-react';

const DEFAULT_CASE_DATA = {
  caseInfo: {
    id: "case-robin-01",
    title: "APAKAH KURSI INI TERISI?",
    subtitle: "MISTERI GELADAK ONE PIECE",
    tagline: "Sepuluh tersangka. Sepuluh kursi. Baca petunjuk dengan cermat dan dudukkan para awak.",
    totalSeats: 10
  },
  seats: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
  characters: [
    {
      id: "kapten",
      name: "KAPTEN",
      role: "Kapten Kapal",
      shortBio: "Kapten Bajak Laut Topi Jerami. Pecinta daging, petualangan, dan kebebasan. Tidak pernah mundur saat melindungi teman-temannya.",
      profileText: "Aku adalah orang yang tegas tidak ada seorang pun yang berani membantahku. Kalo kataku F harus F jangan dibantah!.",
      statement: "Aku akan menjadi Raja Bajak Laut! Tidak peduli seberapa kuat lawanku atau seberapa besar rintangannya, aku akan terus maju. Teman-temanku adalah hartaku yang paling berharga, dan siapa pun yang menyakiti mereka harus berhadapan denganku. Selama masih bisa berdiri, aku tidak akan menyerah pada mimpiku.",
      image: "/assets/characters/Monkey D. Luffy.png.png",
      chibiImage: "/assets/characters/Monkey D. Luffy_Chibi.png.png",
      correctSeat: "F",
      avatarBg: "from-amber-900/60 to-slate-900",
      accentColor: "border-amber-500/50"
    },
    {
      id: "ninja",
      name: "NINJA",
      role: "Ninja",
      shortBio: "Ninja yang setia kepada kaptennya. Terus berlatih untuk menjadi pendekar pedang terkuat di dunia.",
      statement: "Aku tidak peduli seberapa kuat lawanku. Jika itu menghalangi jalan kaptenku, aku akan menebasnya. Janjiku untuk menjadi pendekar pedang nomor satu di dunia tidak akan pernah berubah.",
      profileText: "Aku selalu duduk di sebelah kapten agar aku bisa menyelesaikan tugasku untuk melindunginya, dan kapten selalu suka aku disana.",
      image: "/assets/characters/Roronoa-zoro.png",
      chibiImage: "/assets/characters/Roronoa-zoro_chibi.png",
      correctSeat: "E",
      avatarBg: "from-purple-900/60 to-slate-900",
      accentColor: "border-purple-500/50"
    },
    {
  id: "nami",
  name: "NAMI",
  role: "Navigator",
  shortBio: "Navigator jenius yang mampu membaca cuaca dan memetakan lautan dengan akurat. Sangat menyukai harta karun.",
  statement: "Lautan penuh bahaya, tetapi selama aku bisa membaca arahnya, aku akan membawa kru ini menuju impian mereka.",
  profileText: "Aku selalu datang lebih awal supaya dapat tempat yang tenang karena Aku suka membaca saat makan, jauhkan aku dari kapten dan pemain musik itu.",
  image: "/assets/characters/Nami.png",
  chibiImage: "/assets/characters/Nami_chibi.png",
  correctSeat: "A",
  avatarBg: "from-orange-900/60 to-slate-900",
  accentColor: "border-orange-500/50"
},
{
  id: "robin",
  name: "NICO ROBIN",
  role: "Pustakawan",
  shortBio: "Pustakawan cerdas yang mencari kebenaran sejarah dunia melalui Poneglyph.",
  statement: "Sejarah tidak boleh dilupakan. Selama aku masih hidup, aku akan terus mencari kebenaran yang tersembunyi.",
  profileText: "Aku adalah yang mengurus peta dan aku bekerja sama dengan seorang pustakawan yang mengurus buku di kapal ini, dan dia selalu duduk satu kursi sebelum aku ketika bekerja.",
  image: "/assets/characters/Nico Robin.png",
  chibiImage: "/assets/characters/Nico Robin_chibi.png",
  correctSeat: "B",
  avatarBg: "from-purple-900/60 to-slate-900",
  accentColor: "border-purple-500/50"
},
{
  id: "usopp",
  name: "USOPP",
  role: "Penembak Jitu",
  shortBio: "Penembak jitu kreatif dengan imajinasi tanpa batas. Bermimpi menjadi pejuang pemberani di lautan.",
  statement: "Aku mungkin takut, tapi keberanian bukan berarti tidak takut. Keberanian adalah tetap maju meskipun ketakutan itu ada.",
  profileText: "Aku adalah penembak jitu dan selalu suka duduk dipaling ujung  agar semua bisa terlihat jelas, aku tidak peduli ujung mana!.",
  image: "/assets/characters/Usopp.png",
  chibiImage: "/assets/characters/Usopp_Chibi.png",
  correctSeat: "I",
  avatarBg: "from-green-900/60 to-slate-900",
  accentColor: "border-green-500/50"
},
{
  id: "sanji",
  name: "SANJI",
  role: "Koki",
  shortBio: "Koki berbakat yang bertarung menggunakan tendangan. Memiliki impian menemukan All Blue.",
  statement: "Aku memasak untuk memberi harapan dan tenaga kepada orang lain.",
  profileText: "Aku koki dikapal ini Jangan tempatkan aku di kursi J , ada memori buruk disana yang membuat penyakit ku kambuh , jangan tempatkan aku disana!.",
  image: "/assets/characters/Sanji.png",
  chibiImage: "/assets/characters/Sanji_chibi.png",
  correctSeat: "C",
  avatarBg: "from-yellow-900/60 to-slate-900",
  accentColor: "border-yellow-500/50"
},
{
  id: "chopper",
  name: "TONY TONY CHOPPER",
  role: "Dokter",
  shortBio: "Dokter rusa kutub yang bercita-cita menyembuhkan segala penyakit di dunia.",
  statement: "Aku ingin menjadi dokter yang bisa menyelamatkan siapa saja.",
  profileText: "Aku adalah dokter dan koki punya penyakit yang bisa kambuh kapan saja, jadi aku selalu di sebelahnya agar bisa cepat menolongnya.",
  image: "/assets/characters/Tony Tony Chopper.png",
  chibiImage: "/assets/characters/Tony Tony Chopper_chibi.png",
  correctSeat: "D",
  avatarBg: "from-pink-900/60 to-slate-900",
  accentColor: "border-pink-500/50"
},
{
  id: "brook",
  name: "BROOK",
  role: "Musisi",
  shortBio: "Musisi kerangka hidup yang selalu membawa keceriaan melalui musiknya.",
  statement: "Musik mampu menghubungkan hati orang-orang.",
  profileText: "Aku sering memainkan musik ketika semua crew kapal makan. Dan aku sangat suka dengan angka kelipatan 4",
  image: "/assets/characters/Brook.png",
  chibiImage: "/assets/characters/Brook_chibi.png",
  correctSeat: "H",
  avatarBg: "from-cyan-900/60 to-slate-900",
  accentColor: "border-cyan-500/50"
},
{
  id: "jinbe",
  name: "JINBE",
  role: "Nahkoda",
  shortBio: "Kesatria manusia ikan yang bijaksana dan ahli mengendalikan kapal di lautan berbahaya.",
  statement: "Keberanian sejati lahir dari ketenangan hati.",
  profileText: "Aku adalah pengawal kapten yang loyal dan tegas Tugasku adalah mengemudikan kapal dan selalu duduk dibawah kapten.",
  image: "/assets/characters/Jinbe.png",
  chibiImage: "/assets/characters/Jinbe_chibi.png",
  correctSeat: "G",
  avatarBg: "from-teal-900/60 to-slate-900",
  accentColor: "border-teal-500/50"
}
  ]
};

const ThreeLogicLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 200 220" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="110" r="85" fill="#2d4a4c" stroke="#1d3032" strokeWidth="4" />
    <polygon points="75,175 77,180 82,180 78,183 79,188 75,185 71,188 72,183 68,180 73,180" fill="#e07a28" />
    <polygon points="100,180 102,186 108,186 103,190 105,196 100,192 95,196 97,190 92,186 98,186" fill="#e07a28" />
    <polygon points="125,175 127,180 132,180 128,183 129,188 125,185 121,188 122,183 118,180 123,180" fill="#e07a28" />
    <polygon points="100,10 175,150 25,150" fill="#a33327" stroke="#1f0a08" strokeWidth="4" strokeLinejoin="round" />
    <polygon points="100,65 145,145 55,145" fill="#e8e1d1" />
    <path d="M75 145 L70 135 L72 135 L68 125 L70 125 L66 115 L74 115 L70 125 L72 125 L68 135 L70 135 L65 145 Z" fill="#212b21" />
    <path d="M100 145 L93 125 L96 125 L90 105 L93 105 L87 85 L100 85 L113 85 L107 105 L110 105 L104 125 L107 125 L100 145 Z" fill="#1b241b" />
    <path d="M125 145 L120 135 L122 135 L118 125 L120 125 L116 115 L124 115 L120 125 L122 125 L118 135 L120 135 L115 145 Z" fill="#212b21" />
    <polygon points="82,145 100,118 118,145" fill="#111811" />
    <polygon points="94,145 100,132 106,145" fill="#000000" />
    <path d="M93 35 C90 28, 93 25, 95 28 C97 31, 95 38, 97 42 M107 35 C110 28, 107 25, 105 28 C103 31, 105 38, 103 42" stroke="#681f18" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <polygon points="12,135 188,135 178,162 22,162" fill="#a33327" stroke="#1f0a08" strokeWidth="3" strokeLinejoin="round" />
    <text x="100" y="153" textAnchor="middle" fill="#f08838" fontFamily="Impact, Arial Black, sans-serif" fontSize="17" fontWeight="bold" letterSpacing="1">
      — THREELOGIC —
    </text>
  </svg>
);

const AnimeAvatarFallback = ({ name, isChibi = false }) => {
  return (
    <div className={`w-full h-full bg-gradient-to-b from-slate-800 to-indigo-950 flex flex-col items-center justify-center p-2 relative overflow-hidden text-amber-200 border border-amber-500/30 ${isChibi ? 'rounded-lg' : 'rounded-xl'}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
      <User className={`${isChibi ? 'w-8 h-8' : 'w-16 h-16'} text-amber-400/80 mb-1 opacity-90`} />
      <span className={`font-serif font-bold text-center tracking-wider text-amber-300 uppercase ${isChibi ? 'text-[9px]' : 'text-xs'}`}>
        {name}
      </span>
      {isChibi && <span className="text-[7px] text-amber-500/70 uppercase">Chibi</span>}
    </div>
  );
};

export default function App() {
  const [caseData] = useState(DEFAULT_CASE_DATA);
  const [selectedCharId, setSelectedCharId] = useState(DEFAULT_CASE_DATA.characters[0].id);
  const [showCoverBanner, setShowCoverBanner] = useState(true);

  const [seatAssignments, setSeatAssignments] = useState({
    A: "musician",
    B: "scholar",
    C: "archaeologist",
    D: "shipwright"
  });

  const [activeRightTab, setActiveRightTab] = useState('profile');
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showShipsLog, setShowShipsLog] = useState(false);
  const [showSeatSelectorModal, setShowSeatSelectorModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [gameResult, setGameResult] = useState(null);
  const [readClues, setReadClues] = useState(new Set(['shipwright', 'musician', 'scholar']));

  const handleSelectCharacter = (charId) => {
    setSelectedCharId(charId);
    setReadClues(prev => new Set([...prev, charId]));
  };

  const selectedCharacter = caseData.characters.find(c => c.id === selectedCharId) || caseData.characters[0];

  const currentCharSeat = Object.keys(seatAssignments).find(
    seat => seatAssignments[seat] === selectedCharId
  );

  const assignCharacterToSeat = (charId, targetSeat) => {
    setSeatAssignments(prev => {
      const next = { ...prev };
      Object.keys(next).forEach(s => {
        if (next[s] === charId) {
          delete next[s];
        }
      });
      next[targetSeat] = charId;
      return next;
    });
    setShowSeatSelectorModal(false);
  };

  const unassignSeat = (seat) => {
    setSeatAssignments(prev => {
      const next = { ...prev };
      delete next[seat];
      return next;
    });
  };

  const handleResetDeck = () => {
    setSeatAssignments({});
  };

  const handleDragStart = (e, charId) => {
    e.dataTransfer.setData('text/plain', charId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDropOnSeat = (e, targetSeat) => {
    e.preventDefault();
    const charId = e.dataTransfer.getData('text/plain');
    if (charId) {
      assignCharacterToSeat(charId, targetSeat);
    }
  };

  const handleSubmitGM = () => {
    let correctCount = 0;
    const evaluation = [];

    caseData.characters.forEach((char) => {
      const assignedSeat = Object.keys(seatAssignments).find(s => seatAssignments[s] === char.id);
      const isCorrect = assignedSeat === char.correctSeat;
      if (isCorrect) correctCount++;

      evaluation.push({
        character: char,
        assignedSeat: assignedSeat || "Belum Duduk",
        correctSeat: char.correctSeat,
        isCorrect
      });
    });

    const isWin = correctCount === caseData.characters.length;
    const score = Math.round((correctCount / caseData.characters.length) * 100);

    setGameResult({
      isWin,
      score,
      correctCount,
      total: caseData.characters.length,
      evaluation
    });
    setShowResultModal(true);
  };

  return (
    <div className="min-h-screen bg-[#070814] text-amber-100 font-serif antialiased select-none pb-10 flex flex-col">
      
      {/* BRANDING HEADER THREELOGIC */}
      <div className="bg-[#05060e] border-b border-[#2d4a4c]/50 px-4 py-2.5 shadow-md relative z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ThreeLogicLogo className="w-10 h-11 drop-shadow-[0_0_10px_rgba(224,122,40,0.35)]" />
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-sm tracking-[0.25em] text-[#f08838] uppercase font-mono">
                  THREELOGIC
                </span>
                <span className="text-[9px] bg-[#a33327]/60 text-amber-100 px-2 py-0.5 rounded border border-[#a33327] uppercase font-mono tracking-wider">
                  STUDIO
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-sans tracking-wide">
                Interactive Mystery & Logic Game Series
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center space-x-4 text-xs font-mono text-slate-400">
            <span className="flex items-center space-x-1.5 bg-[#0a0d1a] px-2.5 py-1 rounded-md border border-[#2d4a4c]/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[11px] text-slate-300">GAME AKTIF</span>
            </span>
          </div>
        </div>
      </div>

      {/* HEADER BAR KASUS */}
      <header className="px-4 py-3 bg-[#0d0f26] border-b-2 border-[#8a6d2b] shadow-2xl relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-purple-900/40 border-2 border-[#d4af37] flex items-center justify-center text-[#e5c158] shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <Compass className="w-7 h-7 animate-spin-slow" />
            </div>
            <div>
              <div className="text-[10px] tracking-[0.25em] text-[#d4af37] uppercase font-semibold">
                {caseData.caseInfo.subtitle}
              </div>
              <h1 className="text-xl md:text-2xl font-bold tracking-wider text-amber-100 font-serif uppercase drop-shadow">
                {caseData.caseInfo.title}
              </h1>
              <p className="text-[11px] text-amber-300/70 italic font-sans">
                {caseData.caseInfo.tagline}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowCoverBanner(!showCoverBanner)}
              className="px-3 py-1.5 bg-[#171a42] hover:bg-[#222763] border border-[#d4af37]/60 rounded-xl text-xs font-mono text-[#e5c158] flex items-center space-x-1.5 shadow transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{showCoverBanner ? "SEMBUNYIKAN COVER" : "TAMPILKAN COVER"}</span>
            </button>

            {/* Status Petunjuk Dibaca */}
            <div className="flex items-center space-x-3 bg-[#080918]/80 px-4 py-2 rounded-xl border border-[#8a6d2b]/60 shadow-inner">
              <div className="text-right">
                <div className="text-[9px] font-mono tracking-widest text-[#d4af37] uppercase">PETUNJUK DIBACA</div>
                <div className="text-xs font-bold text-amber-200 font-mono">
                  {readClues.size} / {caseData.characters.length}
                </div>
              </div>
              
              <div className="flex items-center space-x-1">
                {caseData.characters.map((char) => {
                  const isRead = readClues.has(char.id);
                  return (
                    <div 
                      key={char.id}
                      className={`w-3 h-3 rotate-45 transition-all duration-300 border ${
                        isRead 
                          ? 'bg-[#e5c158] border-amber-300 shadow-[0_0_8px_rgba(229,193,88,0.8)]' 
                          : 'bg-slate-900/80 border-slate-700'
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </header>

      {}
      {showCoverBanner && (
        <section className="relative max-w-7xl w-full mx-auto px-4 pt-4">
          <div className="relative rounded-2xl border-4 border-[#8a6d2b] bg-gradient-to-r from-[#170c2e] via-[#24103f] to-[#0e0a24] overflow-hidden shadow-[0_0_35px_rgba(138,109,43,0.3)] p-6 md:p-10 text-amber-100 flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="absolute top-2 left-2 text-[#e5c158]/50 pointer-events-none">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="currentColor">
                <path d="M0 0h40v4H4v36H0V0zm8 8h24v2H10v22H8V8z"/>
              </svg>
            </div>
            <div className="absolute top-2 right-2 text-[#e5c158]/50 pointer-events-none transform rotate-90">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="currentColor">
                <path d="M0 0h40v4H4v36H0V0zm8 8h24v2H10v22H8V8z"/>
              </svg>
            </div>
            <div className="absolute bottom-2 left-2 text-[#e5c158]/50 pointer-events-none transform -rotate-90">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="currentColor">
                <path d="M0 0h40v4H4v36H0V0zm8 8h24v2H10v22H8V8z"/>
              </svg>
            </div>
            <div className="absolute bottom-2 right-2 text-[#e5c158]/50 pointer-events-none transform rotate-180">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="currentColor">
                <path d="M0 0h40v4H4v36H0V0zm8 8h24v2H10v22H8V8z"/>
              </svg>
            </div>

            <div className="absolute -top-16 -right-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-96 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex-1 space-y-4 z-10 text-center md:text-left">
              <div className="inline-flex items-center space-x-2 bg-amber-950/70 border border-[#e5c158]/50 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest text-[#e5c158]">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>MISTERI GELADAK ROBIN</span>
              </div>

              <div className="space-y-1">
                <h2 className="text-2xl md:text-4xl font-extrabold font-serif tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-[#f3d375] to-amber-300 drop-shadow-[0_2px_10px_rgba(229,193,88,0.3)] uppercase">
                  APAKAH KURSI INI TERISI?
                </h2>
                <p className="text-xs md:text-sm font-serif italic text-amber-200/80 max-w-lg">
                  "Sepuluh tersangka. Sepuluh kursi tahta. Amati kesaksian, telusuri alibi, dan atur posisi seluruh awak di atas geladak kapal malam ini."
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1 text-[10px] font-mono">
                <span className="bg-purple-950/80 border border-purple-500/40 text-purple-200 px-2.5 py-1 rounded shadow">
                  📚 LOGIA KUNO
                </span>
                <span className="bg-red-950/80 border border-red-500/40 text-red-200 px-2.5 py-1 rounded shadow">
                  📜 BERKAS BUAH IBLIS
                </span>
                <span className="bg-amber-950/80 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded shadow">
                  ⚓ CATATAN GRAND LINE
                </span>
                <span className="bg-indigo-950/80 border border-indigo-500/40 text-indigo-200 px-2.5 py-1 rounded shadow">
                  ⚔️ KEHENDAK D.
                </span>
              </div>
            </div>

            <div className="z-10 flex flex-col items-center justify-center p-4 bg-[#0c0e24]/80 border-2 border-[#8a6d2b] rounded-2xl shadow-xl min-w-[220px]">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <Compass className="w-20 h-20 text-[#e5c158] animate-spin-slow drop-shadow-[0_0_12px_rgba(229,193,88,0.5)]" />
                <div className="absolute inset-0 bg-[#e5c158]/10 rounded-full animate-ping opacity-25" />
              </div>
              <span className="mt-2 text-xs font-mono font-bold text-[#e5c158] tracking-widest uppercase">
                GELADAK KAPAL ROBIN
              </span>
              <span className="text-[10px] font-sans text-amber-200/60">
                10 Kursi • 10 Awak
              </span>
            </div>

          </div>
        </section>
      )}

      {}
      <section className="relative bg-gradient-to-b from-[#0b0c24] via-[#101235] to-[#0a0a1a] border-b-2 border-[#8a6d2b]/70 pt-6 pb-8 shadow-2xl overflow-hidden mt-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-4 space-y-1">
            <h2 className="text-sm font-mono tracking-[0.3em] text-[#d4af37] uppercase font-bold">
              KURSI TAHTA GELADAK KAPAL (A - J)
            </h2>
            <p className="text-xs text-amber-200/60 font-sans">
              Tarik kartu chibi atau klik tombol pindahkan untuk menempatkan tersangka pada kursi.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-2 md:gap-3">
            {caseData.seats.map((seat) => {
              const charId = seatAssignments[seat];
              const character = caseData.characters.find(c => c.id === charId);

              return (
                <div
                  key={seat}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDropOnSeat(e, seat)}
                  onClick={() => {
                    if (character) {
                      handleSelectCharacter(character.id);
                    } else if (selectedCharId) {
                      assignCharacterToSeat(selectedCharId, seat);
                    }
                  }}
                  className={`relative flex flex-col items-center justify-between rounded-2xl border-2 p-2 min-h-[140px] transition-all duration-300 cursor-pointer group ${
                    character
                      ? 'bg-gradient-to-b from-purple-950/80 via-[#1b1538] to-[#0d0f28] border-[#e5c158] shadow-[0_0_15px_rgba(229,193,88,0.25)]'
                      : 'bg-[#0a0b1d]/90 border-[#3a355c] hover:border-[#8a6d2b] hover:bg-[#121436]'
                  }`}
                >
                  <div className="absolute top-1 right-1 text-[10px] font-mono font-bold text-amber-400/60">
                    #{seat}
                  </div>

                  <div className="w-full h-20 rounded-xl overflow-hidden bg-slate-950/60 border border-amber-500/20 relative mt-3">
                    {character ? (
                      <>
                        <img
                          src={character.chibiImage}
                          alt={character.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="hidden w-full h-full">
                          <AnimeAvatarFallback name={character.name} isChibi={true} />
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-slate-600 space-y-1">
                        <User className="w-6 h-6 opacity-40 group-hover:opacity-70 transition-opacity" />
                        <span className="text-[8px] font-mono uppercase tracking-wider">KOSONG</span>
                      </div>
                    )}
                  </div>

                  <div className="w-full text-center mt-2">
                    <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#8a6d2b] text-slate-950 uppercase">
                      KURSI {seat}
                    </span>
                    <p className="text-[10px] font-bold text-amber-100 truncate mt-0.5">
                      {character ? character.name : '—'}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {}
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6 flex-1">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-[#8a6d2b]/40 pb-3">
          <div>
            <div className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase">PANEL INVESTIGASI</div>
            <h2 className="text-xl font-bold font-serif text-amber-100 uppercase">
              PROFIL & KESAKSIAN
            </h2>
            <p className="text-xs text-amber-200/60 font-sans">
              Pilih profil. Baca kesaksiannya. Amati petunjuk. Geser kartu chibi ke kursi tahta.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowShipsLog(true)}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-[#171a42] border border-[#8a6d2b]/60 rounded-lg text-xs font-mono text-amber-200 hover:bg-[#20255e] transition-colors"
            >
              <Anchor className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>LOG KAPAL ({Object.keys(seatAssignments).length})</span>
            </button>

            <button
              onClick={() => setShowHowToPlay(true)}
              className="flex items-center space-x-1 px-3 py-1.5 bg-[#171a42] border border-[#8a6d2b]/60 rounded-lg text-xs font-mono text-amber-200 hover:bg-[#20255e] transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>? CARA BERMAIN</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          
          {/* KOLOM 1: PILIH PROFIL (KIRI) */}
          <div className="lg:col-span-3 bg-[#0d0f28]/90 border-2 border-[#3d325c] rounded-2xl p-3 flex flex-col h-[520px] shadow-xl">
            <div className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase mb-2 text-center border-b border-[#3d325c] pb-1.5">
              PILIH PROFIL AWAK
            </div>

            <div className="flex-1 overflow-y-auto pr-1 space-y-2 custom-scrollbar">
              <div className="grid grid-cols-2 gap-2">
                {caseData.characters.map((char) => {
                  const isSelected = char.id === selectedCharId;
                  const assignedSeat = Object.keys(seatAssignments).find(s => seatAssignments[s] === char.id);
                  const isRead = readClues.has(char.id);

                  return (
                    <div
                      key={char.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, char.id)}
                      onClick={() => handleSelectCharacter(char.id)}
                      className={`relative rounded-xl border p-1.5 flex flex-col items-center justify-between cursor-pointer transition-all duration-200 select-none ${
                        isSelected
                          ? 'bg-amber-500/20 border-[#e5c158] ring-2 ring-[#e5c158]/50 shadow-[0_0_10px_rgba(229,193,88,0.3)]'
                          : 'bg-[#121438]/80 border-[#3d325c] hover:border-[#8a6d2b] hover:bg-[#1a1d4f]'
                      }`}
                    >
                      {isRead && (
                        <div className="absolute top-1 right-1 bg-emerald-600 text-white rounded-full p-0.5 z-10 shadow">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                      )}

                      <div className="w-full h-24 rounded-lg overflow-hidden bg-slate-950 mb-1">
                        <img
                          src={char.chibiImage}
                          alt={char.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="hidden w-full h-full">
                          <AnimeAvatarFallback name={char.name} isChibi={true} />
                        </div>
                      </div>

                      <div className="text-center w-full">
                        <div className="text-[10px] font-bold tracking-wider text-amber-100 truncate uppercase">
                          {char.name}
                        </div>
                        {assignedSeat ? (
                          <span className="text-[9px] font-mono text-[#e5c158] bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-500/40">
                            Kursi {assignedSeat}
                          </span>
                        ) : (
                          <span className="text-[9px] font-mono text-slate-500">Belum Duduk</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* KOLOM 2: FOTO & DETAIL KARAKTER (TENGAH) */}
          <div className="lg:col-span-5 bg-[#0d0f28]/90 border-2 border-[#8a6d2b]/80 rounded-2xl p-4 flex flex-col justify-between h-[520px] shadow-2xl relative overflow-hidden">
            
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-amber-950/20 pointer-events-none" />

            <div className="relative w-full h-72 rounded-xl overflow-hidden border-2 border-[#8a6d2b]/60 bg-slate-950 shadow-inner group">
              <img
                src={selectedCharacter.image}
                alt={selectedCharacter.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full">
                <AnimeAvatarFallback name={selectedCharacter.name} />
              </div>

              <div className="absolute bottom-2 left-2 bg-[#080918]/90 backdrop-blur border border-[#8a6d2b] px-3 py-1 rounded-lg">
                <span className="text-xs font-mono text-[#e5c158] tracking-wider uppercase font-bold">
                  {selectedCharacter.role}
                </span>
              </div>
            </div>

            <div className="my-2 border-y border-[#8a6d2b]/40 py-2 text-center space-y-1">
              <h3 className="text-lg font-bold text-amber-100 font-serif tracking-widest uppercase drop-shadow">
                {selectedCharacter.name}
              </h3>
              <p className="text-xs text-amber-200/80 font-sans italic max-w-md mx-auto line-clamp-2">
                "{selectedCharacter.shortBio}"
              </p>
            </div>

            <div className="pt-1">
              <button
                onClick={() => setShowSeatSelectorModal(true)}
                className="w-full py-3 px-4 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 hover:from-purple-800 hover:to-indigo-800 text-amber-100 rounded-xl font-mono font-bold text-xs uppercase tracking-widest border-2 border-[#e5c158] shadow-[0_0_15px_rgba(229,193,88,0.2)] transition-all flex flex-col items-center justify-center space-y-0.5 active:scale-[0.99]"
              >
                <div className="flex items-center space-x-2">
                  <Anchor className="w-4 h-4 text-[#e5c158]" />
                  <span>PINDAHKAN {selectedCharacter.name}</span>
                </div>
                <span className="text-[10px] text-amber-300/70 font-normal normal-case">
                  {currentCharSeat 
                    ? `Saat ini di Kursi ${currentCharSeat} — ketuk untuk pindahkan` 
                    : 'Belum ada kursi — ketuk untuk tempatkan di kursi'}
                </span>
              </button>
            </div>

          </div>

          {/* KOLOM 3: PERKAMEN KESAKSIAN & PROFIL (KANAN) */}
          <div className="lg:col-span-4 bg-[#fbf5e6] text-slate-900 border-4 border-[#8a6d2b] rounded-2xl h-[520px] flex flex-col shadow-2xl relative overflow-hidden font-serif">
            
            <div className="flex border-b-2 border-[#8a6d2b] bg-[#ede0c4]">
              <button
                onClick={() => setActiveRightTab('profile')}
                className={`flex-1 py-2.5 px-3 font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors ${
                  activeRightTab === 'profile'
                    ? 'bg-[#fbf5e6] text-[#6b1d1d] border-b-2 border-[#6b1d1d]'
                    : 'text-slate-700 hover:bg-[#e2d3b0]'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>PROFIL</span>
              </button>
              <button
                onClick={() => setActiveRightTab('statement')}
                className={`flex-1 py-2.5 px-3 font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors ${
                  activeRightTab === 'statement'
                    ? 'bg-[#fbf5e6] text-[#6b1d1d] border-b-2 border-[#6b1d1d]'
                    : 'text-slate-700 hover:bg-[#e2d3b0]'
                }`}
              >
                <Search className="w-3.5 h-3.5" />
                <span>KESAKSIAN</span>
              </button>
            </div>

            <div className="p-5 flex-1 overflow-y-auto custom-scrollbar flex flex-col justify-between">
              {activeRightTab === 'statement' ? (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 border-b border-amber-900/20 pb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#8a6d2b]" />
                    <h4 className="font-bold tracking-wider text-sm uppercase text-[#521717] font-mono">
                      KESAKSIAN {selectedCharacter.name}
                    </h4>
                  </div>

                  <blockquote className="italic text-sm text-slate-800 leading-relaxed pl-3 border-l-2 border-[#8a6d2b]/60 font-serif">
                    "{selectedCharacter.statement}"
                  </blockquote>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 border-b border-amber-900/20 pb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#8a6d2b]" />
                    <h4 className="font-bold tracking-wider text-sm uppercase text-[#521717] font-mono">
                      PROFIL {selectedCharacter.name}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-800 leading-relaxed font-sans">
                    {selectedCharacter.profileText}
                  </p>

                  <div className="pt-2 text-[11px] font-mono text-amber-900/80">
                    <strong>Peran Jabatan:</strong> {selectedCharacter.role}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-amber-900/20 text-[10px] font-mono text-amber-900/60 text-center">
                Arsip Geladak Robin • Dokumen Kasus #{selectedCharacter.id.toUpperCase()}
              </div>
            </div>

          </div>

        </div>

        {}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handleResetDeck}
            className="py-3 px-8 rounded-xl bg-[#121436] hover:bg-[#1a1d4f] text-amber-200 border-2 border-[#8a6d2b]/60 font-mono font-bold text-xs uppercase tracking-widest transition-colors shadow-lg flex items-center space-x-2"
          >
            <RotateCcw className="w-4 h-4 text-[#d4af37]" />
            <span>RESET GELADAK</span>
          </button>

          <button
            onClick={handleSubmitGM}
            className="py-3 px-10 rounded-xl bg-gradient-to-r from-[#8a6d2b] via-[#e5c158] to-[#8a6d2b] hover:from-[#a38237] hover:to-[#a38237] text-slate-950 font-mono font-extrabold text-xs uppercase tracking-widest border-2 border-amber-200 shadow-[0_0_20px_rgba(229,193,88,0.4)] transition-all transform active:scale-95 flex items-center space-x-2"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>PERIKSA JAWABAN / GM</span>
          </button>
        </div>

      </main>

      {/* MODAL SELEKSI KURSI */}
      {showSeatSelectorModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0d0f28] border-2 border-[#e5c158] rounded-2xl max-w-md w-full p-5 space-y-4 shadow-2xl relative">
            <button
              onClick={() => setShowSeatSelectorModal(false)}
              className="absolute top-3 right-3 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-1">
              <h3 className="text-base font-bold text-amber-100 font-serif tracking-wider uppercase">
                Pilih Kursi untuk {selectedCharacter.name}
              </h3>
              <p className="text-xs text-amber-200/70">
                Pilih tempat duduk Kursi A - J di geladak kapal:
              </p>
            </div>

            <div className="grid grid-cols-5 gap-2 pt-2">
              {caseData.seats.map((seat) => {
                const occupantId = seatAssignments[seat];
                const occupant = caseData.characters.find(c => c.id === occupantId);
                const isCurrent = occupantId === selectedCharId;

                return (
                  <button
                    key={seat}
                    onClick={() => assignCharacterToSeat(selectedCharId, seat)}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center transition-all ${
                      isCurrent
                        ? 'bg-amber-500/30 border-[#e5c158] text-[#e5c158]'
                        : occupant
                        ? 'bg-purple-950/60 border-purple-500/40 text-purple-200 hover:bg-purple-900'
                        : 'bg-[#151842] border-[#3d325c] text-amber-100 hover:border-[#8a6d2b] hover:bg-[#202561]'
                    }`}
                  >
                    <span className="font-mono font-bold text-lg">{seat}</span>
                    <span className="text-[9px] font-sans truncate max-w-full">
                      {occupant ? occupant.name : 'Kosong'}
                    </span>
                  </button>
                );
              })}
            </div>

            {currentCharSeat && (
              <button
                onClick={() => {
                  unassignSeat(currentCharSeat);
                  setShowSeatSelectorModal(false);
                }}
                className="w-full py-2 bg-red-950/80 hover:bg-red-900 border border-red-500/40 text-red-200 rounded-xl text-xs font-mono uppercase tracking-wider"
              >
                Lepaskan dari Kursi {currentCharSeat}
              </button>
            )}
          </div>
        </div>
      )}

      {/* MODAL LOG KAPAL */}
      {showShipsLog && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0d0f28] border-2 border-[#8a6d2b] rounded-2xl max-w-lg w-full p-5 space-y-4 shadow-2xl relative">
            <button
              onClick={() => setShowShipsLog(false)}
              className="absolute top-3 right-3 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2 border-b border-[#8a6d2b]/40 pb-2">
              <Anchor className="w-5 h-5 text-[#d4af37]" />
              <h3 className="text-base font-bold text-amber-100 uppercase tracking-wider">
                LOG KAPAL (STATUS DUDUK AWAK)
              </h3>
            </div>

            <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
              {caseData.seats.map((seat) => {
                const charId = seatAssignments[seat];
                const char = caseData.characters.find(c => c.id === charId);

                return (
                  <div
                    key={seat}
                    className="p-2.5 rounded-xl bg-[#121438] border border-[#3d325c] flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="w-7 h-7 rounded-lg bg-[#8a6d2b] text-slate-950 font-mono font-bold flex items-center justify-center">
                        {seat}
                      </span>
                      {char ? (
                        <div>
                          <div className="font-bold text-amber-100">{char.name}</div>
                          <div className="text-[10px] text-amber-300/70">{char.role}</div>
                        </div>
                      ) : (
                        <span className="text-slate-500 italic">Kursi Kosong</span>
                      )}
                    </div>

                    {char && (
                      <button
                        onClick={() => unassignSeat(seat)}
                        className="text-red-400 hover:text-red-300 text-[10px] font-mono underline"
                      >
                        Lepas
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* MODAL CARA BERMAIN */}
      {showHowToPlay && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0d0f28] border-2 border-[#8a6d2b] rounded-2xl max-w-md w-full p-5 space-y-4 shadow-2xl relative text-xs">
            <button
              onClick={() => setShowHowToPlay(false)}
              className="absolute top-3 right-3 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-base font-bold text-amber-100 font-serif tracking-wider uppercase border-b border-[#8a6d2b]/40 pb-2">
              PETUNJUK PERMAINAN
            </h3>

            <div className="space-y-3 text-amber-200/90 leading-relaxed">
              <p>
                1. <strong>Baca Kesaksian:</strong> Pilih profil setiap tersangka di panel kiri, lalu baca tab <em>KESAKSIAN</em> di panel kanan.
              </p>
              <p>
                2. <strong>Tempatkan Karakter:</strong> Geser (*Drag*) kartu chibi atau tekan tombol <em>PINDAHKAN [NAMA]</em> untuk menempatkan tersangka pada kursi A hingga J yang tepat.
              </p>
              <p>
                3. <strong>Periksa Jawaban:</strong> Setelah semua tersangka terpasang di posisi yang sesuai petunjuk alibi mereka, tekan tombol <strong>PERIKSA JAWABAN / GM</strong> untuk memeriksa akurasi analisis Anda.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* MODAL HASIL GM */}
      {showResultModal && gameResult && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0d0f28] border-2 border-[#e5c158] rounded-2xl max-w-2xl w-full p-6 space-y-5 shadow-2xl relative my-8">
            
            <div className="text-center space-y-2">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto border-2 ${
                gameResult.isWin 
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/50' 
                  : 'bg-amber-500/10 text-amber-400 border-amber-500/50'
              }`}>
                {gameResult.isWin ? (
                  <Trophy className="w-8 h-8" />
                ) : (
                  <ShieldAlert className="w-8 h-8" />
                )}
              </div>

              <h2 className="text-2xl font-bold text-amber-100 font-serif tracking-wide">
                {gameResult.isWin ? 'SUSUNAN KURSI SEMPURNA!' : 'ANALISIS KURANG TEPAT'}
              </h2>
              <p className="text-xs text-amber-200/70 max-w-md mx-auto">
                {gameResult.isWin
                  ? 'Selamat Kapten! Seluruh awak kapal telah menduduki posisi kursi yang sesuai petunjuk mereka.'
                  : 'Terdapat beberapa posisi kursi yang tidak sesuai dengan alibi kesaksian para tersangka.'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-[#121438] p-4 rounded-xl border border-[#3d325c] text-center">
              <div>
                <span className="text-[10px] font-mono text-amber-400/80 uppercase block">Akurasi Analisis</span>
                <span className="text-2xl font-bold text-[#e5c158] font-mono">{gameResult.score}%</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-amber-400/80 uppercase block">Tepat Duduk</span>
                <span className="text-2xl font-bold text-amber-100 font-mono">
                  {gameResult.correctCount} / {gameResult.total}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                Rincian Evaluasi Kursi:
              </div>
              <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                {gameResult.evaluation.map((item) => (
                  <div
                    key={item.character.id}
                    className={`p-2.5 rounded-xl border flex items-center justify-between text-xs ${
                      item.isCorrect
                        ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                        : 'bg-red-950/30 border-red-500/40 text-red-200'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-amber-100">{item.character.name}</span>
                      <span className="text-[10px] ml-2 opacity-80">
                        (Ditempatkan di: Kursi {item.assignedSeat})
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 font-mono text-[11px]">
                      {item.isCorrect ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-400" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center pt-2">
              <button
                onClick={() => setShowResultModal(false)}
                className="py-3 px-8 bg-gradient-to-r from-[#8a6d2b] to-[#e5c158] text-slate-950 rounded-xl font-mono font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Tutup & Perbaiki
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
