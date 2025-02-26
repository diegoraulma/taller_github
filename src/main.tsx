import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import LoginPage from './pages/LoginPage'
import RegistroPage from './pages/RegistroPage'
import RecuperarPage from './pages/RecuperarPage'
import ConfirmarPage from './pages/ConfirmarPage'

import PerfilPage from './pagesUsuario/PerfilPage'
import GastosPage from './pagesUsuario/GastosPage'

import HistorialAdministradorPage from './pagesAdministrador/HistorialAdministradorPage'

import UsuarioAdministradorPage from './pagesAdministrador/UsuarioAdministradorPage'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import DashboardAdministradorPage from './pagesAdministrador/DashboardAdministradorPage'
import PresupuestosPage from './pagesUsuario/PresupuestoPage'


//AQUI INICIALIZAMOS TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO//

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/taller_github'>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Main" element={<PerfilPage />} />
        <Route path="/Registro" element={<RegistroPage />} />
        <Route path="/ConfirmarCorreo" element={<ConfirmarPage />} />
        <Route path="/RecuperarContra" element={<RecuperarPage />} />

        {/* RUTAS DE USUARIO */}
        <Route path="/gastos" element={<GastosPage />} />
        <Route path="/presupuestosusu" element={<PresupuestosPage/>} />
        {/* RUTAS DE ADMINISTRADOR */}
        <Route path="/usuarios" element={<UsuarioAdministradorPage />} />
        {/* <Route path="/dashboard" element={<DashboardAdministradorPage />} /> */}
        <Route path="/historial" element={<HistorialAdministradorPage />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);