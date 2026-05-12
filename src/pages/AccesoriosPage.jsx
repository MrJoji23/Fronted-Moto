import Navbar from '../components/Navbar'
import ProductGrid from '../components/ProductGrid'
import Footer from '../components/Footer'
import { accesorios } from '../data/products'

export default function AccesoriosPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '68px' }}>
        <ProductGrid
          products={accesorios}
          title={<>ACCESORIOS <span>PRO</span></>}
          subtitle="Equípate con los mejores accesorios para rodar con estilo y seguridad"
        />
      </div>
      <Footer />
    </>
  )
}
