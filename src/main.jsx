import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Inicio } from './pages/Inicio.jsx'
import { Blog1 } from './pages/Blog1.jsx'
import { Nosotros } from './pages/Nosotros.jsx'
import { Registro } from './pages/Registro.jsx'
import { Contacto } from './pages/Contacto.jsx'
import { Blog2 } from './pages/Blog2.jsx'
import { Blogs } from './pages/Blogs.jsx'
import { MisServicios } from './pages/MisServicios.jsx'
import { ServiciosEnCarga } from './components/ServiciosEnCarga.jsx'


import { Login } from './pages/Login.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/registro" element={<Registro />} />
        <Route
          path="/servicios"
          element={<ServiciosEnCarga />}
        />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/misServicios" element={<MisServicios />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
