import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import Catalogo from './pages/Catalogo.jsx'
import DetalleJuego from './pages/DetalleJuego.jsx'
import Recibo from './pages/Recibo.jsx'
import Biblioteca from './pages/Biblioteca.jsx'

import { AuthProvider } from './context/AuthContext.jsx'
import { NotificacionProvider } from './context/NotificacionContext.jsx'

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
              <Route path="/recibo" element={<Recibo />} />
              <Route path="/biblioteca" element={<Biblioteca />} />
            </Routes>
          </BrowserRouter>
        </CarritoProvider>
      </NotificacionProvider>
    </AuthProvider>
  </StrictMode>
)