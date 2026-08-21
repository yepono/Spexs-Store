import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ abierto, onCerrar }) {
  return (
    <>
      {/* Overlay oscuro */}
      <div
        className={`sidebar-overlay ${abierto ? "visible" : ""}`}
        onClick={onCerrar}
      ></div>

      {/* Sidebar vertical */}
      <aside className={`sidebar ${abierto ? "abierto" : ""}`}>
        <div className="sidebar-header">
          <h2>GameStore</h2>
          <button className="sidebar-close" onClick={onCerrar}>✖</button>
        </div>

        <nav className="sidebar-nav">
          <button className="sidebar-item">Todos los juegos</button>
          <button className="sidebar-item">Ofertas</button>
          <button className="sidebar-item">Cuenta</button>
          <Link to="/registro" className="sidebar-item registro-link">
            🧾 Registro
          </Link>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
