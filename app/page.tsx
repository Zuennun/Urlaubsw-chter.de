'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 94 ? prev + 1 : 94));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#e9edf7] text-white overflow-x-hidden">
      <div className="relative mx-auto max-w-[1450px] rounded-[36px] overflow-hidden bg-[#dfe5f2]">
        <section className="relative z-10 mx-auto mt-20 w-[92%] max-w-[1180px] rounded-[30px] overflow-hidden bg-[#04134a] shadow-[0_30px_80px_rgba(0,0,0,0.25)]">

          <nav className="flex items-center justify-between px-8 md:px-14 py-8">
            <div className="flex items-center gap-3 font-bold text-xl">
              🛡️ Tripguard
            </div>

            <div className="hidden md:flex items-center gap-8 text-[12px] text-white/80">
              <a href="#">Home</a>
              <a href="#">Features</a>
              <a href="#">How It Works</a>
              <a href="#">FAQ</a>
            </div>

            <button className="rounded-full bg-[#28d7f7] px-6 py-3 text-[12px] font-semibold text-[#04134a]">
              Start Tracking
            </button>
          </nav>

          <div className="px-8 md:px-14 pt-8 pb-16 text-center">
            <div className="inline-flex rounded-full bg-white/10 px-5 py-2 text-[12px] border border-white/10">
              Smart hotel price tracking after booking
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-[0.95]">
              Save money on your hotel
              <br />
              even after you book
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm md:text-base text-white/70">
              Tripguard keeps tracking your hotel price after booking.
              If the same stay becomes cheaper, you get alerted instantly.
            </p>

            <button className="mt-8 rounded-full bg-[#ff9f1c] px-7 py-4 text-sm font-semibold text-white">
              Start Price Tracking
            </button>

            <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-8">

              <div className="w-full max-w-[250px] rounded-[28px] bg-white p-6 text-left text-black shadow-2xl">
                <p className="text-xs text-gray-400">Your Potential Savings</p>
                <div className="mt-2 text-4xl font-bold text-[#ff9f1c]">€240</div>
                <p className="text-xs mt-2 text-gray-400">Price drop likely soon</p>
              </div>

              <div className="w-full max-w-[320px] rounded-[28px] bg-white p-6 text-black shadow-2xl">
                <p className="text-xs text-gray-400">Tripguard Scan</p>

                <div className="flex items-center gap-4 mt-4">
                  <div className="relative h-16 w-16">
                    <svg className="h-16 w-16 -rotate-90">
                      <circle cx="32" cy="32" r="26" stroke="#eee" strokeWidth="6" fill="none"/>
                      <circle
                        cx="32"
                        cy="32"
                        r="26"
                        stroke="#28d7f7"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray={163}
                        strokeDashoffset={163 - (163 * progress) / 100}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                      {progress}%
                    </div>
                  </div>

                  <p className="text-xs text-gray-500">
                    Scanning Booking & hotel sites in real-time
                  </p>
                </div>
              </div>

              <div className="w-full max-w-[250px] rounded-[28px] bg-white/10 p-6 text-white backdrop-blur">
                <p className="text-xs text-white/60">Best Deal Found</p>
                <div className="mt-2 text-3xl font-bold">€1,299</div>
                <p className="text-sm mt-2 text-white/70">
                  €200 cheaper than your booking
                </p>
              </div>

            </div>
          </div>

        </section>
      </div>
    </main>
  );
}