export default function Home() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white overflow-hidden">
      <div className="relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="h-full w-full bg-[linear-gradient(to_right,transparent_0%,rgba(59,130,246,0.15)_50%,transparent_100%)] bg-[length:120px_100%]" />
        </div>

        <nav className="relative z-10 max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
          <div className="flex items-center gap-3 font-bold text-xl">
            <div className="w-9 h-9 rounded-xl bg-blue-500 flex items-center justify-center">
              🛡️
            </div>
            Urlaubswächter
          </div>

          <button className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold hover:bg-blue-500 transition">
            Jetzt starten
          </button>
        </nav>

        <section className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-300 mb-6">
              Preisüberwachung mit KI
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Spare Geld
              <br />
              bei deiner
              <br />
              Hotelbuchung.
            </h1>

            <p className="text-slate-300 text-lg max-w-xl mb-8 leading-relaxed">
              Du hast schon gebucht? Wir überwachen deinen Preis weiter.
              Wenn dein Hotel günstiger wird, bekommst du sofort Bescheid.
            </p>

            <div className="bg-white text-slate-900 rounded-[28px] p-4 md:p-5 shadow-2xl max-w-2xl">
              <form className="grid md:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="Hotelname"
                  className="rounded-2xl bg-slate-100 px-4 py-4 outline-none"
                />
                <input
                  type="number"
                  placeholder="Gezahlter Preis"
                  className="rounded-2xl bg-slate-100 px-4 py-4 outline-none"
                />
                <button
                  type="button"
                  className="rounded-2xl bg-blue-600 text-white font-semibold px-4 py-4 hover:bg-blue-500 transition"
                >
                  Wächter aktivieren
                </button>
              </form>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute w-80 h-80 bg-blue-500/20 blur-3xl rounded-full" />
            <div className="relative w-[320px] h-[640px] rounded-[42px] bg-[#111827] border-[10px] border-[#111827] shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute top-20 left-4 right-4 rounded-[24px] bg-white/95 backdrop-blur p-4 shadow-xl">
                <div className="text-green-600 text-xs font-bold uppercase mb-1">
                  Preisalarm
                </div>
                <div className="text-slate-900 text-2xl font-bold">
                  Spare jetzt 200€
                </div>
                <div className="mt-3 rounded-xl bg-blue-600 text-white text-center py-3 text-sm font-semibold">
                  Günstiger umbuchen
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <div className="text-sm text-white/80">Dein Hotel</div>
                <div className="text-2xl font-bold">Santorini Palace</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
