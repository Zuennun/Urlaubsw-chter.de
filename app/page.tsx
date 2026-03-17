'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => (prev < 94 ? prev + 1 : 94));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#020617] text-white relative overflow-hidden font-sans">
      
      {/* 1. DIE VERTIKALEN LICHTSTREIFEN (Exakt wie im Screenshot) */}
      <div className="absolute inset-0 z-0 flex justify-around opacity-20 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.4)]"></div>
        ))}
      </div>
      {/* Zusätzlicher Glow-Effekt oben */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* 2. NAVIGATION */}
      <nav className="relative z-50 max-w-7xl mx-auto px-10 py-8 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter flex items-center gap-2 italic">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50 not-italic">🛡️</div>
          TripGuard<span className="text-blue-500">.ai</span>
        </div>
        <div className="hidden lg:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          <a href="#" className="hover:text-white transition">Technology</a>
          <a href="#" className="hover:text-white transition">Pricing</a>
          <a href="#" className="hover:text-white transition">FAQ</a>
        </div>
        <div className="flex gap-6 items-center">
          <button className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Log In</button>
          <button className="bg-blue-600 px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-blue-500/30 hover:bg-blue-500 transition-all">
            Contact Us
          </button>
        </div>
      </nav>

      {/* 3. HERO CONTENT */}
      <section className="relative z-10 max-w-7xl mx-auto px-10 pt-20 pb-32 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-8">
          Revolutionizing Travel with AI
        </div>
        
        <h1 className="text-6xl md:text-[90px] font-bold tracking-tight leading-[0.85] mb-10">
          Save Time & Money <br /> 
          On Every <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent italic">Trip</span> ✈️
        </h1>
        
        <p className="max-w-xl mx-auto text-slate-400 text-sm md:text-base mb-12 leading-relaxed">
          TripGuard scans 200+ portals in real-time. If your hotel price drops after booking, our AI alerts you immediately to reclaim your savings.
        </p>

        <button className="bg-blue-600 px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-3 mx-auto shadow-2xl shadow-blue-500/40 hover:scale-105 transition-all">
          Start Price Tracking <span className="bg-white text-blue-600 w-5 h-5 rounded-full flex items-center justify-center">→</span>
        </button>

        {/* 4. DIE 3 SCHWEBENDEN KARTEN (Pixelgenau platziert) */}
        <div className="mt-28 flex flex-col lg:flex-row items-center justify-center gap-8 relative">
          
          {/* Linke Karte: Ersparnis (Weiß) */}
          <div className="w-full lg:w-64 bg-white rounded-[2.5rem] p-8 text-slate-900 text-left shadow-[0_30px_60px_rgba(0,0,0,0.3)] transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Savings Detected</p>
            <h4 className="text-3xl font-black mt-1">€240.00</h4>
            <div className="mt-8 flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold italic">T</div>
              <p className="text-[9px] font-bold text-slate-500 leading-tight uppercase tracking-tighter">Your AI Guard is active</p>
            </div>
          </div>

          {/* Mittlere Karte: Der Main Scan (Weiß & Groß) */}
          <div className="w-full lg:w-[460px] bg-white rounded-[3.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.4)] relative z-20 border-[6px] border-white">
             <div className="p-10 text-slate-900 text-left">
                <div className="flex justify-between items-center mb-6">
                   <span className="px-3 py-1 bg-slate-100 rounded-full text-[9px] font-bold text-slate-400 uppercase tracking-widest">Live Monitoring</span>
                </div>
                <h3 className="text-2xl font-black leading-tight mb-10">Scanning 200+ Portals <br/> In Real-Time</h3>
                
                <div className="flex items-center gap-6 mb-10">
                   {/* Fortschritts-Kreis */}
                   <div className="relative w-20 h-20">
                      <svg className="w-full h-full transform -rotate-90">
                         <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
                         <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={213} strokeDashoffset={213 - (213 * percent) / 100} className="text-blue-600 transition-all duration-150" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center font-black text-lg text-blue-600">{percent}%</div>
                   </div>
                   <p className="text-[10px] text-slate-500 font-medium leading-relaxed">
                     Price predicted to drop in <span className="text-blue-600 font-bold uppercase">3 Days</span>. <br/>
                     TripGuard is actively protecting your budget.
                   </p>
                </div>

                {/* Hotel-Bild Area */}
                <div className="aspect-[16/9] bg-slate-100 rounded-[2rem] overflow-hidden shadow-inner relative group">
                   <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
             </div>
          </div>

          {/* Rechte Karte: Glassmorphism (Transparent/Blau) */}
          <div className="w-full lg:w-72 bg-blue-500/10 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 text-left shadow-[0_30px_60px_rgba(0,0,0,0.2)] transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center gap-2 mb-4">
               <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
               <p className="text-[9px] font-bold text-blue-400 uppercase tracking-[0.2em]">Best Deal Found</p>
            </div>
            <p className="text-[9px] font-bold text-slate-500 uppercase mb-2">Last Update: Just now</p>
            <h4 className="text-2xl font-bold text-white leading-tight">Dubai Marina <br/> Only €129/nt</h4>
            <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-md">
               <p className="text-[9px] font-bold text-blue-200 italic leading-relaxed">
                 "28% savings predicted by TripGuard AI"
               </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
