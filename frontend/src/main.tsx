import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFoundPage from './Pages/404Page.tsx'

createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
   <Routes>
    <Route path="/" element={<App />} />
    <Route path="*" element={<NotFoundPage />} />
   </Routes>
  </BrowserRouter>
)
