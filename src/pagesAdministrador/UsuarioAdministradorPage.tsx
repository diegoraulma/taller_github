import React, { useState } from "react";
import { FaUsers, FaMoneyBills, FaGear } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { Button, Form, Table } from "react-bootstrap";
import ModalAgregarUsuario from "../componentes/ModalAgregarUsuario";
import ModalEditarUsuario from "../componentes/ModalEditarUsuario";
import ModalEliminarUsuario from "../componentes/ModalEliminarUsuario";
import ModalFiltrarUsuario from "../componentes/ModalFiltrarUsuario";
import "../styles/styles.css";

type Usuario = {
  id: string;
  nombre: string;
  correo: string;
  contraseña: string;
  rol: string;
};

const UsuarioAdministradorPage: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([
    { id: "001", nombre: "Jessica", correo: "jess@taxes.com", contraseña: "12345", rol: "Admin" },
    { id: "002", nombre: "Jhon", correo: "jon@taxes.com", contraseña: "6789", rol: "User" },
    { id: "003", nombre: "Diego", correo: "dieg@taxes.com", contraseña: "1011", rol: "User" },
    { id: "004", nombre: "Juan", correo: "juan@taxes.com", contraseña: "1213", rol: "User" },
    { id: "005", nombre: "Luis", correo: "luis@taxes.com", contraseña: "1415", rol: "User" },
  ]);

  const [mostrarModalAgregar, setMostrarModalAgregar] = useState(false);
  const [mostrarModalEditar, setMostrarModalEditar] = useState(false);
  const [mostrarModalEliminar, setMostrarModalEliminar] = useState(false);
  const [mostrarModalFiltrar, setMostrarModalFiltrar] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState<Usuario | null>(null);
  const [filtroRol, setFiltroRol] = useState("");

  const manejarAgregarUsuario = (usuario: Usuario) => {
    setUsuarios([...usuarios, usuario]);
  };

  const manejarEditarUsuario = (usuarioActualizado: Usuario) => {
    setUsuarios(usuarios.map(usuario => (usuario.id === usuarioActualizado.id ? usuarioActualizado : usuario)));
  };

  const manejarEliminarUsuario = (idUsuario: string) => {
    setUsuarios(usuarios.filter(usuario => usuario.id !== idUsuario));
  };

  const manejarFiltrarUsuario = (rol: string) => {
    setFiltroRol(rol); // Actualiza el estado del filtro
  };

  const usuariosFiltrados = filtroRol ? usuarios.filter(usuario => usuario.rol === filtroRol) : usuarios;

  return (
    <div className="body">
      {/* Menú Lateral */}
      <div id="cajamenu">
        <img
          src="https://via.placeholder.com/100"
          alt="Imagen de perfil"
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
            <Button variant="primary" onClick={() => setMostrarModalFiltrar(true)}>
              Filtrar
            </Button>
            <Button variant="success" onClick={() => setMostrarModalAgregar(true)}>
              Agregar
            </Button>
          </div>
        </header>

        {/* Tabla de Usuarios */}
        <Table hover>
          <thead>
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
            {usuariosFiltrados.map(usuario => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.correo}</td>
                <td>****</td>
                <td>{usuario.rol}</td>
                <td>
                  <Button variant="outline-primary" size="sm" onClick={() => { setUsuarioSeleccionado(usuario); setMostrarModalEditar(true); }}>
                    ✏️
                  </Button>
                  <Button variant="outline-danger" size="sm" onClick={() => { setUsuarioSeleccionado(usuario); setMostrarModalEliminar(true); }}>
                    🗑️
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Modales */}
      <ModalAgregarUsuario
        mostrar={mostrarModalAgregar}
        onCerrar={() => setMostrarModalAgregar(false)}
        onAgregarUsuario={manejarAgregarUsuario}
      />
      {usuarioSeleccionado && (
        <ModalEditarUsuario
          mostrar={mostrarModalEditar}
          onCerrar={() => setMostrarModalEditar(false)}
          usuario={usuarioSeleccionado}
          onEditarUsuario={manejarEditarUsuario}
        />
      )}
      <ModalEliminarUsuario
        mostrar={mostrarModalEliminar}
        onCerrar={() => setMostrarModalEliminar(false)}
        onEliminar={() => {
          if (usuarioSeleccionado) manejarEliminarUsuario(usuarioSeleccionado.id);
          setMostrarModalEliminar(false);
        }}
      />
      <ModalFiltrarUsuario
        mostrar={mostrarModalFiltrar}
        onCerrar={() => setMostrarModalFiltrar(false)}
        onFiltrar={manejarFiltrarUsuario}
      />
    </div>
  );
};

export default UsuarioAdministradorPage;
