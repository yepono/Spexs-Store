import './Sidebar.css';
import CategoriasMenu from '../components/CategoriasMenu';

function Sidebar({ abierto, onCerrar, categoriaActiva, onSeleccionar }) {
  return (
    <>
      {/* Fondo oscuro al abrir el menú (clic para cerrar) */}
      <div 
        className={`sidebar-overlay ${abierto ? 'visible' : ''}`}
        onClick={onCerrar}
      />

      <aside className={`sidebar ${abierto ? 'abierto' : ''}`}>
        <div className="sidebar-header">
          <h2> GameStore</h2>
          <button className="sidebar-close" onClick={onCerrar} aria-label="Cerrar menú">
            ✕
          </button>
        </div>

        {/* REEMPLAZO DE LA LISTA VIEJA POR EL COMPONENTE DESPLEGABLE */}
        <CategoriasMenu 
          categoriaSeleccionada={categoriaActiva} 
          onSelectCategoria={onSeleccionar} 
        />
      </aside>
    </>
  );
}

export default Sidebar;