import { nil } from "./Nil";

export default function Footer() {
  return (
    <footer className="w-full bg-pink-100 py-8 mt-20 border-t-4 border-pink-400 select-none">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="text-pink-600 font-bold text-xl flex items-center gap-3">
          <span className="animate-pulse">{nil.bestEmoji}</span>
          <span>Made with <span className="text-red-500 animate-ping">T😏</span> and bir tutam kahve ☕</span>
        </div>

        <div className="text-pink-500 italic text-center md:text-left max-w-md">
          <p>
            O Ker düşünüyor ki, 'Kedinin Adı Kraken.' <span className="font-bold text-pink-700">"Kraker’i unutma!"</span> Gerçek ismi bu.  
          </p>
        </div>

        <div className="flex items-center gap-4 text-pink-600">
          <button
            onClick={() => alert('Toprak cok buyuk adam aga! 😎')}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg transition-colors duration-300"
          >
            😏
          </button>
          <a
            href="https://github.com/TPashaxrd/whois-nil" target="_blank" rel="noopener noreferrer"
            className="hover:text-pink-700 transition-colors duration-300"
            title="GitHub'a dal"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.76-1.604-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013.005-.404c1.02.004 2.045.138 3.005.404 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.625-5.475 5.92.43.37.815 1.102.815 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.21.694.825.575C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
