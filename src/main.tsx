import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LateralPageAdministrador from './pages/LateralPageAdministrador'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <LateralPageAdministrador/>
</StrictMode>,
)
