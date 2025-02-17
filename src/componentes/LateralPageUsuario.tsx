import { IoExitOutline } from "react-icons/io5"; /* SALIR*/
import { FaMoneyBills} from "react-icons/fa6"; /* GASTOS*/
import {  FaGear } from "react-icons/fa6"; /* CONFIGURACION*/
import { RiMoneyDollarCircleFill } from "react-icons/ri"; /* PRESUPUESTOS*/
import { VscGraph } from "react-icons/vsc"; /* DASHBOARD*/
import "./LaterPage.css"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const LateralPageUsuario = () => {
  const navigate = useNavigate()

  const [usuario, setUsuario] = useState({
    nombre: "Cargando...",
  });

  const obtenerUsuario = async () => {
    const userData = JSON.parse(sessionStorage.getItem("usuario") || "{}");
    const userId = userData.id || 1; // Obtiene el ID del usuario logueado

    const resp = await fetch(`http://localhost:5000/usuarios/${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await resp.json();    
    console.log("Respuesta del backend:", data); // 🔹 Imprime la respuesta en la consola

    if (data && data.nombre) {
      console.log("Usuario obtenido:", data);
      setUsuario({
          nombre: data.nombre, // Ajusta el campo correcto
      });
    } else {
        console.error("Error al obtener usuario:", data);
    }
}
  useEffect(() => {
    obtenerUsuario(); // Llamamos a la función al cargar el componente
  }, []);


  return (
    <div className="bg-light d-flex flex-column align-items-center p-3" style={{ width: "18.6%", height: "100vh"}}>
      {/* Imagen de perfil */}
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
        className="rounded-circle mb-3"
        width="120"
        height="120"
        alt="Profile"
      />
      <h6 className="fs-4 text-dark">{usuario.nombre}</h6>

      {/* Menú de navegación */}
      <ul className="nav flex-column w-100 mt-4">
        <li className="nav-item opcioneslateral">
          <a className="nav-link text-dark d-flex align-items-center" href="">
            <VscGraph className="me-2 fs-4" />
            Dashboard
          </a>
        </li>
        <li className="nav-item opcioneslateral">
          <a className="nav-link text-dark d-flex align-items-center" href=""
            onClick = {()=>{
              navigate("/gastos")
            }}>
            <FaMoneyBills className="me-2 fs-4" />
            Gastos
          </a>
        </li>
        <li className="nav-item opcioneslateral">
          <a className="nav-link text-dark d-flex align-items-center" href=""
            onClick = {()=>{
              navigate("/presupuestosusu")
            }}>
            <RiMoneyDollarCircleFill className="me-2 fs-4" />
            Presupuestos
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
            onClick = {()=>{
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

export default LateralPageUsuario;