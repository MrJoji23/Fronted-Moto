import { useState } from 'react'
import ProductCard from './ProductCard'
import './ProductGrid.css'

export default function ProductGrid({ products, title, subtitle }) {
  const [filter, setFilter] = useState('todos')
  const [search, setSearch] = useState('')

  const brands = ['todos', ...new Set(products.map(p => p.brand))]

  const filtered = products.filter(p => {
    const matchBrand = filter === 'todos' || p.brand === filter
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
                        p.brand.toLowerCase().includes(search.toLowerCase())
    return matchBrand && matchSearch
  })

  return (
    <section className="product-grid-section">
      <div className="pg-header">
        <div>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="pg-subtitle">{subtitle}</p>}
        </div>
        <div className="pg-controls">
          <input
            type="text"
            placeholder="Buscar..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pg-search"
          />
        </div>
      </div>

      <div className="pg-filters">
        {brands.map(brand => (
          <button
            key={brand}
            className={`pg-filter-btn ${filter === brand ? 'active' : ''}`}
            onClick={() => setFilter(brand)}
          >
            {brand.charAt(0).toUpperCase() + brand.slice(1)}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="pg-empty">
          <p>No se encontraron resultados para "<strong>{search}</strong>"</p>
        </div>
      ) : (
        <div className="pg-grid">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}
