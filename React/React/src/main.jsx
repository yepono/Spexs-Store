import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import Catalogo from './pages/Catalogo.jsx'
import DetalleJuego from './pages/DetalleJuego.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/catalogo" replace />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/juego/:id" element={<DetalleJuego />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)