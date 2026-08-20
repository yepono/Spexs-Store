import './Sidebar.css';
import CategoriasMenu from '../components/CategoriasMenu';
import TranslatorWidget from '../components/TranslatorWidget';

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

        <CategoriasMenu 
          categoriaSeleccionada={categoriaActiva} 
          onSelectCategoria={onSeleccionar} 
        />

        <TranslatorWidget/>

        
      </aside>
    </>
  );
}

export default Sidebar;