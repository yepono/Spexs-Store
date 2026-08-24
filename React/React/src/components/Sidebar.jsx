import './Sidebar.css';
import CategoriasMenu from '../components/CategoriasMenu';
import TranslatorWidget from '../components/TranslatorWidget';

function Sidebar({ abierto, onToggle, onCerrar, categoriaActiva, onSeleccionar }) {
  return (
    <>
      {/* Botón Hamburguesa */}
      <button 
        className={`hamburguesa-btn ${abierto ? 'abierto' : ''}`} 
        onClick={onToggle}
        aria-label="Toggle menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Overlay translúcido */}
      <div 
        className={`sidebar-overlay ${abierto ? 'visible' : ''}`}
        onClick={onCerrar}
      />

      {/* Sidebar Drawer */}
      <aside className={`sidebar ${abierto ? 'abierto' : ''}`}>
        <div className="sidebar-header">
          <h2>GameStore</h2>
          <button className="sidebar-close" onClick={onCerrar} aria-label="Cerrar menú">
            ✕
          </button>
        </div>

        <CategoriasMenu 
          categoriaSeleccionada={categoriaActiva} 
          onSelectCategoria={onSeleccionar} 
        />

        <TranslatorWidget />
      </aside>
    </>
  );
}

export default Sidebar;