import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

type ModalFiltrarUsuarioProps = {
  mostrar: boolean;
  onCerrar: () => void;
  onFiltrar: (rol: string) => void;
};

const ModalFiltrarUsuario: React.FC<ModalFiltrarUsuarioProps> = ({ mostrar, onCerrar, onFiltrar }) => {
  const [rolSeleccionado, setRolSeleccionado] = useState("");

  const manejarAceptar = () => {
    onFiltrar(rolSeleccionado); // Envía el rol seleccionado al componente padre
    onCerrar(); // Cierra el modal
  };

  return (
    <Modal show={mostrar} onHide={onCerrar}>
      <Modal.Header closeButton>
        <Modal.Title>Filtrar Usuarios por Rol</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Seleccione un rol</Form.Label>
            <Form.Select
              value={rolSeleccionado}
              onChange={(e) => setRolSeleccionado(e.target.value)}
            >
              <option value="">Todos</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCerrar}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={manejarAceptar}>
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalFiltrarUsuario;
