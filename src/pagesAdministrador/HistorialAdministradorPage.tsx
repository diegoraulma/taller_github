import React from "react";
import '../pages/styleperfil.css'; // Importamos nuestro styleperfil.css
import LateralPageAdministrador from "../componentes/LateralPageAdministrador"; // Aquí está el menú lateral
import { FaTrash, FaPlus, FaEdit } from "react-icons/fa";

interface ListadoHistorialItem {
  id : string;
  nombre : string;
  correo : string;
  fecha : string;
  hora : string;
  accion : string;
}

interface ListadoHistorialProps {
  data : ListadoHistorialItem[]
}



const HistorialAdministradorPage = (props : ListadoHistorialProps) => {
  const data : ListadoHistorialItem[] = [
    { id: "001", nombre: "Jessica", correo: "jess@taxes.com", fecha: "12/12/2024", hora: "17:50", accion: "Borrar" },
    { id: "002", nombre: "Jhon", correo: "jon@taxes.com", fecha:  "17/12/2024", hora: "19:50", accion: "Agregar" },
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
        <table className="table table-hover align-middle">
          <thead className="table-primary">
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item : ListadoHistorialItem) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.correo}</td>
                <td>{String(item.fecha)}</td>
                <td>{item.hora}</td>
                <td>
                  {item.accion === "Borrar" && (
                    <button className="btn btn-sm btn-outline-danger me-2">
                      <FaTrash />
                    </button>
                  )}
                  {item.accion === "Agregar" && (
                    <button className="btn btn-sm btn-outline-success me-2">
                      <FaPlus />
                    </button>
                  )}
                  {item.accion === "Editar" && (
                    <button className="btn btn-sm btn-outline-primary">
                      <FaEdit />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistorialAdministradorPage;