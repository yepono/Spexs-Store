import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import Catalogo from './pages/Catalogo.jsx'
import DetalleJuego from './pages/DetalleJuego.jsx'
import Recibo from './pages/Recibo.jsx'
import Biblioteca from './pages/Biblioteca.jsx'
import InfoPage from './pages/InfoPage.jsx' // 1. Importación agregada

import { AuthProvider } from './context/AuthContext.jsx'
import { NotificacionProvider } from './context/NotificacionContext.jsx'
import { CarritoProvider } from './context/CarritoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <NotificacionProvider>
        <CarritoProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/catalogo" replace />} />
              
              <Route path="/catalogo" element={<Catalogo />}>
                <Route path="juego/:id" element={<DetalleJuego />} />
              </Route>

              {/* 2. Ruta agregada para solucionar el error /info/prensa */}
              <Route path="/info/:slug" element={<InfoPage />} />

              <Route path="/recibo" element={<Recibo />} />
              <Route path="/biblioteca" element={<Biblioteca />} />

              {/* Redirección comodín por si escriben una ruta inexistente */}
              <Route path="*" element={<Navigate to="/catalogo" replace />} />
            </Routes>
          </BrowserRouter>
        </CarritoProvider>
      </NotificacionProvider>
    </AuthProvider>
  </StrictMode>
)