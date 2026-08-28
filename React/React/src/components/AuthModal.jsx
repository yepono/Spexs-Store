import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import './AuthModal.css'

export default function AuthModal({ isOpen, onClose }) {
  const [esRegistro, setEsRegistro] = useState(false)
  const [paso, setPaso] = useState(1)

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // guardar (File object)
  const [archivoFoto, setArchivoFoto] = useState(null)
  const [previewFoto, setPreviewFoto] = useState(null) // Solo para mostrar visualmente

  const [tarjetaNumero, setTarjetaNumero] = useState('')
  const [tarjetaNombre, setTarjetaNombre] = useState('')
  const [tarjetaExp, setTarjetaExp] = useState('')
  const [tarjetaCvv, setTarjetaCvv] = useState('')

  const [calle, setCalle] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [codigoPostal, setCodigoPostal] = useState('')
  const [estado, setEstado] = useState('')

  const { iniciarSesion, registrarUsuarioCompleto } = useAuth()

  if (!isOpen) return null

  const resetFormulario = () => {
    setPaso(1)
    setEsRegistro(false)
    setNombre('')
    setEmail('')
    setPassword('')
    setArchivoFoto(null)
    setPreviewFoto(null)
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

  // Manejar la selección de archivo local
  const handleCambioFoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      setArchivoFoto(file);
      // Crear una URL temporal para mostrar la vista previa en el navegador
      setPreviewFoto(URL.createObjectURL(file));
    }
  }

  // Función asíncrona para enviar datos a Supabase
  const finalizarRegistro = async (incluyePago = true) => {
    try {
      const metodoPago = (incluyePago && tarjetaNumero) ? [{
        id: Date.now().toString(),
        numero: `**** **** **** ${tarjetaNumero.slice(-4)}`,
        titular: tarjetaNombre,
        expiracion: tarjetaExp
      }] : [];

      const domicilioObj = { calle, ciudad, estado, codigoPostal };

      await registrarUsuarioCompleto({
        email,
        password,
        nombre,
        archivoFoto, 
        metodos_pago: metodoPago,
        domicilio: domicilioObj
      });

      handleClose();
    } catch (error) {
      alert("Error al registrar: " + error.message);
    }
  }

  const handleSubmitFinal = (e) => {
    e.preventDefault()
    finalizarRegistro(true)
  }

  const handleOmitirPago = () => {
    finalizarRegistro(false)
  }

  // Login normal
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await iniciarSesion(email, password);
      handleClose();
    } catch (error) {
      alert("Error al iniciar sesión: " + error.message);
    }
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
          <form onSubmit={handleLoginSubmit} className="auth-form">
            <div className="auth-group">
              <label>Correo Electrónico</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="correo@ejemplo.com" />
            </div>

            <div className="auth-group">
              <label>Contraseña</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
            </div>

            <button type="submit" className="btn-auth-submit">Entrar</button>
          </form>
        ) : (
          <>
            {paso === 1 && (
              <form onSubmit={handleSiguiente} className="auth-form">
                <div className="auth-group">
                  <label>Nombre completo</label>
                  <input type="text" required value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Tu nombre" />
                </div>
                <div className="auth-group">
                  <label>Correo Electrónico</label>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="correo@ejemplo.com" />
                </div>
                <div className="auth-group">
                  <label>Contraseña</label>
                  <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
                </div>
                <button type="submit" className="btn-auth-submit">Siguiente</button>
              </form>
            )}

            {paso === 2 && (
              <form onSubmit={handleSiguiente} className="auth-form">
                <div className="auth-group">
                  <label>Sube tu Foto de Perfil (Opcional)</label>
                  {/* CAMBIO: input tipo 'file' */}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleCambioFoto}
                  />
                </div>

                {previewFoto && (
                  <div className="avatar-preview-container">
                    <img
                      src={previewFoto}
                      alt="Previsualización"
                      className="avatar-preview"
                    />
                  </div>
                )}

                <div className="auth-buttons-group">
                  <button type="button" onClick={handleAnterior} className="btn-auth-back">Atrás</button>
                  <button type="submit" className="btn-auth-submit">Siguiente</button>
                </div>
              </form>
            )}

            {paso === 3 && (
              <form onSubmit={handleSubmitFinal} className="auth-form auth-scrollable">
                <h3 className="section-title">Método de Pago</h3>
                <div className="auth-group">
                  <label>Titular de la Tarjeta</label>
                  <input type="text" required value={tarjetaNombre} onChange={(e) => setTarjetaNombre(e.target.value)} placeholder="Nombre en la tarjeta" />
                </div>
                <div className="auth-group">
                  <label>Número de Tarjeta</label>
                  <input type="text" maxLength="16" required value={tarjetaNumero} onChange={(e) => setTarjetaNumero(e.target.value.replace(/\D/g, ''))} placeholder="1234 5678 9012 3456" />
                </div>
                <div className="auth-row">
                  <div className="auth-group">
                    <label>Expiración</label>
                    <input type="text" maxLength="5" required value={tarjetaExp} onChange={(e) => setTarjetaExp(e.target.value)} placeholder="MM/AA" />
                  </div>
                  <div className="auth-group">
                    <label>CVV</label>
                    <input type="password" maxLength="4" required value={tarjetaCvv} onChange={(e) => setTarjetaCvv(e.target.value.replace(/\D/g, ''))} placeholder="123" />
                  </div>
                </div>

                <h3 className="section-title">Datos del Domicilio</h3>
                <div className="auth-group">
                  <label>Calle y Número</label>
                  <input type="text" required value={calle} onChange={(e) => setCalle(e.target.value)} placeholder="Av. Hidalgo #123" />
                </div>
                <div className="auth-row">
                  <div className="auth-group">
                    <label>Ciudad</label>
                    <input type="text" required value={ciudad} onChange={(e) => setCiudad(e.target.value)} placeholder="Ciudad" />
                  </div>
                  <div className="auth-group">
                    <label>Estado</label>
                    <input type="text" required value={estado} onChange={(e) => setEstado(e.target.value)} placeholder="Estado" />
                  </div>
                </div>
                <div className="auth-group">
                  <label>Código Postal</label>
                  <input type="text" required value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)} placeholder="64000" />
                </div>

                <div className="auth-buttons-group">
                  <button type="button" onClick={handleAnterior} className="btn-auth-back">Atrás</button>
                  <button type="submit" className="btn-auth-submit">Finalizar Registro</button>
                </div>
                <button type="button" onClick={handleOmitirPago} className="btn-auth-skip">Llenar datos en otro momento</button>
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