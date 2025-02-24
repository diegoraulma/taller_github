import { useState } from "react";

interface Categoria {
    id?: number;
    nombre: string;
    presupuestoTotal?: number;
};

interface Presupuesto {
    id?: number;
    categoriaId: number;
    monto: number;
    Categoria?: Categoria;
};

interface ModalesPresupuestoProps {
    presupuestoSeleccionado: Presupuesto | null;
    showModalAgregar: boolean;
    closeModalAgregar: () => void;
    showModalEditar: boolean;
    closeModalEditar: () => void;
    showModalEliminar: boolean;
    closeModalEliminar: () => void;
    httpGuardarPresupuesto: (nuevoPpto: Presupuesto) => void;
    httpEditarPresupuesto: (id: number, pptoActualizado: Presupuesto) => void;
    httpEliminarPresupuesto: (id: number) => void;
}

const ModalesPresupuesto = (props: ModalesPresupuestoProps) => {
    // ✅ Estados para manejar los datos del formulario
    const [categoriaId, setCategoriaId] = useState<number>(1);
    const [monto, setMonto] = useState<number>(0);

    const handleCategoriaIdChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoriaId(parseInt(e.target.value))
    };

    const handleMontoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
    
        // ✅ Permitir solo números positivos o vacío
        if (value === "" || (/^\d+$/.test(value) && Number(value) >= 0)) {
            setMonto(value === "" ? 0 : parseFloat(value) || 0);
        }
    };

    // ✅ Función para manejar el Guardado de Presupuesto
    const handleGuardarPresupuesto = (e: React.FormEvent) => {
        e.preventDefault(); // ✅ Evita el refresco de la página
        const nuevoPresupuesto: Presupuesto = { categoriaId, monto };
        props.httpGuardarPresupuesto(nuevoPresupuesto);
        props.closeModalAgregar();
    };

    // ✅ Función para manejar la Edición de Presupuesto
    const handleEditarPresupuesto = (e: React.FormEvent) => {
        e.preventDefault();
        if (!props.presupuestoSeleccionado?.id) return;
        const presupuestoEditado: Presupuesto = { categoriaId, monto };
        props.httpEditarPresupuesto(props.presupuestoSeleccionado.id, presupuestoEditado); // ⚠️ El ID debe obtenerse dinámicamente
        props.closeModalEditar();
    };

    const handleEliminarPresupuesto = () => {
        if (!props.presupuestoSeleccionado?.id) return;
        props.httpEliminarPresupuesto(props.presupuestoSeleccionado.id); // ⚠️ El ID debe obtenerse dinámicamente
        props.closeModalEditar();
    };

    return (
      <>
        {/* Modal Agregar Presupuesto */}
        {props.showModalAgregar && <div className="modal-backdrop show"></div>}
        <div className={`modal ${props.showModalAgregar ? "d-block" : "d-none"}`} tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Agregar Presupuesto</h5>
                        <button type="button" className="btn-close" onClick={props.closeModalAgregar}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleGuardarPresupuesto}>
                            <div className="mb-3">
                                <label className="form-label">Categoría</label>
                                <select className="form-select" value={categoriaId} onChange={handleCategoriaIdChange}>
                                    <option value="1">Ocio</option>
                                    <option value="2">Servicios</option>
                                    <option value="3">Alimentación</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Monto</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    value={monto} 
                                    onChange={handleMontoChange} 
                                    placeholder="Monto"
                                    required
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={props.closeModalAgregar}>Cancelar</button>
                                <button type="submit" className="btn btn-primary">Aceptar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        {/* Modal Editar Presupuesto */}
        {props.showModalEditar && <div className="modal-backdrop show"></div>}
        <div className={`modal ${props.showModalEditar ? "d-block" : "d-none"}`} tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Editar Presupuesto</h5>
                        <button type="button" className="btn-close" onClick={props.closeModalEditar}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleEditarPresupuesto}>
                            <div className="mb-3">
                                <label className="form-label">Categoría</label>
                                <select className="form-select" value={categoriaId} onChange={(e) => setCategoriaId(Number(e.target.value))}>
                                    <option value="1">Ocio</option>
                                    <option value="2">Servicios</option>
                                    <option value="3">Alimentación</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Monto</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    value={monto} 
                                    onChange={(e) => setMonto(Number(e.target.value))} 
                                    placeholder="Monto"
                                    required
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={props.closeModalEditar}>Cancelar</button>
                                <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        {/* Modal Eliminar Presupuesto */}
        {props.showModalEliminar && <div className="modal-backdrop show"></div>}
        <div className={`modal ${props.showModalEliminar ? "d-block" : "d-none"}`} tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Aviso!</h5>
                        <button type="button" className="btn-close" onClick={props.closeModalEliminar}></button>
                    </div>
                    <div className="modal-body">
                        ¿Está seguro que desea eliminar este registro?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={props.closeModalEliminar}>No</button>
                        <button type="button" className="btn btn-primary" onClick={handleEliminarPresupuesto}>Sí</button>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
};

export default ModalesPresupuesto;
