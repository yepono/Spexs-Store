import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Formulario.css'

function Formulario() {
  const navigate = useNavigate()
  const [paso, setPaso] = useState(1)
  const [cargando, setCargando] = useState(false)

  // Lista general de disponibles y seleccionados
  const [disponibles, setDisponibles] = useState([
    'Desarrollo Web',
    'Tecnología',
    'Diseño UI/UX',
    'Matemáticas',
    'Inteligencia Artificial',
    'Ciberseguridad',
  ])
  const [seleccionados, setSeleccionados] = useState([])

  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    rol: 'Estudiante',
    recibirNotificaciones: true,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setDatos((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  /* LÓGICA DRAG & DROP */
  const handleDragStart = (e, item, origen) => {
    e.dataTransfer.setData('text/plain', JSON.stringify({ item, origen }))
  }

  const handleDragOver = (e) => {
    e.preventDefault() // Necesario para permitir soltar (drop)
  }

  const handleDrop = (e, destino) => {
    e.preventDefault()
    const data = e.dataTransfer.getData('text/plain')
    if (!data) return

    const { item, origen } = JSON.parse(data)

    if (origen === destino) return // Si se suelta en la misma columna, no hace nada

    if (destino === 'izquierda') {
      // Mover de derecha a izquierda (Seleccionar)
      setDisponibles((prev) => prev.filter((i) => i !== item))
      setSeleccionados((prev) => [...prev, item])
    } else {
      // Mover de izquierda a derecha (Desmarcar)
      setSeleccionados((prev) => prev.filter((i) => i !== item))
      setDisponibles((prev) => [...prev, item])
    }
  }

  const handleSiguiente = (e) => {
    e.preventDefault()
    if (paso === 1 && datos.nombre && datos.correo) {
      setPaso(2)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCargando(true)

    setTimeout(() => {
      navigate('/gracias', { state: { nombre: datos.nombre } })
    }, 1000)
  }

  return (
    <div className="form-container">
      <div className="form-box">
        {/* Progress Bar Header */}
        <header className="form-header">
          <div className="step-indicator">
            <span className={`step-number ${paso >= 1 ? 'active' : ''}`}>1</span>
            <div className={`step-line ${paso === 2 ? 'active' : ''}`} />
            <span className={`step-number ${paso === 2 ? 'active' : ''}`}>2</span>
          </div>
          <h1>{paso === 1 ? 'Registro de Usuario' : 'Configura tu Perfil'}</h1>
          <p>
            Paso {paso} de 2 — {paso === 1 ? 'Información básica' : 'Selecciona tus intereses'}
          </p>
        </header>

        <form onSubmit={paso === 1 ? handleSiguiente : handleSubmit}>
          {paso === 1 ? (
            /* PASO 1: DATOS PERSONALES */
            <div className="form-step">
              <div className="form-row">
                <div className="field-group">
                  <label htmlFor="nombre">Nombre *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    placeholder="Ej. Christopher"
                    value={datos.nombre}
                    onChange={handleChange}
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="apellido">Apellido</label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    placeholder="Ej. Flores"
                    value={datos.apellido}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="field-group">
                <label htmlFor="correo">Correo Electrónico *</label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  required
                  placeholder="usuario@ejemplo.com"
                  value={datos.correo}
                  onChange={handleChange}
                />
              </div>

              <div className="field-group">
                <label htmlFor="rol">Ocupación / Rol</label>
                <select
                  id="rol"
                  name="rol"
                  value={datos.rol}
                  onChange={handleChange}
                >
                  <option value="Estudiante">Estudiante</option>
                  <option value="Desarrollador">Desarrollador / Programador</option>
                  <option value="Diseñador">Diseñador UI/UX</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <button type="submit" className="btn-primary">
                Siguiente →
              </button>
            </div>
          ) : (
            /* PASO 2: INTERESES DRAG & DROP */
            <div className="form-step">
              <label className="drag-title">
                Arrastra las opciones de la derecha a la izquierda para agregarlas a tus intereses:
              </label>

              <div className="drag-drop-container">
                {/* LADO IZQUIERDO: SELECCIONADOS */}
                <div
                  className="drag-zone left-zone"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, 'izquierda')}
                >
                  <span className="zone-header"> Mis Intereses</span>
                  {seleccionados.length === 0 ? (
                    <div className="empty-drop-zone">
                      Arrastra aquí lo que te interesa 
                    </div>
                  ) : (
                    seleccionados.map((item) => (
                      <div
                        key={item}
                        className="draggable-card selected-card"
                        draggable
                        onDragStart={(e) => handleDragStart(e, item, 'izquierda')}
                      >
                        <span>{item}</span>
                        <span className="drag-icon">⋮⋮</span>
                      </div>
                    ))
                  )}
                </div>

                {/* LADO DERECHO: DISPONIBLES */}
                <div
                  className="drag-zone right-zone"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, 'derecha')}
                >
                  <span className="zone-header"> Opciones</span>
                  {disponibles.length === 0 ? (
                    <div className="empty-drop-zone">
                      ¡Agregaste todas! 
                    </div>
                  ) : (
                    disponibles.map((item) => (
                      <div
                        key={item}
                        className="draggable-card available-card"
                        draggable
                        onDragStart={(e) => handleDragStart(e, item, 'derecha')}
                      >
                        <span className="drag-icon">⋮⋮</span>
                        <span>{item}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="field-group toggle-group">
                <label className="switch-label">
                  <input
                    type="checkbox"
                    name="recibirNotificaciones"
                    checked={datos.recibirNotificaciones}
                    onChange={handleChange}
                  />
                  <span className="slider"></span>
                  <span className="switch-text">Deseo recibir actualizaciones</span>
                </label>
              </div>

              <div className="button-actions">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setPaso(1)}
                  disabled={cargando}
                >
                  ← Atrás
                </button>
                <button type="submit" className="btn-primary" disabled={cargando}>
                  {cargando ? 'Guardando...' : 'Completar Registro ✓'}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default Formulario