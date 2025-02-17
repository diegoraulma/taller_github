const ModalesPerfil = ({ usuario }: { usuario: { nombre: string, usuario: string, password: string } }) => {
    return (
      <>
        <div className="modal fade" id="editarModal" tabIndex={-1} aria-labelledby="editarModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editarModalLabel">Editar Información de Usuario</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="nombre" value={usuario.nombre} readOnly/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="correo" className="form-label">Correo</label>
                                <input type="email" className="form-control" id="correo" value={usuario.usuario} readOnly/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contraseña" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="contraseña" value={usuario.password} readOnly/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="submit" className="btn btn-primary">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
};

export default ModalesPerfil;