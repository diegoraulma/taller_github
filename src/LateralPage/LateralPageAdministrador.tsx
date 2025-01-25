import { IoExitOutline } from "react-icons/io5"; /* DASHBOARD*/ 
import { PiUsersThreeBold } from "react-icons/pi"; /* USUARIOS*/ 
import {  FaGear } from "react-icons/fa6"; 
import { FaHistory } from "react-icons/fa"; /* HISTORIAL*/ 
import { VscGraph } from "react-icons/vsc"; /* DASHBOARD*/ 
import "../pages/LaterPage.css"


const LateralPageAdministrador = () => {
  return (
    <div className=" bg-info" style={{ width:"15%", height:"100vh"}}>
      {/* Encabezado del menú */}
      <div className="p-4 text-center">
        {/*Imagen*/}
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/
          // blank-profile-picture-973460_640.png"
          
          className="rounded-circle mb-3"
          width="150"
          height="150"
        />
        <h6 className="fs-2 text-black-50">Jessica Straus</h6>
      </div>

      {/* Opciones del menú */}
      <ul className="nav flex-column mt-4 fs-4 ">
        <li className="nav-item ">
          <a className="nav-link text-black-50 mb-4 opcioneslateral" href="#">
            <VscGraph className="me-2 fs-2" />
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black-50 mb-4 opcioneslateral" href="#">
            <PiUsersThreeBold className="me-2 fs-2" />
            Usuarios
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black-50 mb-4 opcioneslateral" href="#">
            <FaHistory className="me-2 fs-2" />
            Historial
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black-50 mb-4 opcioneslateral" href="#">
            <FaGear className="me-2 fs-2" />
            Configuración
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-black-50 opcioneslateral"href="#">
            <IoExitOutline className="me-2 fs-2" />
            Salir
          </a>
        </li>
      </ul>
    </div>
  );
};




export default LateralPageAdministrador

