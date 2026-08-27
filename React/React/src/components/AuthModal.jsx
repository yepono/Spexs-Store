import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import './AuthModal.css'

export default function AuthModal({ isOpen, onClose }) {
  const [esRegistro, setEsRegistro] = useState(false)
  const [paso, setPaso] = useState(1)

  // Paso 1: Credenciales
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Paso 2: Perfil
  const [fotoPerfil, setFotoPerfil] = useState('')

  // Paso 3: Método de Pago y Domicilio
  const [tarjetaNumero, setTarjetaNumero] = useState('')
  const [tarjetaNombre, setTarjetaNombre] = useState('')
  const [tarjetaExp, setTarjetaExp] = useState('')
  const [tarjetaCvv, setTarjetaCvv] = useState('')
  
  // Domicilio
  const [calle, setCalle] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [codigoPostal, setCodigoPostal] = useState('')
  const [estado, setEstado] = useState('')

  const { iniciarSesion } = useAuth()

  if (!isOpen) return null

  const resetFormulario = () => {
    setPaso(1)
    setEsRegistro(false)
    setNombre('')
    setEmail('')
    setPassword('')
    setFotoPerfil('')
    setTarjetaNumero('')
    setTarjetaNombre('')
    setTarjetaExp('')
    setTarjetaCvv('')
    setCalle('')
    setCiudad('')
    setCodigoPostal('')
    setEstado('')
  }

  const handleClose = () => {
    resetFormulario()
    onClose()
  }

  const handleSiguiente = (e) => {
    e.preventDefault()
    setPaso((prev) => prev + 1)
  }

  const handleAnterior = () => {
    setPaso((prev) => prev - 1)
  }

  const finalizarRegistro = (incluyePago = true) => {
    const nuevaTarjeta = (incluyePago && tarjetaNumero) ? {
      id: Date.now(),
      numero: `**** **** **** ${tarjetaNumero.slice(-4)}`,
      titular: tarjetaNombre,
      expiracion: tarjetaExp,
      domicilio: { calle, ciudad, estado, codigoPostal }
    } : null

    iniciarSesion({
      nombre: esRegistro ? nombre : email.split('@')[0],
      email: email,
      fotoPerfil: fotoPerfil || null,
      tarjetas: nuevaTarjeta ? [nuevaTarjeta] : [],
      tarjetaSeleccionada: nuevaTarjeta ? nuevaTarjeta.id : null
    })
    handleClose()
  }

  const handleSubmitFinal = (e) => {
    e.preventDefault()
    finalizarRegistro(true)
  }

  const handleOmitirPago = () => {
    finalizarRegistro(false)
  }

  return (
    <div className="auth-overlay" onClick={handleClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="auth-close" onClick={handleClose}>✕</button>

        <h2>{esRegistro ? `Registro - Paso ${paso} de 3` : 'Iniciar Sesión'}</h2>

        {esRegistro && (
          <div className="auth-steps-bar">
            <span className={`step-dot ${paso >= 1 ? 'active' : ''}`}>1</span>
            <span className="step-line"></span>
            <span className={`step-dot ${paso >= 2 ? 'active' : ''}`}>2</span>
            <span className="step-line"></span>
            <span className={`step-dot ${paso >= 3 ? 'active' : ''}`}>3</span>
          </div>
        )}

        {!esRegistro ? (
          <form onSubmit={(e) => { e.preventDefault(); iniciarSesion({ email, nombre: email.split('@')[0] }); handleClose(); }} className="auth-form">
            <div className="auth-group">
              <label>Correo Electrónico</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="correo@ejemplo.com"
              />
            </div>

            <div className="auth-group">
              <label>Contraseña</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>

            <button type="submit" className="btn-auth-submit">
              Entrar
            </button>
          </form>
        ) : (
          <>
            {paso === 1 && (
              <form onSubmit={handleSiguiente} className="auth-form">
                <div className="auth-group">
                  <label>Nombre completo</label>
                  <input
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="auth-group">
                  <label>Correo Electrónico</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                <div className="auth-group">
                  <label>Contraseña</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                  />
                </div>

                <button type="submit" className="btn-auth-submit">
                  Siguiente
                </button>
              </form>
            )}

            {paso === 2 && (
              <form onSubmit={handleSiguiente} className="auth-form">
                <div className="auth-group">
                  <label>URL de Foto de Perfil (Opcional)</label>
                  <input
                    type="url"
                    value={fotoPerfil}
                    onChange={(e) => setFotoPerfil(e.target.value)}
                    placeholder="https://ejemplo.com/mi-foto.png"
                  />
                </div>

                {fotoPerfil && (
                  <div className="avatar-preview-container">
                    <img
                      src={fotoPerfil}
                      alt="Previsualización"
                      className="avatar-preview"
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                  </div>
                )}

                <div className="auth-buttons-group">
                  <button type="button" onClick={handleAnterior} className="btn-auth-back">
                    Atrás
                  </button>
                  <button type="submit" className="btn-auth-submit">
                    Siguiente
                  </button>
                </div>
              </form>
            )}

            {paso === 3 && (
              <form onSubmit={handleSubmitFinal} className="auth-form auth-scrollable">
                <h3 className="section-title">Método de Pago</h3>

                <div className="auth-group">
                  <label>Titular de la Tarjeta</label>
                  <input
                    type="text"
                    required
                    value={tarjetaNombre}
                    onChange={(e) => setTarjetaNombre(e.target.value)}
                    placeholder="Nombre como aparece en la tarjeta"
                  />
                </div>

                <div className="auth-group">
                  <label>Número de Tarjeta (Débito o Crédito)</label>
                  <input
                    type="text"
                    maxLength="16"
                    required
                    value={tarjetaNumero}
                    onChange={(e) => setTarjetaNumero(e.target.value.replace(/\D/g, ''))}
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                <div className="auth-row">
                  <div className="auth-group">
                    <label>Expiración</label>
                    <input
                      type="text"
                      maxLength="5"
                      required
                      value={tarjetaExp}
                      onChange={(e) => setTarjetaExp(e.target.value)}
                      placeholder="MM/AA"
                    />
                  </div>

                  <div className="auth-group">
                    <label>CVV</label>
                    <input
                      type="password"
                      maxLength="4"
                      required
                      value={tarjetaCvv}
                      onChange={(e) => setTarjetaCvv(e.target.value.replace(/\D/g, ''))}
                      placeholder="123"
                    />
                  </div>
                </div>

                <h3 className="section-title">Datos del Domicilio</h3>

                <div className="auth-group">
                  <label>Calle y Número</label>
                  <input
                    type="text"
                    required
                    value={calle}
                    onChange={(e) => setCalle(e.target.value)}
                    placeholder="Av. Hidalgo #123"
                  />
                </div>

                <div className="auth-row">
                  <div className="auth-group">
                    <label>Ciudad</label>
                    <input
                      type="text"
                      required
                      value={ciudad}
                      onChange={(e) => setCiudad(e.target.value)}
                      placeholder="Ciudad"
                    />
                  </div>

                  <div className="auth-group">
                    <label>Estado</label>
                    <input
                      type="text"
                      required
                      value={estado}
                      onChange={(e) => setEstado(e.target.value)}
                      placeholder="Estado"
                    />
                  </div>
                </div>

                <div className="auth-group">
                  <label>Código Postal</label>
                  <input
                    type="text"
                    required
                    value={codigoPostal}
                    onChange={(e) => setCodigoPostal(e.target.value)}
                    placeholder="64000"
                  />
                </div>

                <div className="auth-buttons-group">
                  <button type="button" onClick={handleAnterior} className="btn-auth-back">
                    Atrás
                  </button>
                  <button type="submit" className="btn-auth-submit">
                    Finalizar Registro
                  </button>
                </div>

                <button type="button" onClick={handleOmitirPago} className="btn-auth-skip">
                  Llenar datos de pago en otro momento
                </button>
              </form>
            )}
          </>
        )}

        <p className="auth-toggle">
          {esRegistro ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}
          <button onClick={() => { setEsRegistro(!esRegistro); setPaso(1); }}>
            {esRegistro ? 'Inicia Sesión' : 'Regístrate aquí'}
          </button>
        </p>
      </div>
    </div>
  )
}