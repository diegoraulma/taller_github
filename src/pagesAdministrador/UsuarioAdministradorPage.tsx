import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Table } from "react-bootstrap";
import '../pages/styleperfil.css'; // Importamos nuestro styleperfil.css
import LateralPageAdministrador from "../componentes/LateralPageAdministrador"; // Aqui esta el menu lateral

type User = {
  id?: number;
  nombre: string;
  username: string;
  password: string;
  estado: boolean;
  rol: string;
};

const UsuarioAdministradorPage: React.FC = () => {

  const storedUsuario = JSON.parse(sessionStorage.getItem("usuario") || "{}")

  const [users, setUsers] = useState<User[]>([])

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [filterRole, setFilterRole] = useState("");

  const httpCrearRegistroHistorial = async (usuarioId:number, accion:string) => {
    const url = "http://localhost:5000/historial/";
    try {
      const resp = await fetch(url,{
        method: "POST",
        body: JSON.stringify({usuarioId,accion}),
        headers: { "Content-Type": "application/json" }
      });

      const data = await resp.json();
      console.log("Respuesta del backend:", data);
      
      if (resp.ok && data.msg === "") {
        console.log("Registro de accion en el historial")
      }
    } catch(error){
      console.error("Error de registro a historial:", error);
      alert("Error al conectar con el servidor.");
    }
  }

  const httpObtenerUsuarios = async () => {
    const url = "http://localhost:5000/usuarios/";
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            if (data.msg === "") {
                setUsers(data.usuario);
            } else {
                console.error(`Error al obtener usuarios: ${data.msg}`);
            }
        } catch (error) {
            console.error("Error al conectar con el servidor:", error);
        }
  }

  const httpGuardarUsuario = async (nuevoUsuario: User) => {
      const url = "http://localhost:5000/usuarios/"; // Asegurar que esta URL es correcta
      try {
          console.log("Intentando guardar usuario:", nuevoUsuario);
          const resp = await fetch(url, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(nuevoUsuario),
          });
  
          if (!resp.ok) {
              throw new Error(`Error HTTP: ${resp.status}`);
          }
  
          const data = await resp.json();
          console.log("Respuesta del backend:", data);
  
          if (data.msg === "") {
              console.log("Usuario guardado con éxito");
              httpObtenerUsuarios(); // Recargar la lista de gastos
              setShowAddModal(false);
          } else {
              console.error(`Error al guardar usuario: ${data.msg}`);
          }
      } catch (error) {
          console.error("Error al conectar con el servidor:", error);
      }
  };

  const httpEditarUsuario = async(id:number, usuarioActualizado:User) =>{
    const url = `http://localhost:5000/usuarios/${id}`;
    try{
      console.log("Intentando actualizar usuario:", usuarioActualizado);

      const resp = await fetch(url,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuarioActualizado),
      });

      if(!resp.ok){
        throw new Error(`Error HTTP: ${resp.status}`);
      }

      const data = await resp.json();
      console.log("Respuesta del backend:", data);

      if(data.msg === ""){
        console.log("Usuario actualizado con éxito");
        httpObtenerUsuarios(); // Recargar la lista de gastos
        setShowEditModal(false);
      } else{
        console.error(`Error al actualizar usuario: ${data.msg}`);
      }
    } catch(error){
      console.error("Error al conectar con el servidor:", error);
      return { msg: "Error al actualizar usuario" };
    }
  }

  const httpEliminarUsuario = async(id:number) =>{
    const url = `http://localhost:5000/usuarios/${id}`;
    try{
      console.log("Intentando eliminar usuario con ID:", id);

      const resp = await fetch(url,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if(!resp.ok){
        throw new Error(`Error HTTP: ${resp.status}`);
      }

      const data = await resp.json();
      console.log("Respuesta del backend:", data);

      if(data.msg === ""){
        console.log("Usuario eliminado con éxito");
        httpObtenerUsuarios(); // Recargar la lista de gastos
        setShowDeleteModal(false);
      } else{
        console.error(`Error al eliminar usuario: ${data.msg}`);
      }
    } catch(error){
      console.error("Error al conectar con el servidor:", error);
      return { msg: "Error al eliminar usuario" };
    }
  }

  useEffect(()=>{
    httpObtenerUsuarios()
  },[])

  const filteredUsers = filterRole ? users.filter(user => user.rol === filterRole) : users;

  return (
    <div className="body">
      {/* Menú Lateral */}
      <LateralPageAdministrador/>

      {/* Contenido Principal */}
      <div id="contenido">
        <header className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="fs-4">Mis usuarios</h1>
          <div className="d-flex gap-2">
            <Form.Select onChange={(e) => setFilterRole(e.target.value)}>
              <option value="">Todos los roles</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </Form.Select>
            <Button variant="primary" onClick={() => setShowAddModal(true)}>
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
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nombre}</td>
                <td>{user.username}</td>
                <td>****</td>
                <td>{user.rol}</td>
                <td>
                  <Button variant="outline-primary" size="sm" onClick={() => { setSelectedUser(user); setShowEditModal(true); }}>
                    ✏️
                  </Button>
                  <Button variant="outline-danger" size="sm" onClick={() => { setSelectedUser(user); setShowDeleteModal(true); }}>
                    🗑️
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Modal Agregar Usuario */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const newUser: User = {
              nombre: form.nombre.value,
              username: form.correo.value,
              password: form.contraseña.value,
              estado:true,
              rol: form.rol.value,
            };
            await httpGuardarUsuario(newUser);
            await httpCrearRegistroHistorial(storedUsuario.id,"Agregar");
            form.reset();
          }}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" name="nombre" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Correo</Form.Label>
              <Form.Control type="email" name="correo" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" name="contraseña" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Rol</Form.Label>
              <Form.Select name="rol">
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </Form.Select>
            </Form.Group>
            <Button type="submit" variant="primary">Guardar</Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modal Editar Usuario */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const updatedUser: User = {
              id: selectedUser!.id,
              nombre: form.nombre.value,
              username: form.correo.value,
              password: form.contraseña.value,
              estado: true,
              rol: form.rol.value,
            };
            httpEditarUsuario(Number(updatedUser.id),updatedUser);
            await httpCrearRegistroHistorial(storedUsuario.id,"Editar");
            form.reset();
          }}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" name="nombre" defaultValue={selectedUser?.nombre} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Correo</Form.Label>
              <Form.Control type="email" name="correo" defaultValue={selectedUser?.username} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" name="contraseña" defaultValue={selectedUser?.password} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Rol</Form.Label>
              <Form.Select name="rol" defaultValue={selectedUser?.rol}>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </Form.Select>
            </Form.Group>
            <Button type="submit" variant="primary">Guardar</Button>
          </Form>
        </Modal.Body>
      </Modal>
      
      {/* Modal Eliminar Usuario */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>¿Estás seguro de que deseas eliminar este usuario? Esta acción no se puede deshacer.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={async () => {
            httpEliminarUsuario(Number(selectedUser!.id)),
            await httpCrearRegistroHistorial(storedUsuario.id,"Borrar")
          }}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UsuarioAdministradorPage;
