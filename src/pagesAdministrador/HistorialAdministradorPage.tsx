import React from "react";
import "../styles/styles.css";
import LateralPageAdministrador from "../componentes/LateralPageAdministrador";
import TablaHistorial from "../componentes/TablaHistorial";
import { ListadoHistorialItem } from "../types";

const HistorialAdministradorPage: React.FC = () => {
  // Datos de ejemplo
  const data: ListadoHistorialItem[] = [
    { id: "001", nombre: "Jessica", correo: "jess@taxes.com", fecha: "12/12/2024", hora: "17:50", accion: "Borrar" },
    { id: "002", nombre: "Jhon", correo: "jon@taxes.com", fecha: "17/12/2024", hora: "19:50", accion: "Agregar" },
    { id: "003", nombre: "Diego", correo: "diego@taxes.com", fecha: "22/12/2024", hora: "14:20", accion: "Editar" },
    { id: "004", nombre: "Juan", correo: "juan@taxes.com", fecha: "02/12/2024", hora: "13:50", accion: "Borrar" },
    { id: "005", nombre: "Luis", correo: "luis@taxes.com", fecha: "07/12/2024", hora: "12:50", accion: "Borrar" },
  ];

  return (
    <div className="body">
      {/* Menú Lateral */}
      <LateralPageAdministrador />

      {/* Contenido Principal */}
      <div id="contenido" className="flex-grow-1 p-4">
        <header className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="fs-4">Historial</h1>
        </header>

        {/* Tabla de Historial */}
        <TablaHistorial data={data} />
      </div>
    </div>
  );
};

export default HistorialAdministradorPage;
