'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [percent, setPercent] = useState(0);

  // Simulation des Live-Scans (Der Kreis in der Mitte)
  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => (prev < 94 ? prev + 1 : 94));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#020617] text-white relative overflow-hidden font-sans">
      
      {/* 1. DIE HINTERGRUND-STREIFEN (Exakt wie AirLume) */}
      <div className="absolute inset-0 z-0 flex justify-around opacity-20 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.4)]"></div>
        ))}
      </div>

      {/* 2. NAVIGATION */}
      <nav className="relative z-50 max-w-7xl mx-auto px-10 py-8 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50 text-base">🛡️</div>
          Urlaubswächter.ai
        </div>
        <div className="hidden lg:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
          <a href="#" className="hover:text-white transition">Features</a>
          <a href="#" className="hover:text-white transition">How it works</a>
          <a href="#" className="hover:text-white transition">FAQ</a>
        </div>
        <div className="flex gap-6 items-center">
          <button className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Log In</button>
          <button className="bg-blue-600 px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-blue-500/30 hover:bg-blue-500 transition-all">Contact Us</button>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-10 pt-16 pb-32 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-8">
          Fly Smarter With Urlaubswächter.ai
        </div>
        
        <h1 className="text-6xl md:text-[85px] font-bold tracking-tight leading-[0.9] mb-8">
          Save Time & Money <br /> 
          On Every <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Trip</span> ✈️
        </h1>
        
        <p className="max-w-xl mx-auto text-slate-400 text-sm md:text-base mb-12 leading-relaxed">
          Entdecke die günstigsten Preise, erhalte KI-gestützte Empfehlungen und buche stressfrei mit unserer automatisierten Preis-Überwachung.
        </p>

        <button className="bg-blue-600 px-10 py-4 rounded-full text-sm font-bold flex items-center gap-3 mx-auto shadow-2xl shadow-blue-500/40 hover:scale-105 transition-all">
          Wächter jetzt scharfschalten <span className="bg-white text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs">→</span>
        </button>

        {/* 4. DIE SCHWEBENDEN KARTEN (Das Herzstück des AirLume-Designs) */}
        <div className="mt-24 flex flex-col lg:flex-row items-center justify-center gap-8 relative">
          
          {/* Linke Karte (Ersparnis/Points) */}
          <div className="w-full lg:w-64 bg-white rounded-[2.5rem] p-8 text-slate-900 text-left shadow-2xl transform lg:-rotate-2 transition-transform hover:rotate-0 duration-500">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Deine Ersparnis</p>
            <h4 className="text-3xl font-black mt-1">1.240€ <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-1 rounded-md align-middle ml-2 font-black tracking-widest">BEREIT</span></h4>
            <div className="mt-6 flex items-center gap-3 text-[10px] font-bold text-slate-500 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-base">✨</div>
              Nächster Preissturz erwartet
            </div>
          </div>

          {/* Mittlere Karte (Live-Scan Interface) */}
          <div className="w-full lg:w-[450px] bg-white rounded-[3.5rem] overflow-hidden shadow-2xl relative z-20 border-[8px] border-white">
             <div className="p-10 text-slate-900">
                <div className="flex justify-between items-start mb-6">
                   <div className="px-3 py-1 bg-slate-100 rounded-full text-[9px] font-bold text-slate-400 uppercase tracking-widest">Live Monitoring</div>
                </div>
                <h3 className="text-2xl font-black leading-tight text-left mb-8">Scanne 200+ <br/> Portale in Real-Time</h3>
                
                <div className="flex items-center gap-6 mb-10">
                   <div className="relative w-20 h-20">
                      <svg className="w-full h-full transform -rotate-90">
                         <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
                         <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={226} strokeDashoffset={226 - (226 * percent) / 100} className="text-blue-600 transition-all duration-100" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center font-black text-xl text-blue-600">{percent}%</div>
                   </div>
                   <p className="text-[11px] text-slate-500 text-left leading-relaxed">Der Preis für dein Hotel fällt voraussichtlich in <span className="text-blue-600 font-bold">2 Tagen</span>. <br/> Wir halten die Stellung.</p>
                </div>

                <div className="aspect-[16/10] bg-slate-100 rounded-[2rem] overflow-hidden relative group">
                   <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
             </div>
          </div>

          {/* Rechte Karte (Best Deal / Glassmorphism) */}
          <div className="w-full lg:w-72 bg-blue-600/10 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 text-left shadow-2xl transform lg:rotate-2 transition-transform hover:rotate-0 duration-500">
            <div className="text-[10px] font-bold text-blue-400 uppercase mb-4 flex items-center gap-2 tracking-widest">
               <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span> Best Deal Found
            </div>
            <p className="text-[10px] font-bold text-slate-500 uppercase">Last Update: Gerade eben</p>
            <h4 className="text-2xl font-black mt-2 mb-8 leading-tight">Dubai Marina <br/> Nur 149€</h4>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-md">
               <p className="text-[10px] font-bold text-blue-200 leading-relaxed italic">"28% gespart durch unsere KI-Vorhersage"</p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. BENTO GRID (Feature Section wie im Bild unten) */}
      <section className="bg-white text-slate-900 py-32 px-10 relative z-10">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
               <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">AI Features Section</div>
               <h2 className="text-4xl md:text-5xl font-black tracking-tighter">KI-gestützte Funktionen für <br/>deinen nächsten Urlaub</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               {[
                 { title: "Real-Time Scan", icon: "📊", active: true },
                 { title: "Smart Route", icon: "🗺️", active: false },
                 { title: "Loyalty Tracking", icon: "💎", active: false },
                 { title: "Dynamic Alerts", icon: "🔔", active: false }
               ].map((item, i) => (
                 <div key={i} className={`p-10 rounded-[3rem] ${item.active ? 'bg-[#0a1128] text-white shadow-2xl shadow-blue-900/40' : 'bg-slate-50 text-slate-900'} transition-all hover:-translate-y-2`}>
                    <div className={`w-14 h-14 rounded-2xl ${item.active ? 'bg-blue-600' : 'bg-white shadow-sm'} flex items-center justify-center text-2xl mb-8`}>
                       {item.icon}
                    </div>
                    <h4 className="font-black text-lg mb-4 leading-tight">{item.title}</h4>
                    <p className="text-xs opacity-60 leading-relaxed mb-8 font-medium">Wir wissen genau, wann du buchen musst, um den niedrigsten Preis zu erhalten.</p>
                    <div className="text-[11px] font-black uppercase tracking-widest">Learn more →</div>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </main>
  );
}
