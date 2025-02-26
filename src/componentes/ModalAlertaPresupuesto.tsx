interface ModalAlertaPresupuestoProps {
    showModal: boolean;
    onCloseModal: () => void;
  }
  
  const ModalAlertaPresupuesto = ({ showModal, onCloseModal }: ModalAlertaPresupuestoProps) => {
    if (!showModal) return null; // 🔹 No renderizar nada si el modal está cerrado
  
    return (
      <>
      {showModal && <div className="modal-backdrop show"></div>}
        <div className="modal fade show d-block" tabIndex={-1} aria-hidden={!showModal}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Alerta!</h5>
                    </div>
                    <div className="modal-body">
                        Acabas de exceder el presupuesto de servicios
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={onCloseModal}>
                            Aceptar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
  };
  
  export default ModalAlertaPresupuesto;
  