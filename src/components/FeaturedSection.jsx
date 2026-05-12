import { Link } from 'react-router-dom'
import './FeaturedSection.css'

const categories = [
  {
    id: 1,
    title: 'Motos',
    desc: 'Deportivas, naked, scooters y todo terreno. Encuentra la tuya.',
    link: '/motos',
    count: '500+ modelos',
  },
  {
    id: 2,
    title: 'Accesorios',
    desc: 'Cascos, guantes, chaquetas y protecciones de alta calidad.',
    link: '/accesorios',
    count: '1200+ productos',
  },
  {
    id: 3,
    title: 'Repuestos',
    desc: 'Piezas originales y de alto rendimiento para tu moto.',
    link: '/repuestos',
    count: '3000+ referencias',
  },
]

export default function FeaturedSection() {
  return (
    <section className="featured-section">
      <div className="featured-inner">
        <div className="featured-header">
          <h2 className="section-title">
            TODO LO QUE <span>NECESITAS</span>
          </h2>
          <p className="featured-desc">
            Desde tu próxima moto hasta el último repuesto. Somos tu aliado número uno en el mundo de las dos ruedas.
          </p>
        </div>

        <div className="featured-cards">
          {categories.map(cat => (
            <Link to={cat.link} key={cat.id} className="feat-card">
              <div className="feat-icon">{cat.icon}</div>
              <div className="feat-count badge">{cat.count}</div>
              <h3 className="feat-title">{cat.title}</h3>
              <p className="feat-desc">{cat.desc}</p>
              <span className="feat-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
