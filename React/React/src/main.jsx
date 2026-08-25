import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import Catalogo from './pages/Catalogo.jsx'
import DetalleJuego from './pages/DetalleJuego.jsx'
<<<<<<< Updated upstream
=======
import Recibo from './pages/Recibo.jsx'
import Biblioteca from './pages/Biblioteca.jsx'
>>>>>>> Stashed changes

import { AuthProvider } from './context/AuthContext.jsx'
import { NotificacionProvider } from './context/NotificacionContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< Updated upstream
    <NotificacionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/catalogo" replace />} />
          <Route path="/catalogo" element={<Catalogo />} >
            <Route path="juego/:id" element={<DetalleJuego />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NotificacionProvider>
=======
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
>>>>>>> Stashed changes
  </StrictMode>,
)