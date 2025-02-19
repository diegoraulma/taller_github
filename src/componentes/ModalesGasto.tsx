const ModalesGasto = () => {
  return (
    <>
      {/* Modal Agregar Gasto */}
      <div className="modal fade" id="agregarGastoModal" tabIndex={-1} aria-labelledby="agregarGastoModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="agregarGastoModalLabel">Agregar Gasto</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                {/* Fecha */}
                <div className="mb-3">
                  <label htmlFor="fecha" className="form-label">Fecha</label>
                  <input type="date" className="form-control" id="fecha" required />
                </div>

                {/* Categoría */}
                <div className="mb-3">
                  <label htmlFor="categoria" className="form-label">Categoría</label>
                  <select className="form-select" id="categoria" required>
                    <option value="">Seleccionar...</option>
                    <option value="1">Servicios</option>
                    <option value="2">Alimentación</option>
                    <option value="3">Ocio</option>
                  </select>
                </div>

                {/* Recurrente */}
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="recurrente" />
                  <label htmlFor="recurrente" className="form-check-label">Recurrente</label>
                </div>

                {/* Descripción */}
                <div className="mb-3">
                  <label htmlFor="descripcion" className="form-label">Descripción</label>
                  <textarea className="form-control" id="descripcion" rows={3} placeholder="Escriba aquí el detalle"></textarea>
                </div>

                {/* Monto */}
                <div className="mb-3">
                  <label htmlFor="monto" className="form-label">Monto</label>
                  <input type="number" className="form-control" id="monto" placeholder="Ingrese el monto" required />
                </div>
              </form>
            </div>

            {/* Botones */}
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="submit" className="btn btn-primary">Aceptar</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Borrar Gasto */}
      <div className="modal fade" id="borrarGastoModal" tabIndex={-1} aria-labelledby="borrarGastoModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="borrarGastoModalLabel">Confirmar Eliminación</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>¿Estás seguro de que deseas eliminar este gasto? Esta acción no se puede deshacer.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-danger">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalesGasto;