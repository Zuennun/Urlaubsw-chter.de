'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => (prev < 94 ? prev + 1 : 94));
    }, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#dfe3f2] text-white overflow-x-hidden">
      <div className="relative mx-auto max-w-[1400px] rounded-[36px] overflow-hidden bg-[#d9deee]">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 left-0 right-0 text-[180px] md:text-[240px] font-black tracking-tight text-white/70 leading-none text-center">
            URLAUB
          </div>
        </div>

        <section className="relative z-10 mx-auto mt-24 mb-0 w-[92%] max-w-[1180px] rounded-t-[28px] overflow-hidden bg-[#02075d] shadow-[0_30px_80px_rgba(7,14,58,0.28)]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_0,rgba(255,255,255,0.02)_1px,transparent_1px,transparent_100%)] bg-[size:42px_100%]" />
            <div className="absolute inset-y-0 left-[10%] w-[120px] bg-blue-400/10 blur-3xl" />
            <div className="absolute inset-y-0 left-[48%] w-[140px] bg-blue-400/10 blur-3xl" />
            <div className="absolute inset-y-0 right-[8%] w-[140px] bg-cyan-300/10 blur-3xl" />
          </div>

          <nav className="relative z-20 flex items-center justify-between px-8 md:px-14 py-8">
            <div className="flex items-center gap-3 font-bold text-xl">
              <div className="h-9 w-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                🛡️
              </div>
              <span>Urlaubswächter</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-[12px] text-white/80">
              <a href="#">Home</a>
              <a href="#">Vorteile</a>
              <a href="#">So funktioniert&apos;s</a>
              <a href="#">FAQ</a>
            </div>

            <div className="flex items-center gap-4">
              <button className="hidden md:block text-[12px] font-semibold text-white/80">
                Log In
              </button>
              <button className="rounded-full bg-[#6f7cff] px-6 py-3 text-[12px] font-semibold text-white shadow-lg shadow-blue-900/30">
                Preisalarm starten
              </button>
            </div>
          </nav>

          <div className="relative z-20 px-8 md:px-14 pt-8 pb-16 text-center">
            <div className="inline-flex rounded-full bg-white/10 px-5 py-2 text-[12px] text-white/85 border border-white/10">
              Intelligente Preisüberwachung für Hotels
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-black tracking-tight leading-[0.95]">
              Spare Geld
              <br />
              bei deinem Hotel
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm md:text-base text-white/70 leading-relaxed">
              Du hast bereits gebucht? Wir überwachen danach weiter den Preis deines Hotels.
              Wird es günstiger, bekommst du sofort einen Preisalarm und verpasst keine Ersparnis mehr.
            </p>

            <button className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#6f7cff] px-7 py-4 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(89,103,255,0.35)]">
              Preis jetzt überwachen
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#5667ff]">
                →
              </span>
            </button>

            <div className="relative mt-16 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-6">
              {/* Left card */}
              <div className="w-full max-w-[250px] rounded-[28px] bg-[#f7f8fc] p-6 text-left text-[#19213d] shadow-2xl lg:-rotate-2">
                <p className="text-[11px] font-semibold text-slate-400">Deine mögliche Ersparnis</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-4xl font-black text-[#5667ff]">240€</span>
                  <span className="rounded-full bg-[#5667ff] px-2 py-1 text-[10px] font-bold text-white">
                    möglich
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-400">Letztes Update: gerade eben</p>

                <div className="mt-5 rounded-[18px] bg-white p-4 shadow-sm border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5667ff] text-white">
                      ✨
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500">
                      Preissturz wird in Kürze erwartet
                    </div>
                  </div>
                </div>
              </div>

              {/* Center card */}
              <div className="relative z-10 w-full max-w-[360px] rounded-[30px] bg-[#f7f8fc] p-6 text-[#19213d] shadow-[0_30px_60px_rgba(0,0,0,0.18)]">
                <div className="inline-flex rounded-full bg-white px-4 py-2 text-[11px] font-semibold text-slate-500 shadow-sm">
                  Urlaubswächter Live-Scan
                </div>

                <h3 className="mt-5 text-left text-[34px] leading-[1.05] font-semibold">
                  Wir prüfen
                  <span className="text-[#5667ff]"> Hotelpreise</span>
                  <br />
                  in Echtzeit
                </h3>

                <div className="mt-6 flex items-center gap-5">
                  <div className="relative h-20 w-20 shrink-0">
                    <svg className="h-20 w-20 -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="34"
                        stroke="#dde2f1"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="34"
                        stroke="#5667ff"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={214}
                        strokeDashoffset={214 - (214 * percent) / 100}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-lg font-black text-[#5667ff]">
                      {percent}%
                    </div>
                  </div>

                  <p className="text-left text-[13px] leading-relaxed text-slate-500">
                    Wir vergleichen Booking, Hotel-Webseiten und weitere Anbieter.
                    <br />
                    <span className="font-semibold text-[#19213d]">Preisänderung erkannt? Wir melden uns sofort.</span>
                  </p>
                </div>

                <div className="mt-6 overflow-hidden rounded-[24px]">
                  <img
                    src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80"
                    alt="Hotelzimmer"
                    className="h-[180px] w-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-4 right-[-34px] hidden md:flex items-center gap-3 rounded-full bg-white px-3 py-2 shadow-xl">
                  <div className="flex -space-x-2">
                    <div className="h-7 w-7 rounded-full bg-slate-300 border-2 border-white" />
                    <div className="h-7 w-7 rounded-full bg-slate-400 border-2 border-white" />
                    <div className="h-7 w-7 rounded-full bg-slate-500 border-2 border-white" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-600">
                    4.200+ Preisalarme aktiv
                  </span>
                </div>
              </div>

              {/* Right card */}
              <div className="w-full max-w-[250px] rounded-[28px] border border-white/15 bg-white/10 p-6 text-left text-white shadow-2xl backdrop-blur-xl lg:rotate-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-[11px] text-white/85">
                  <span className="h-2 w-2 rounded-full bg-white" />
                  Best Deal gefunden
                </div>

                <p className="mt-6 text-[11px] text-white/60">Aktuell günstiger auf Booking</p>
                <h4 className="mt-2 text-4xl leading-[1.05] font-black">
                  Santorini
                  <br />
                  <span className="text-white">1.299€</span>
                </h4>

                <p className="mt-4 text-sm text-white/75">
                  200€ günstiger als deine ursprüngliche Buchung
                </p>

                <div className="mt-8 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#5667ff]">
                  →
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto w-[92%] max-w-[1180px] rounded-b-[28px] bg-[#f4f5fb] px-8 md:px-14 py-16 text-[#1d2550]">
          <div className="text-center">
            <div className="inline-flex rounded-full bg-[#e5e8f7] px-4 py-2 text-[11px] font-semibold text-[#5667ff]">
              KI-Funktionen für smarteres Buchen
            </div>

            <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.02]">
              KI-gestützte Funktionen für
              <br />
              deinen nächsten Urlaub
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm md:text-base text-slate-500 leading-relaxed">
              Wir kombinieren Preisüberwachung, Anbieter-Vergleich und automatische Benachrichtigungen,
              damit du nach der Buchung keine Ersparnis mehr verpasst.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              {
                title: 'Preisüberwachung in Echtzeit',
                text: 'Wir beobachten laufend Preisänderungen für dein Hotel.',
                active: true,
              },
              {
                title: 'Anbieter-Vergleich',
                text: 'Booking, Hotel-Webseiten und weitere Quellen im Blick.',
                active: false,
              },
              {
                title: 'Sofortiger Preisalarm',
                text: 'Sinkt der Preis, bekommst du direkt eine Benachrichtigung.',
                active: false,
              },
              {
                title: 'Sichere Datenverarbeitung',
                text: 'Deine Daten werden nur für die Preisüberwachung genutzt.',
                active: false,
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`rounded-[26px] p-7 ${
                  item.active
                    ? 'bg-[#1d23d8] text-white shadow-[0_20px_50px_rgba(29,35,216,0.28)]'
                    : 'bg-white text-[#1d2550]'
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    item.active ? 'bg-white/15' : 'bg-[#eef1fb]'
                  }`}
                >
                  ✦
                </div>

                <h3 className="mt-6 text-lg font-bold leading-snug">{item.title}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${item.active ? 'text-white/75' : 'text-slate-500'}`}>
                  {item.text}
                </p>

                <div className={`mt-8 text-sm font-semibold ${item.active ? 'text-white' : 'text-[#5667ff]'}`}>
                  Mehr erfahren →
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}