// src/componentes/TablaHistorial.tsx
import React from "react";
import { FaTrash, FaPlus, FaEdit } from "react-icons/fa";
import { ListadoHistorialItem } from "../types";

interface TablaHistorialProps {
  data: ListadoHistorialItem[];
}

const TablaHistorial: React.FC<TablaHistorialProps> = ({ data }) => {
  return (
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
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nombre}</td>
            <td>{item.correo}</td>
            <td>{item.fecha}</td>
            <td>{item.hora}</td>
            <td>
              {item.accion === "Borrar" && (
                <button className="btn btn-sm btn-outline-danger me-2" aria-label="Borrar">
                  <FaTrash />
                </button>
              )}
              {item.accion === "Agregar" && (
                <button className="btn btn-sm btn-outline-success me-2" aria-label="Agregar">
                  <FaPlus />
                </button>
              )}
              {item.accion === "Editar" && (
                <button className="btn btn-sm btn-outline-primary" aria-label="Editar">
                  <FaEdit />
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaHistorial;
