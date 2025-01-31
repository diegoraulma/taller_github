import { useState } from "react";

const ModalesFiltrar = () => {
    const [filtro, setFiltro] = useState("Fecha");

    return (
        <div className="modal fade" id="agregarFiltrarModal" tabIndex={-1} aria-labelledby="agregarFiltrarModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="agregarFiltrarModalLabel">Filtrar y Ordenar</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label><strong>Filtrar</strong></label>
                                <select className="form-select mt-2" value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                                    <option value="Fecha">Fecha</option>
                                    <option value="Categoria">Categoría</option>
                                    <option value="Monto">Monto</option>
                                </select>
                            </div>

                            {filtro === "Fecha" && (
                                <div>
                                    <div className="mb-3">
                                        <label htmlFor="fechaDesde" className="form-label">Desde</label>
                                        <input type="date" className="form-control" id="fechaDesde" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="fechaHasta" className="form-label">Hasta</label>
                                        <input type="date" className="form-control" id="fechaHasta" required />
                                    </div>
                                </div>
                            )}

                            {filtro === "Categoria" && (
                                <div className="mb-3">
                                    <label htmlFor="categoria" className="form-label">Categoría</label>
                                    <select className="form-select" id="categoria">
                                        <option value="Servicios">Servicios</option>
                                        <option value="Alimentacion">Alimentación</option>
                                        <option value="Ocio">Ocio</option>
                                    </select>
                                </div>
                            )}

                            {filtro === "Monto" && (
                                <div>
                                    <div className="mb-3">
                                        <label htmlFor="montoDesde" className="form-label">Desde</label>
                                        <input type="number" className="form-control" id="montoDesde" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="montoHasta" className="form-label">Hasta</label>
                                        <input type="number" className="form-control" id="montoHasta" required />
                                    </div>
                                </div>
                            )}

                            <div className="mb-3">
                                <label><strong>Ordenar</strong></label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="ordenar" className="form-label">Ordenar por</label>
                                <select className="form-select" id="ordenar">
                                    <option value="Fecha">Fecha</option>
                                    <option value="Monto">Monto</option>
                                    <option value="Recurrente">Recurrente</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary">Filtrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalesFiltrar;
