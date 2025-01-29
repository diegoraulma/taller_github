import React, { useState } from "react";
import { FaUsers, FaMoneyBills, FaGear } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { Modal, Button, Form, Table } from "react-bootstrap";

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
};

const UsuarioAdministradorPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: "001", name: "Jessica", email: "jess@taxes.com", password: "12345", role: "Admin" },
    { id: "002", name: "Jhon", email: "jon@taxes.com", password: "6789", role: "User" },
    { id: "003", name: "Diego", email: "dieg@taxes.com", password: "1011", role: "User" },
    { id: "004", name: "Juan", email: "juan@taxes.com", password: "1213", role: "User" },
    { id: "005", name: "Luis", email: "luis@taxes.com", password: "1415", role: "User" },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [filterRole, setFilterRole] = useState("");

  const handleAddUser = (user: User) => {
    setUsers([...users, user]);
    setShowAddModal(false);
  };

  const handleEditUser = (updatedUser: User) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
    setShowEditModal(false);
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(user => user.id !== userId));
    setShowDeleteModal(false);
  };

  const filteredUsers = filterRole ? users.filter(user => user.role === filterRole) : users;

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
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>****</td>
                <td>{user.role}</td>
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
          <Form onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const newUser: User = {
              id: String(users.length + 1),
              name: form.nombre.value,
              email: form.correo.value,
              password: form.contraseña.value,
              role: form.rol.value,
            };
            handleAddUser(newUser);
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
          <Form onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const updatedUser: User = {
              id: selectedUser!.id,
              name: form.nombre.value,
              email: form.correo.value,
              password: form.contraseña.value,
              role: form.rol.value,
            };
            handleEditUser(updatedUser);
            form.reset();
          }}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" name="nombre" defaultValue={selectedUser?.name} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Correo</Form.Label>
              <Form.Control type="email" name="correo" defaultValue={selectedUser?.email} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" name="contraseña" defaultValue={selectedUser?.password} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Rol</Form.Label>
              <Form.Select name="rol" defaultValue={selectedUser?.role}>
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
          <Button variant="danger" onClick={() => handleDeleteUser(selectedUser!.id)}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UsuarioAdministradorPage;
