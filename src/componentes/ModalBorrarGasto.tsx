interface BorrarGastoProps {
  showModal: boolean;
  onCloseModal: () => void;
  onBorrarGasto: () => void;
}

const ModalBorrarGasto = ({ showModal, onCloseModal, onBorrarGasto }: BorrarGastoProps) => {
  if (!showModal) return null; // 🔹 No renderizar nada si el modal está cerrado

  return (
    <>
    {showModal && <div className="modal-backdrop show"></div>}
      <div className="modal fade show d-block" tabIndex={-1} aria-hidden={!showModal}>
          <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title">Confirmar Eliminación</h5>
                      <button type="button" className="btn-close" onClick={onCloseModal}></button>
                  </div>
                  <div className="modal-body">
                      <p>¿Estás seguro de que deseas eliminar este gasto? Esta acción no se puede deshacer.</p>
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" onClick={onCloseModal}>
                          Cancelar
                      </button>
                      <button type="button" className="btn btn-danger" onClick={onBorrarGasto}>
                          Eliminar
                      </button>
                  </div>
              </div>
          </div>
      </div>
      </>
  );
};

export default ModalBorrarGasto;
