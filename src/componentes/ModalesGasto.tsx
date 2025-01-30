const ModalesGasto = () => {
  return (
    <>
      {/* Modal Agregar Gasto */}
      <div className="modal fade" id="agregarGastoModal" tabIndex={-1} aria-labelledby="agregarGastoModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="agregarGastoModalLabel">Agregar Gasto</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="fecha" className="form-label">Fecha</label>
                  <input type="date" className="form-control" id="fecha" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="categoria" className="form-label">Categoría</label>
                  <select className="form-select" id="categoria">
                    <option value="Servicios">Servicios</option>
                    <option value="Alimentación">Alimentación</option>
                    <option value="Ocio">Ocio</option>
                  </select>
                </div>
              </form>
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