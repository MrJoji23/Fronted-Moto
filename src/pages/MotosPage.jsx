import Navbar from '../components/Navbar'
import ProductGrid from '../components/ProductGrid'
import Footer from '../components/Footer'
import { motos } from '../data/products'

export default function MotosPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '68px' }}>
        <ProductGrid
          products={motos}
          title={<>NUESTRAS <span>MOTOS</span></>}
          subtitle="Encuentra la moto de tus sueños entre nuestra amplia selección de modelos"
        />
      </div>
      <Footer />
    </>
  )
}
