import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MotosPage from './pages/MotosPage'
import AccesoriosPage from './pages/AccesoriosPage'
import RepuestosPage from './pages/RepuestosPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/motos" element={<MotosPage />} />
      <Route path="/accesorios" element={<AccesoriosPage />} />
      <Route path="/repuestos" element={<RepuestosPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}
