import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import LoginPage from './pages/LoginPage'
import RegistroPage from './pages/RegistroPage'
import RecuperarPage from './pages/RecuperarPage'
import ConfirmarPage from './pages/ConfirmarPage'
import PerfilPage from './pages/PerfilPage'
import GastosPage from './pages/GastosPage'

import LateralPageUsuario from './LateralPage/LateralPageUsuario'
import LateralPageAdministrador from './LateralPage/LateralPageAdministrador'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


//AQUI INICIALIZAMOS TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO//

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <GastosPage/>
</StrictMode>,
)
