import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo"> MOTO<span>ZONE</span></span>
          <p>Tu destino definitivo para motos, accesorios y repuestos. Calidad y pasión en cada pieza.</p>
        </div>

        <div className="footer-links">
          <h4>Catálogo</h4>
          <ul>
            <li><Link to="/motos">Motos</Link></li>
            <li><Link to="/accesorios">Accesorios</Link></li>
            <li><Link to="/repuestos">Repuestos</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Cuenta</h4>
          <ul>
            <li><Link to="/login">Iniciar sesión</Link></li>
            <li><Link to="/register">Registrarse</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Contacto</h4>
          <ul>
            <li>📞 +57 300 123 4567</li>
            <li>✉️ info@motozone.co</li>
            <li>📍 Bogotá, Colombia</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 MotoZone. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
