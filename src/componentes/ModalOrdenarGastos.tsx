interface OrdenarGastosProps {
    showModal: boolean;
    onCloseModal: () => void;
    onAplicarOrden: (orden: string) => void;
}

const ModalOrdenarGastos = ({ showModal, onCloseModal, onAplicarOrden }: OrdenarGastosProps) => {
    if (!showModal) return null;

    const aplicarOrden = () => {
        const orden = (document.getElementById("orden") as HTMLSelectElement).value;
        onAplicarOrden(orden);
        onCloseModal();
    };

    return (
        <div className="modal fade show d-block" tabIndex={-1} aria-hidden={!showModal}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Ordenar Gastos</h5>
                        <button type="button" className="btn-close" onClick={onCloseModal}></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label className="form-label">Ordenar por:</label>
                            <select id="orden" className="form-select">
                                <option value="fecha">Fecha</option>
                                <option value="monto">Monto</option>
                            </select>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onCloseModal}>
                            Cancelar
                        </button>
                        <button type="button" className="btn btn-primary" onClick={aplicarOrden}>
                            Aplicar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalOrdenarGastos;