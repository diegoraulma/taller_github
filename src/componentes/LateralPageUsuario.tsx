import { IoExitOutline } from "react-icons/io5"; /* SALIR*/
import { FaMoneyBills} from "react-icons/fa6"; /* GASTOS*/
import {  FaGear } from "react-icons/fa6"; /* CONFIGURACION*/
import { RiMoneyDollarCircleFill } from "react-icons/ri"; /* PRESUPUESTOS*/
import { VscGraph } from "react-icons/vsc"; /* DASHBOARD*/
import "./LaterPage.css"


const LateralPageUsuario = () => {
  return (
    <div className="bg-light d-flex flex-column align-items-center p-3" style={{ width: "15%", height: "100vh" }}>
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
          <a className="nav-link text-dark d-flex align-items-center" href="#">
            <VscGraph className="me-2 fs-4" />
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark d-flex align-items-center" href="gastos.html">
            <FaMoneyBills className="me-2 fs-4" />
            Gastos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark d-flex align-items-center" href="#">
            <RiMoneyDollarCircleFill className="me-2 fs-4" />
            Presupuestos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark d-flex align-items-center active" href="#">
            <FaGear className="me-2 fs-4" />
            Configuración
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-danger d-flex align-items-center" href="#">
            <IoExitOutline className="me-2 fs-4" />
            Salir
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LateralPageUsuario;