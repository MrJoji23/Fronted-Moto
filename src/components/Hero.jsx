import { Link } from 'react-router-dom'
import motoImg from '../assets/racing_12444173.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
      </div>

      <div className="hero-content">
        <div className="hero-tag">
          <span className="badge">Nuevo 2025</span>
        </div>
        <h1 className="hero-title">
          VIVE LA<br />
          <span>VELOCIDAD</span><br />
          AL MÁXIMO
        </h1>
        <p className="hero-desc">
          Las mejores motos, accesorios y repuestos en un solo lugar. Encuentra tu moto ideal y equípate como un profesional.
        </p>
        <div className="hero-cta">
          <Link to="/motos" className="btn-primary">Ver Motos</Link>
          <Link to="/accesorios" className="btn-outline">Accesorios</Link>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">500+</span>
            <span className="stat-label">Motos</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">1200+</span>
            <span className="stat-label">Accesorios</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">3000+</span>
            <span className="stat-label">Repuestos</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <img
          src={motoImg}
          alt="Moto racing"
          className="hero-moto-placeholder"
        />
        <div className="hero-moto-shadow"></div>
      </div>
    </section>
  )
}