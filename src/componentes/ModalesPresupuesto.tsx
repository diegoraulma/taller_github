interface ModalesPresupuestoProps{
    showModalAgregar: boolean
    closeModalAgregar: ()=> void
    showModalEditar: boolean
    closeModalEditar: ()=> void
    showModalEliminar: boolean
    closeModalEliminar: ()=> void
}

const ModalesPresupuesto = (props : ModalesPresupuestoProps) => {
    return (
      <>
        {/* Fondo oscuro */}
        {props.showModalAgregar && <div className="modal-backdrop show" style={{ zIndex: 1040 }}></div>}
        {/* Modal Agregar Presupuesto */}
        <div className={`modal ${props.showModalAgregar ? "d-block" : "d-none"}`} tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Agregar Presupuesto</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={props.closeModalAgregar}></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="categoria" className="form-label">Categoría</label>
                                <select className="form-select" id="categoria">
                                    <option value="Servicios">Servicios</option>
                                    <option value="Alimentación">Alimentación</option>
                                    <option value="Ocio">Ocio</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="correo" className="form-label">Monto</label>
                                <input type="email" className="form-control" id="correo" placeholder="Monto"/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                            <button type="button" className="btn btn-secondary"
                            onClick={props.closeModalAgregar}>Cancelar</button>
                            <button type="submit" className="btn btn-primary">Aceptar</button>
                    </div>
                </div>
            </div>
        </div>

        {/* Fondo oscuro */}
        {props.showModalEditar && <div className="modal-backdrop show" style={{ zIndex: 1040 }}></div>}
        {/* Modal Editar Presupuesto */}
        <div className={`modal ${props.showModalEditar ? "d-block" : "d-none"}`} tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Editar Presupuesto</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={props.closeModalEditar}></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="categoria" className="form-label">Categoría</label>
                                <select className="form-select" id="categoria">
                                    <option value="Servicios">Servicios</option>
                                    <option value="Alimentación">Alimentación</option>
                                    <option value="Ocio">Ocio</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="correo" className="form-label">Monto</label>
                                <input type="email" className="form-control" id="correo" placeholder="Monto"/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                            <button type="button" className="btn btn-secondary"
                            onClick={props.closeModalEditar}>Cancelar</button>
                            <button type="submit" className="btn btn-primary">Aceptar</button>
                    </div>
                </div>
            </div>
        </div>

        {/* Fondo oscuro */}
        {props.showModalEliminar && <div className="modal-backdrop show" style={{ zIndex: 1040 }}></div>}
        {/* Modal Eliminar Presupuesto */}
        <div className={`modal ${props.showModalEliminar ? "d-block" : "d-none"}`} tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Aviso!</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={props.closeModalEliminar}></button>
                    </div>
                    <div className="modal-body">
                        ¿Esta seguro que desea eliminar este registro?
                    </div>
                    <div className="modal-footer">
                            <button type="button" className="btn btn-secondary"
                            onClick={props.closeModalEliminar}>No</button>
                            <button type="submit" className="btn btn-primary">Si</button>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  };
  
  export default ModalesPresupuesto;