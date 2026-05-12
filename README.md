# MotoZone 🏍️

Página web de motos construida con **React + Vite + React Router DOM**.

## 🚀 Instalación y ejecución

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar el servidor de desarrollo
npm run dev

# 3. Abrir en el navegador
http://localhost:5173
```

## 📁 Estructura del proyecto

```
moto-store/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Navbar.jsx       # Barra de navegación
│   │   ├── Hero.jsx         # Sección hero de inicio
│   │   ├── FeaturedSection  # Categorías destacadas
│   │   ├── ProductCard.jsx  # Tarjeta de producto
│   │   ├── ProductGrid.jsx  # Grid con filtros y búsqueda
│   │   ├── AuthForm.jsx     # Formulario Login/Register
│   │   └── Footer.jsx       # Pie de página
│   ├── pages/               # Páginas (solo llaman componentes)
│   │   ├── HomePage.jsx
│   │   ├── MotosPage.jsx
│   │   ├── AccesoriosPage.jsx
│   │   ├── RepuestosPage.jsx
│   │   ├── LoginPage.jsx
│   │   └── RegisterPage.jsx
│   ├── data/
│   │   └── products.js      # Datos de motos, accesorios y repuestos
│   ├── App.jsx              # Rutas con React Router
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales
├── index.html
├── vite.config.js
└── package.json
```

## 🛣️ Rutas

| Ruta           | Página          |
|----------------|-----------------|
| `/`            | Inicio          |
| `/motos`       | Catálogo motos  |
| `/accesorios`  | Accesorios      |
| `/repuestos`   | Repuestos       |
| `/login`       | Iniciar sesión  |
| `/register`    | Registro        |

## 🧩 Patrón de arquitectura

Las **Pages** solo importan y llaman componentes:

```jsx
// Ejemplo: MotosPage.jsx
import Navbar from '../components/Navbar'
import ProductGrid from '../components/ProductGrid'
import Footer from '../components/Footer'
import { motos } from '../data/products'

export default function MotosPage() {
  return (
    <>
      <Navbar />
      <ProductGrid products={motos} title="NUESTRAS MOTOS" />
      <Footer />
    </>
  )
}
```

Toda la lógica vive en los **Componentes**.
