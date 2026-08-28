import React, { useState, useRef, useEffect } from 'react';
import './CategoriasDropdown.css';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const categorias = [
  { id: 'Todos', nombre: 'Todos los juegos' },
  { id: 'Acción', nombre: 'Acción' },
  { id: 'Aventura', nombre: 'Aventura' },
  { id: 'RPG', nombre: 'RPG' },
  { id: 'Shooter', nombre: 'Shooter' },
  { id: 'Deportes', nombre: 'Deportes' },
  { id: 'Multijugador', nombre: 'Multijugador'},
  { id: 'Plataformas', nombre: 'Plataformas' },
  { id: 'Terror', nombre: 'Terror'},
  { id: 'Estrategia', nombre: 'Estrategia' },
  { id: 'Carreras', nombre: 'Carreras' },
  { id: 'Sandbox', nombre: 'Sandbox' },
];

export const CategoriasMenu = ({ 
  categoriaSeleccionada = 'Todos', 
  onSelectCategoria,
  onAbrirAuth
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { usuario } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const categoriaActual = categorias.find(
    c => c.id.toLowerCase() === String(categoriaSeleccionada).toLowerCase()
  ) || {
    id: categoriaSeleccionada,
    nombre: categoriaSeleccionada === 'Ofertas' ? 'Ofertas Especiales' : 'Todos los juegos',
    icono: categoriaSeleccionada === 'Ofertas' ? '' : ''
  };

  const handleIrBiblioteca = () => {
    if (usuario) {
      navigate('/biblioteca');
    } else if (onAbrirAuth) {
      onAbrirAuth();
    }
  };

  return (
    <div className="sidebar-navigation">
      <div className="dropdown-container" ref={dropdownRef}>
        <button
          type="button"
          className={`btn-categorias-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="btn-icon">{categoriaActual.icono}</span>
          <span className="btn-text">{categoriaActual.nombre}</span>
          <span className={`arrow-icon ${isOpen ? 'open' : ''}`}>▲</span>
        </button>

        {isOpen && (
          <div className="categorias-flyout-menu">
            <div className="flyout-header">Categorías</div>
            <div className="flyout-list">
              {categorias.map((cat) => {
                const isSelected =
                  String(categoriaSeleccionada).toLowerCase() === cat.id.toLowerCase();
                return (
                  <button
                    key={cat.id}
                    type="button"
                    className={`flyout-item ${isSelected ? 'selected' : ''}`}
                    onClick={() => {
                      if (onSelectCategoria) onSelectCategoria(cat.id);
                      setIsOpen(false);
                    }}
                  >
                    <span className="item-icon">{cat.icono}</span>
                    <span className="item-text">{cat.nombre}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="menu-secciones-extra">
        <button 
          type="button" 
          className={`nav-extra-btn ${categoriaSeleccionada === 'Ofertas' ? 'active' : ''}`}
          onClick={() => {
            if (onSelectCategoria) onSelectCategoria('Ofertas');
          }}
        >
          <span className="btn-icon"></span>
          <span className="btn-text">Ofertas</span>
        </button>

        <button 
          type="button" 
          className="nav-extra-btn"
          onClick={handleIrBiblioteca}
        >
          <span className="btn-icon"></span>
          <span className="btn-text"> Biblioteca</span>
        </button>
      </div>
    </div>
  );
};

export default CategoriasMenu;