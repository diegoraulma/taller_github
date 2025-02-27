import { useState } from "react";


interface OrdenarGastosProps {
    showModal: boolean;
    onCloseModal: () => void;
    onAplicarOrden: (orden: string) => void;
}

const ModalOrdenarGastos = ({ showModal, onCloseModal, onAplicarOrden }: OrdenarGastosProps) => {
    const [orden, setOrden] = useState<string>("fecha");  // ✅ Estado para el orden seleccionado

    if (!showModal) return null;

    return (
        <>
        {showModal && <div className="modal-backdrop show"></div>}
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
                            <select 
                                id="orden"
                                className="form-select"
                                value={orden}  // ✅ Usa el estado
                                onChange={(e) => setOrden(e.target.value)}  // ✅ Actualiza el estado
                            >
                                <option value="fecha">Fecha</option>
                                <option value="monto">Monto</option>
                            </select>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onCloseModal}>
                            Cancelar
                        </button>
                        <button 
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                onAplicarOrden(orden);  // ✅ Pasa el orden seleccionado
                                onCloseModal();
                            }}
                        >
                            Aplicar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ModalOrdenarGastos;