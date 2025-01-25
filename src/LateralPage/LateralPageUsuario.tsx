import { IoExitOutline } from "react-icons/io5";
import { FaMoneyBills, FaGear } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { VscGraph } from "react-icons/vsc";
import "../pages/LaterPage.css"


const LateralPageUsuario = () => {
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
            <FaMoneyBills className="me-2 fs-2" />
            Gastos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black-50 mb-4 opcioneslateral" href="#">
            <RiMoneyDollarCircleFill className="me-2 fs-2" />
            Presupuestos
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




export default LateralPageUsuario

