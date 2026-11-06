import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Catalogo from './pages/Catalogo.jsx'
import DetalleJuego from './pages/DetalleJuego.jsx'
import Recibo from './pages/Recibo.jsx'
import Biblioteca from './pages/Biblioteca.jsx'
import InfoPage from './pages/InfoPage.jsx'

import { AuthProvider } from './context/AuthContext.jsx'
import { NotificacionProvider } from './context/NotificacionContext.jsx'
import { CarritoProvider } from './context/CarritoContext.jsx'

function App() {
  return (
    <AuthProvider>
      <NotificacionProvider>
        <CarritoProvider>
          <BrowserRouter>
            <Routes>
              {/* Redirección raíz */}
              <Route path="/" element={<Navigate to="/catalogo" replace />} />

              {/* Catálogo con modal anidado de detalle */}
              <Route path="/catalogo" element={<Catalogo />}>
                <Route path="juego/:id" element={<DetalleJuego />} />
              </Route>

              {/* Ruta dinámica para páginas de información (/info/prensa, etc.) */}
              <Route path="/info/:slug" element={<InfoPage />} />

              {/* Secciones del usuario */}
              <Route path="/recibo" element={<Recibo />} />
              <Route path="/biblioteca" element={<Biblioteca />} />

              {/* Captura de rutas no existentes */}
              <Route path="*" element={<Navigate to="/catalogo" replace />} />
            </Routes>
          </BrowserRouter>
        </CarritoProvider>
      </NotificacionProvider>
    </AuthProvider>
  )
}

export default App