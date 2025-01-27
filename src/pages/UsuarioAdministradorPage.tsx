import React from "react";
import { FaUsers } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { FaMoneyBills } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";

const UsuarioAdministrador = () => {
  return (
    <div className="body">
      {/* Menú Lateral */}
      <div id="cajamenu">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile Picture"
          className="profile-img"
        />
        <h2>Jessica Straus</h2>
        <div id="menu">
          <a href="#">
            <VscGraph className="me-2 fs-2" />
            Dashboard
          </a>
          <a href="#" className="activo">
            <FaUsers className="me-2 fs-2" />
            Usuarios
          </a>
          <a href="#">
            <FaMoneyBills className="me-2 fs-2" />
            Historial
          </a>
          <a href="#">
            <FaGear className="me-2 fs-2" />
            Configuración
          </a>
          <a href="#">
            <IoExitOutline className="me-2 fs-2" />
            Salir
          </a>
        </div>
      </div>

      {/* Contenido Principal */}
      <div id="contenido">
        <header className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="fs-4">Mis usuarios</h1>
          <div className="d-flex gap-2">
            <button className="btn btn-primary">Filtrar</button>
            <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addUserModal">
              Agregar
            </button>
          </div>
        </header>

        {/* Tabla de Usuarios */}
        <table className="table table-hover align-middle">
          <thead className="table-primary">
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Contraseña</th>
              <th>Rol</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>Jessica</td>
              <td>jess@taxes.com</td>
              <td>1234</td>
              <td>Admin</td>
              <td>
                <button className="btn btn-sm btn-outline-primary">✏️</button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteUserModal"
                >
                  🗑️
                </button>
              </td>
            </tr>
            <tr>
              <td>002</td>
              <td>Jhon</td>
              <td>jon@taxes.com</td>
              <td>abcd</td>
              <td>User</td>
              <td>
                <button className="btn btn-sm btn-outline-primary">✏️</button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteUserModal"
                >
                  🗑️
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal Agregar Usuario */}
      <div className="modal fade" id="addUserModal" tabIndex={-1} aria-labelledby="addUserModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addUserModalLabel">Agregar Usuario</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="nombre" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">Correo</label>
                  <input type="email" className="form-control" id="correo" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="contraseña" className="form-label">Contraseña</label>
                  <input type="text" className="form-control" id="contraseña" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="rol" className="form-label">Rol</label>
                  <select className="form-select" id="rol">
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Eliminar Usuario */}
      <div
        className="modal fade"
        id="deleteUserModal"
        tabIndex={-1}
        aria-labelledby="deleteUserModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteUserModalLabel">Eliminar Usuario</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>¿Estás seguro de que deseas eliminar este usuario? Esta acción no se puede deshacer.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cancelar
              </button>
              <button type="button" className="btn btn-danger">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsuarioAdministrador;