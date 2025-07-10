import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PlaySong from "./Components/PlaySong";
import ShowGallery from "./Components/ShowGallery";

export default function App() {
  return (
    <>
    <div className="bg-gradient-to-tr from-pink-200 via-white to-pink-100">
     <PlaySong />
     <Header />
     <ShowGallery />
     <Footer />
     </div>
    <audio src="http://localhost:5173/src/song.mp3" autoPlay loop />
    </>
  )
}