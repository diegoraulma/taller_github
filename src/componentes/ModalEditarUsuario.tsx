import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

type ModalEditarUsuarioProps = {
  mostrar: boolean;
  onCerrar: () => void;
  usuario: { id: string; nombre: string; correo: string; contraseña: string; rol: string };
  onEditarUsuario: (usuario: { id: string; nombre: string; correo: string; contraseña: string; rol: string }) => void;
};

const ModalEditarUsuario: React.FC<ModalEditarUsuarioProps> = ({ mostrar, onCerrar, usuario, onEditarUsuario }) => {
  const manejarEnvio = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formulario = e.target as HTMLFormElement;
    const usuarioActualizado = {
      id: usuario.id,
      nombre: formulario.nombre.value,
      correo: formulario.correo.value,
      contraseña: formulario.contraseña.value,
      rol: formulario.rol.value,
    };
    onEditarUsuario(usuarioActualizado);
    formulario.reset();
    onCerrar();
  };

  return (
    <Modal show={mostrar} onHide={onCerrar}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={manejarEnvio}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" name="nombre" defaultValue={usuario.nombre} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" name="correo" defaultValue={usuario.correo} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" name="contraseña" defaultValue={usuario.contraseña} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Rol</Form.Label>
            <Form.Select name="rol" defaultValue={usuario.rol}>
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

export default ModalEditarUsuario;