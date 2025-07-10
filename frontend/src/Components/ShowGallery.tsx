import { useState, useEffect } from "react";
import { nil, pictures } from "./Nil";

export default function ShowGallery() {
  const [galleryVisible, setGalleryVisible] = useState(false);
  const [openPicture, setOpenPicture] = useState<string | null>(null);
  const [showProfilePicture, setShowProfilePicture] = useState(false);

  const toggleGallery = () => setGalleryVisible(!galleryVisible);

  const handleImageClick = (src: string) => {
    setOpenPicture(openPicture === src ? null : src);
  };

  const toggleProfilePicture = () => setShowProfilePicture(!showProfilePicture);

  // Küçük fade animasyonları için state'leri setTimeout ile kontrol ettim
  const [galleryRender, setGalleryRender] = useState(false);
  useEffect(() => {
    if (galleryVisible) {
      setGalleryRender(true);
    } else {
      const timeout = setTimeout(() => setGalleryRender(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [galleryVisible]);

  const [profileRender, setProfileRender] = useState(false);
  useEffect(() => {
    if (showProfilePicture) {
      setProfileRender(true);
    } else {
      const timeout = setTimeout(() => setProfileRender(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [showProfilePicture]);

  const [openPicRender, setOpenPicRender] = useState(false);
  useEffect(() => {
    if (openPicture) {
      setOpenPicRender(true);
    } else {
      const timeout = setTimeout(() => setOpenPicRender(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [openPicture]);

  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-br from-pink-50 to-white relative min-h-screen select-none">

      <div className="flex flex-col items-center mb-10">
        <img
          src={nil.mainPicture}
          alt={nil.name}
          onClick={toggleProfilePicture}
          title="Click to zoom in"
          className="cursor-pointer w-44 h-44 md:w-64 md:h-64 rounded-full shadow-2xl object-cover border-4 border-pink-300 transition-transform duration-300 hover:scale-110"
        />
        <h2 className="text-3xl md:text-5xl font-extrabold text-pink-600 mt-5 flex items-center gap-3">
          {nil.name} <span className="animate-bounce">{nil.bestEmoji}</span>
        </h2>
        <p className="text-center text-sm md:text-base text-pink-500 mt-3 max-w-md italic tracking-wide">
          "Kedi var diyo ama adını <span className="font-bold text-pink-600 underline decoration-pink-400">Kraken</span> koymuş... Kardeşim o kedi değil, o <span className="text-pink-700 font-extrabold">Kraker</span>!"
        </p>
      </div>

      {profileRender && (
        <div
          className={`fixed inset-0 bg-black/70 flex items-center justify-center z-50 cursor-zoom-out transition-opacity duration-300 ${
            showProfilePicture ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleProfilePicture}
          aria-label="Close profile picture"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if(e.key === "Escape") toggleProfilePicture(); }}
        >
          <img
            src={nil.mainPicture}
            alt={`${nil.name} (Zoomed)`}
            className={`max-w-[90vw] max-h-[90vh] rounded-3xl shadow-2xl border-4 border-pink-400 transform transition-transform duration-300 ${
              showProfilePicture ? "scale-100" : "scale-90"
            }`}
            draggable={false}
          />
        </div>
      )}

      <button
        onClick={toggleGallery}
        className="mb-8 px-7 py-3 bg-pink-500 text-white rounded-full font-semibold shadow-lg hover:bg-pink-600 transition-colors duration-300 select-none"
      >
        {galleryVisible ? "Hide Gallery" : "Show Gallery"}
      </button>

      {galleryRender && (
        <div
          className={`w-full max-w-7xl transition-opacity duration-300 ${
            galleryVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
            {pictures.map((picture, index) => (
              <img
                key={index}
                src={picture.src}
                alt={`Gallery image ${index + 1}`}
                className="cursor-pointer w-64 h-64 object-cover rounded-2xl shadow-lg transform hover:scale-110 hover:brightness-110 transition duration-300 select-none"
                onClick={() => handleImageClick(picture.src)}
                loading="lazy"
                draggable={false}
                title="Click to enlarge"
              />
            ))}
          </div>
        </div>
      )}

      {openPicRender && openPicture && (
        <div
          className={`fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-zoom-out transition-opacity duration-300 ${
            openPicture ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setOpenPicture(null)}
          aria-label="Close enlarged picture"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if(e.key === "Escape") setOpenPicture(null); }}
        >
          <img
            src={openPicture}
            alt="Opened"
            className={`max-w-[90vw] max-h-[90vh] rounded-3xl shadow-2xl border-4 border-pink-400 transform transition-transform duration-300 ${
              openPicture ? "scale-100" : "scale-90"
            }`}
            draggable={false}
          />
        </div>
      )}
    </div>
  );
}
