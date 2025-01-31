import { IoExitOutline } from "react-icons/io5"; /* SALIR*/
import { PiUsersThreeBold } from "react-icons/pi"; /* USUARIOS*/
import { FaHistory } from "react-icons/fa"; /* GASTOS*/
import {  FaGear } from "react-icons/fa6"; /* CONFIGURACION*/
import { VscGraph } from "react-icons/vsc"; /* DASHBOARD*/
import "./LaterPage.css";
import { useNavigate } from "react-router-dom";

const LateralPageAdministrador = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-light d-flex flex-column align-items-center p-3" style={{ width: "18.6%", height: "100vh" }}>
      {/* Imagen de perfil */}
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
        className="rounded-circle mb-3"
        width="120"
        height="120"
        alt="Profile"
      />
      <h6 className="fs-4 text-dark">Jessica Straus</h6>

      {/* Menú de navegación */}
      <ul className="nav flex-column w-100 mt-4">
        <li className="nav-item opcioneslateral">
          <a className="nav-link text-dark d-flex align-items-center" href="" 
          onClick={()=>{
            navigate("/dashboardadmin")
          }}>
            <VscGraph className="me-2 fs-4" />
            Dashboard
          </a>
        </li>
        <li className="nav-item opcioneslateral">
          <a className="nav-link text-dark d-flex align-items-center" href=""
          onClick={()=>{
            navigate("/usuariosadmin")
          }}>
            <PiUsersThreeBold className="me-2 fs-4" />
            Usuarios
          </a>
        </li>
        <li className="nav-item opcioneslateral">
          <a className="nav-link text-dark d-flex align-items-center" href=""
          onClick={()=>{
            navigate("/historialadmin")
          }}>
            <FaHistory className="me-2 fs-4" />
            Historial
          </a>
        </li>
        <li className="nav-item opcioneslateral">
          <a className="nav-link text-dark d-flex align-items-center active" href="">
            <FaGear className="me-2 fs-4" />
            Configuración
          </a>
        </li>
        <li className="nav-item opcioneslateral">
          <a className="nav-link text-danger d-flex align-items-center" href=""
            onClick={()=>{
              navigate("/")
            }}>
            <IoExitOutline className="me-2 fs-4" />
            Salir
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LateralPageAdministrador;