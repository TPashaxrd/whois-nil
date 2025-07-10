import { useRef } from "react";

export default function PlaySong() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function handlePlay() {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }

  return (
    <>
      <button
        onClick={handlePlay}
        className="fixed right bottom-24 bg-pink-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-300 z-50"
      >
        Play Song
      </button>
      <audio
        ref={audioRef}
        src="http://localhost:5173/src/song.mp3"
        loop
        style={{ display: "none" }}
      />
    </>
  );
}
