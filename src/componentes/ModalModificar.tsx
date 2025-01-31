import { useState } from "react";

const ModalModificar = () => {
    const [mod, setMod] = useState("Fecha");

    return (
        <div className="modal fade" id="modificarGastoModal" tabIndex={-1} aria-labelledby="modificarGastoModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modificarGastoModalLabel">Modificar Gasto</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label><strong>Modificar</strong></label>
                                <select className="form-select mt-2" value={mod} onChange={(e) => setMod(e.target.value)}>
                                    <option value="Fecha">Fecha</option>
                                    <option value="Categoría">Categoría</option>
                                    <option value="Descripción">Descripción</option>
                                    <option value="Monto">Monto</option>
                                </select>
                            </div>
                            {mod === "Fecha" && (
                                <div>
                                    <div className="mb-3">
                                        <label htmlFor="nuevaFecha" className="form-label">Seleccionar nueva fecha:</label>
                                        <input type="date" className="form-control" id="nuevaFecha" required />
                                    </div>
                                </div>
                            )}

                            {mod === "Categoría" && (
                                <div className="mb-3">
                                    <label htmlFor="nuevaCategoria" className="form-label">Seleccionar nueva categoría</label>
                                    <select className="form-select" id="nuevaCategoria">
                                        <option value="Servicios">Servicios</option>
                                        <option value="Alimentacion">Alimentación</option>
                                        <option value="Ocio">Ocio</option>
                                    </select>
                                </div>
                            )}

                            {mod === "Monto" && (
                                <div>
                                    <div className="mb-3">
                                        <label htmlFor="nuevoMonto" className="form-label">Ingresar nuevo monto</label>
                                        <input type="number" className="form-control" id="nuevoMonto" required />
                                    </div>
                                </div>
                            )}

                            {mod === "Descripción" && (
                                <div>
                                    <div className="mb-3">
                                        <label htmlFor="nuevaDescripcion" className="form-label">Ingresar nueva descripción</label>
                                        <input type="text" className="form-control" id="nuevaDescripcion" required />
                                    </div>
                                </div>
                            )}

                            <div className="mb-3">
                                <label><strong>Es un gasto recurrente?</strong></label>
                            </div>
                            <div className="mb-3">
                                <input type="checkbox" className="field" id="nuevaDescripcion"/>
                            </div>


                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary">Modificar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalModificar;