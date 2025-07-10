export default function Header() {
  return (
    <header className="w-full min-h-[60vh]  flex items-center justify-center relative overflow-hidden">
      
      <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-pink-400 opacity-30 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-pink-300 opacity-20 blur-2xl animate-pulse animation-delay-1000" />

      <div className="relative text-center px-8 py-12 rounded-3xl shadow-2xl bg-white/70 backdrop-blur-md border border-pink-300 max-w-3xl mx-4 z-10">
        <h1 className="text-6xl md:text-7xl font-extrabold text-pink-700 flex items-center justify-center gap-4 select-none">
          <span className="drop-shadow-lg">Who is Nil?</span>
          <span
             title="Goofy Face"
            role="img" 
            aria-label="goofy-face" 
            className="animate-bounce text-6xl md:text-7xl"
            style={{ textShadow: '2px 2px 8px #f472b6' }}
          >
            😝
          </span>
        </h1>

        <p className="mt-8 text-xl md:text-2xl text-pink-600 font-semibold leading-relaxed max-w-xl mx-auto select-text tracking-wide">
          Nil kim mi? Hmm... <span className="underline decoration-pink-400 decoration-2">karamel macchiato</span> gibi tatlı, ama yaz sıcağında klima açmadan içilen <span className="italic text-pink-500">Türk kahvesi</span> gibi de etkileyici.
        </p>

        <p className="mt-6 text-sm md:text-base text-pink-400 italic select-text tracking-wide">
          "Bence bu kız ruh hastası... Inan bana..." – <span className="font-bold text-pink-600">Mr. Toprak</span>
        </p>

        <div className="mt-10 w-24 h-1 bg-pink-400 rounded-full mx-auto animate-pulse" />
      </div>
    </header>
  );
}
