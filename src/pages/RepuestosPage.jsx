import Navbar from '../components/Navbar'
import ProductGrid from '../components/ProductGrid'
import Footer from '../components/Footer'
import { repuestos } from '../data/products'

export default function RepuestosPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '68px' }}>
        <ProductGrid
          products={repuestos}
          title={<>REPUESTOS <span>Y PIEZAS</span></>}
          subtitle="Piezas originales y de alto rendimiento para mantener tu moto en perfectas condiciones"
        />
      </div>
      <Footer />
    </>
  )
}
