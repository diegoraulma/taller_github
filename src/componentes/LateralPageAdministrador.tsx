import React from "react";
import { Link } from "react-router-dom"; // Para manejar la navegación
import { IoExitOutline } from "react-icons/io5"; /* SALIR */
import { PiUsersThreeBold } from "react-icons/pi"; /* USUARIOS */
import { FaHistory } from "react-icons/fa"; /* HISTORIAL */
import { FaGear } from "react-icons/fa6"; /* CONFIGURACION */
import { VscGraph } from "react-icons/vsc"; /* DASHBOARD */
import "./LaterPage.css";

const LateralPageAdministrador: React.FC = () => {
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
      <li className="nav-item">
          <Link
            to="/dashboard"
            className="nav-link text-dark d-flex align-items-center"
          >
            <VscGraph className="me-2 fs-4" />
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/usuarios"
            className="nav-link text-dark d-flex align-items-center"
          >
            <PiUsersThreeBold className="me-2 fs-4" />
            Usuarios
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/historial"
            className="nav-link text-dark d-flex align-items-center"
          >
            <FaHistory className="me-2 fs-4" />
            Historial
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/configuracion"
            className="nav-link text-dark d-flex align-items-center"
          >
            <FaGear className="me-2 fs-4" />
            Configuración
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/salir"
            className="nav-link text-danger d-flex align-items-center"
          >
            <IoExitOutline className="me-2 fs-4" />
            Salir
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LateralPageAdministrador;