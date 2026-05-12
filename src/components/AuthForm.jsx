import { useState } from 'react'
import { Link } from 'react-router-dom'
import './AuthForm.css'

export default function AuthForm({ mode }) {
  const isLogin = mode === 'login'

  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    usuario: '',
    password: '',
    confirmPassword: '',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setErrors(prev => ({ ...prev, [e.target.name]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!isLogin) {
      if (!form.nombre.trim()) errs.nombre = 'El nombre es requerido'
      if (!form.apellido.trim()) errs.apellido = 'El apellido es requerido'
    }
    if (!form.usuario.trim()) errs.usuario = isLogin ? 'El usuario o correo es requerido' : 'El usuario es requerido'
    if (!isLogin && !form.correo.trim()) errs.correo = 'El correo es requerido'
    else if (!isLogin && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) errs.correo = 'Correo inválido'
    if (!form.password) errs.password = 'La contraseña es requerida'
    else if (!isLogin && form.password.length < 6) errs.password = 'Mínimo 6 caracteres'
    if (!isLogin && form.password !== form.confirmPassword) errs.confirmPassword = 'Las contraseñas no coinciden'
    return errs
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="auth-success">
        <div className="success-icon">✓</div>
        <h2>{isLogin ? '¡Bienvenido de vuelta!' : '¡Registro exitoso!'}</h2>
        <p>{isLogin ? 'Has iniciado sesión correctamente.' : 'Tu cuenta ha sido creada. ¡Bienvenido a MotoZone!'}</p>
        <Link to="/" className="btn-primary">Ir al inicio</Link>
      </div>
    )
  }

  return (
    <div className="auth-form-container">
      <div className="auth-deco"></div>

      <div className="auth-form-box">
        <div className="auth-logo">
          <Link to="/">
            <span>MOTO<span style={{ color: 'var(--primary)' }}>ZONE</span></span>
          </Link>
        </div>

        <h1 className="auth-title">
          {isLogin ? 'INICIAR SESIÓN' : 'CREAR CUENTA'}
        </h1>
        <p className="auth-subtitle">
          {isLogin
            ? 'Ingresa tu usuario o correo y contraseña'
            : 'Únete a la comunidad MotoZone'}
        </p>

        <form onSubmit={handleSubmit} className="auth-form" noValidate>
          {!isLogin && (
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Juan"
                  value={form.nombre}
                  onChange={handleChange}
                  className={errors.nombre ? 'error' : ''}
                />
                {errors.nombre && <span className="form-error">{errors.nombre}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="apellido">Apellido</label>
                <input
                  id="apellido"
                  name="apellido"
                  type="text"
                  placeholder="Pérez"
                  value={form.apellido}
                  onChange={handleChange}
                  className={errors.apellido ? 'error' : ''}
                />
                {errors.apellido && <span className="form-error">{errors.apellido}</span>}
              </div>
            </div>
          )}

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="correo">Correo electrónico</label>
              <input
                id="correo"
                name="correo"
                type="email"
                placeholder="juan@ejemplo.com"
                value={form.correo}
                onChange={handleChange}
                className={errors.correo ? 'error' : ''}
              />
              {errors.correo && <span className="form-error">{errors.correo}</span>}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="usuario">
              {isLogin ? 'Usuario o correo' : 'Nombre de usuario'}
            </label>
            <input
              id="usuario"
              name="usuario"
              type="text"
              placeholder={isLogin ? 'tu_usuario o correo@email.com' : 'tu_usuario'}
              value={form.usuario}
              onChange={handleChange}
              className={errors.usuario ? 'error' : ''}
            />
            {errors.usuario && <span className="form-error">{errors.usuario}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <span className="form-error">{errors.password}</span>}
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar contraseña</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={form.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? 'error' : ''}
              />
              {errors.confirmPassword && <span className="form-error">{errors.confirmPassword}</span>}
            </div>
          )}

          <button type="submit" className="btn-primary auth-submit">
            {isLogin ? 'Ingresar' : 'Crear cuenta'}
          </button>
        </form>

        <p className="auth-switch">
          {isLogin ? (
            <>¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></>
          ) : (
            <>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></>
          )}
        </p>
      </div>
    </div>
  )
}
