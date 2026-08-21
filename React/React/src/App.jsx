import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Catalogo from "./pages/Catalogo";
import Registro from "./pages/Registro";

function App() {
  const [sidebarAbierto, setSidebarAbierto] = useState(false);

  return (
    <>
      {/* Botón de hamburguesa */}
      <button
        className={`hamburguesa-btn ${sidebarAbierto ? "abierto" : ""}`}
        onClick={() => setSidebarAbierto(!sidebarAbierto)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Sidebar controlado por estado */}
      <Sidebar
        abierto={sidebarAbierto}
        onCerrar={() => setSidebarAbierto(false)}
      />

      {/* Contenido principal */}
      <main className="app-container">
        <Routes>
          <Route path="/" element={<Catalogo />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
