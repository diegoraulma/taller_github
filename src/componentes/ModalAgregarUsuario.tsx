import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

type ModalAgregarUsuarioProps = {
  mostrar: boolean;
  onCerrar: () => void;
  onAgregarUsuario: (usuario: { id: string; nombre: string; correo: string; contraseña: string; rol: string }) => void;
};

const ModalAgregarUsuario: React.FC<ModalAgregarUsuarioProps> = ({ mostrar, onCerrar, onAgregarUsuario }) => {
  const manejarEnvio = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formulario = e.target as HTMLFormElement;
    const nuevoUsuario = {
      id: String(Math.floor(Math.random() * 1000)), // Generar un ID único
      nombre: formulario.nombre.value,
      correo: formulario.correo.value,
      contraseña: formulario.contraseña.value,
      rol: formulario.rol.value,
    };
    onAgregarUsuario(nuevoUsuario);
    formulario.reset();
    onCerrar();
  };

  return (
    <Modal show={mostrar} onHide={onCerrar}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={manejarEnvio}>
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
  );
};

export default ModalAgregarUsuario;