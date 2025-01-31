import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import LoginPage from './pages/LoginPage'
import RegistroPage from './pages/RegistroPage'
import RecuperarPage from './pages/RecuperarPage'
import ConfirmarPage from './pages/ConfirmarPage'

import PerfilPage from './pagesUsuario/PerfilPage'
import GastosPage from './pagesUsuario/GastosPage'
import LateralPageUsuario from './componentes/LateralPageUsuario'

import LateralPageAdministrador from './componentes/LateralPageAdministrador'

import HistorialAdministradorPage from './pagesAdministrador/HistorialAdministradorPage'

import UsuarioAdministradorPage from './pagesAdministrador/UsuarioAdministradorPage'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom'


//AQUI INICIALIZAMOS TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO//

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<PerfilPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
