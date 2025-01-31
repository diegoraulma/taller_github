import React from "react";
import { Modal, Button } from "react-bootstrap";

type ModalEliminarUsuarioProps = {
  mostrar: boolean;
  onCerrar: () => void;
  onEliminar: () => void;
};

const ModalEliminarUsuario: React.FC<ModalEliminarUsuarioProps> = ({ mostrar, onCerrar, onEliminar }) => {
  return (
    <Modal show={mostrar} onHide={onCerrar}>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>¿Estás seguro de que deseas eliminar este usuario? Esta acción no se puede deshacer.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCerrar}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={onEliminar}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEliminarUsuario;
