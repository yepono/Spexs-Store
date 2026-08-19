import { useNavigate, useLocation } from 'react-router-dom'
import './Gracias.css'

function Gracias() {
  const navigate = useNavigate()
  const location = useLocation()
  const nombre = location.state?.nombre || 'Usuario'

  return (
    <div className="gracias-wrapper">
      <div className="gracias-card">
        <div className="check-badge">✓</div>
        <h1>¡Registro Completado!</h1>
        <p>
          Bienvenido <strong>{nombre}</strong>, tu información ha sido guardada con éxito.
        </p>

        <div className="siguiente-paso-box">
          <p className="subtexto"><h3>Buscas algo seguro?</h3></p>
          <button
            type="button"
            className="btn-continuar"
            onClick={() => navigate('/solicitud-trabajo', { state: { nombre } })}
          >
            Trabajo 100% asegurado →
          </button>
        </div>
      </div>
    </div>
  )
}

export default Gracias