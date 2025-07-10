export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-pink-600 mb-4">404</h1>
        <p className="text-xl text-pink-500 mb-6">Sayfa bulunamadı!</p>
        <p className="text-gray-600 mb-8">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
        <a href="/" className="text-pink-500 hover:underline">Ana sayfaya dön</a>
      </div>
    </div>
  );
}