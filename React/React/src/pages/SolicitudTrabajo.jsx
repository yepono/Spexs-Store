import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './SolicitudTrabajo.css'

function SolicitudTrabajo() {
  const location = useLocation()
  const [empresa, setEmpresa] = useState('mcdonalds') // 'mcdonalds' u 'oxxo'
  const [enviado, setEnviado] = useState(false)
  const [formData, setFormData] = useState({
    nombre: location.state?.nombre || '',
    puesto: 'Atención al Cliente',
    turno: 'Matutino',
    experiencia: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <div className={`solicitud-container ${empresa}`}>
      <div className="solicitud-card">
        {/* Selector de Empresa */}
        <div className="empresa-selector">
          <button
            type="button"
            className={`btn-empresa mcd ${empresa === 'mcdonalds' ? 'active' : ''}`}
            onClick={() => setEmpresa('mcdonalds')}
          >
            🍔 McDonald's
          </button>
          <button
            type="button"
            className={`btn-empresa oxxo ${empresa === 'oxxo' ? 'active' : ''}`}
            onClick={() => setEmpresa('oxxo')}
          >
            🟡 OXXO
          </button>
        </div>

        {enviado ? (
          <div className="exito-solicitud">
            <h2>¡Solicitud Recibida! 🎉</h2>
            <p>
              Hemos registrado tu postulación para <strong>{empresa === 'mcdonalds' ? "McDonald's" : 'OXXO'}</strong>. Nos pondremos en contacto contigo para una entrevista.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="solicitud-form">
            <h2>
              Solicitud de Empleo - {empresa === 'mcdonalds' ? "McDonald's 🍔" : 'OXXO 🏪'}
            </h2>
            <p className="sub-title">Aplica para integrarte al equipo</p>

            <div className="field-group">
              <label htmlFor="nombre">Nombre Completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                placeholder="Tu nombre completo"
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>

            <div className="field-group">
              <label htmlFor="puesto">Puesto de Interés</label>
              <select
                id="puesto"
                name="puesto"
                value={formData.puesto}
                onChange={handleChange}
              >
                {empresa === 'mcdonalds' ? (
                  <>
                    <option value="Atención al Cliente">Empleado General / Cajas</option>
                    <option value="Cocina">Área de Cocina</option>
                    <option value="McCafé">Barista McCafé</option>
                    <option value="Gerente de Turno">Gerente de Turno</option>
                  </>
                ) : (
                  <>
                    <option value="Cajero">Cajero / Multifuncional</option>
                    <option value="Líder de Tienda">Líder de Tienda</option>
                    <option value="Inventarios">Encargado de Inventarios</option>
                  </>
                )}
              </select>
            </div>

            <div className="field-group">
              <label htmlFor="turno">Disponibilidad de Horario</label>
              <select
                id="turno"
                name="turno"
                value={formData.turno}
                onChange={handleChange}
              >
                <option value="Matutino">Turno Matutino</option>
                <option value="Vespertino">Turno Vespertino</option>
                <option value="Nocturno">Turno Nocturno</option>
                <option value="Fines de semana">Fines de Semana</option>
              </select>
            </div>

            <div className="field-group">
              <label htmlFor="experiencia">Experiencia Previa (Opcional)</label>
              <textarea
                id="experiencia"
                name="experiencia"
                rows={3}
                placeholder="Platícanos si has trabajado antes en atención al cliente o ventas..."
                value={formData.experiencia}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn-enviar-solicitud">
              Enviar Solicitud 🚀
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default SolicitudTrabajo