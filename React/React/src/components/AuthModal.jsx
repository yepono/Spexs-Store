import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import './AuthModal.css'

export default function AuthModal({ isOpen, onClose }) {
  const [esRegistro, setEsRegistro] = useState(false)
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { iniciarSesion } = useAuth()

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    // Guardamos los datos del usuario en el contexto
    iniciarSesion({
      nombre: esRegistro ? nombre : email.split('@')[0],
      email: email
    })
    onClose()
  }

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="auth-close" onClick={onClose}>✕</button>
        <h2>{esRegistro ? 'Crear Cuenta' : 'Iniciar Sesión'}</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          {esRegistro && (
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
          )}

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
            {esRegistro ? 'Registrarse' : 'Entrar'}
          </button>
        </form>

        <p className="auth-toggle">
          {esRegistro ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}
          <button onClick={() => setEsRegistro(!esRegistro)}>
            {esRegistro ? 'Inicia Sesión' : 'Regístrate aquí'}
          </button>
        </p>
      </div>
    </div>
  )
}