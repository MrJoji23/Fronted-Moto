import './ProductCard.css'

export default function ProductCard({ product }) {
  const { name, brand, price, category, specs, tag } = product

  return (
    <div className="product-card fade-in-up">
      {tag && <span className="product-tag badge">{tag}</span>}

      <div className="product-img">
        <div className="product-img-placeholder">
          {category === 'moto' && (
            <svg viewBox="0 0 200 130" fill="none">
              <circle cx="42" cy="95" r="28" stroke="#E8181A" strokeWidth="5" fill="none"/>
              <circle cx="42" cy="95" r="13" stroke="#333" strokeWidth="3" fill="none"/>
              <circle cx="42" cy="95" r="4" fill="#E8181A"/>
              <circle cx="158" cy="95" r="28" stroke="#E8181A" strokeWidth="5" fill="none"/>
              <circle cx="158" cy="95" r="13" stroke="#333" strokeWidth="3" fill="none"/>
              <circle cx="158" cy="95" r="4" fill="#E8181A"/>
              <path d="M42 75 L80 48 L125 45 L158 68" stroke="#F0F0F0" strokeWidth="4" strokeLinecap="round" fill="none"/>
              <path d="M42 75 L65 75 L80 48" stroke="#F0F0F0" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
              <rect x="77" y="62" width="40" height="28" rx="3" fill="#1A1A1A" stroke="#444" strokeWidth="1"/>
              <path d="M122 45 L158 48 L162 68 L140 70 L125 58 Z" fill="#E8181A" opacity="0.9"/>
              <path d="M145 42 L152 38 L162 39" stroke="#888" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <path d="M78 46 L122 43 L124 56 L76 58 Z" fill="#222"/>
            </svg>
          )}
          {category === 'accesorio' && (
            <svg viewBox="0 0 200 130" fill="none">
              <ellipse cx="100" cy="65" rx="60" ry="45" fill="#1A1A1A" stroke="#E8181A" strokeWidth="3"/>
              <ellipse cx="100" cy="65" rx="45" ry="32" fill="#222"/>
              <path d="M55 65 Q100 30 145 65" stroke="#E8181A" strokeWidth="2" fill="none" opacity="0.5"/>
              <rect x="78" y="55" width="44" height="22" rx="11" fill="#333" stroke="#555" strokeWidth="1"/>
              <rect x="82" y="59" width="36" height="14" rx="7" fill="#111"/>
              <circle cx="68" cy="80" r="8" fill="#E8181A" opacity="0.7"/>
              <circle cx="132" cy="80" r="8" fill="#E8181A" opacity="0.7"/>
            </svg>
          )}
          {category === 'repuesto' && (
            <svg viewBox="0 0 200 130" fill="none">
              <circle cx="100" cy="65" r="45" stroke="#E8181A" strokeWidth="4" fill="none"/>
              <circle cx="100" cy="65" r="30" stroke="#333" strokeWidth="8" fill="none"/>
              <circle cx="100" cy="65" r="10" fill="#E8181A"/>
              <line x1="100" y1="20" x2="100" y2="35" stroke="#888" strokeWidth="3" strokeLinecap="round"/>
              <line x1="100" y1="95" x2="100" y2="110" stroke="#888" strokeWidth="3" strokeLinecap="round"/>
              <line x1="55" y1="65" x2="70" y2="65" stroke="#888" strokeWidth="3" strokeLinecap="round"/>
              <line x1="130" y1="65" x2="145" y2="65" stroke="#888" strokeWidth="3" strokeLinecap="round"/>
              <line x1="68" y1="33" x2="77" y2="45" stroke="#888" strokeWidth="2" strokeLinecap="round"/>
              <line x1="123" y1="85" x2="132" y2="97" stroke="#888" strokeWidth="2" strokeLinecap="round"/>
              <line x1="132" y1="33" x2="123" y2="45" stroke="#888" strokeWidth="2" strokeLinecap="round"/>
              <line x1="77" y1="85" x2="68" y2="97" stroke="#888" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )}
        </div>
      </div>

      <div className="product-info">
        <div className="product-brand">{brand}</div>
        <h3 className="product-name">{name}</h3>

        {specs && (
          <div className="product-specs">
            {specs.map((spec, i) => (
              <span key={i} className="spec-chip">{spec}</span>
            ))}
          </div>
        )}

        <div className="product-footer">
          <div className="product-price">
            <span className="price-label">COP</span>
            <span className="price-value">{price.toLocaleString('es-CO')}</span>
          </div>
          <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
            Ver más
          </button>
        </div>
      </div>
    </div>
  )
}
