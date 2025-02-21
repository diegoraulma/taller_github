import { useState, useEffect } from "react";

const ModalesPerfil = ({ usuario, setUsuario }: { usuario: { nombre: string, usuario: string, password: string }, setUsuario: (user: any) => void }) => {
    const [editableCampo, setEditableCampo] = useState({ nombre: false, usuario: false, password: false });
    const [nuevoNombre, setNuevoNombre] = useState(usuario.nombre);
    const [nuevoUsuario, setNuevoUsuario] = useState(usuario.usuario);
    const [nuevaPassword, setNuevaPassword] = useState("");
    const [mensaje, setMensaje] = useState(""); 

    useEffect(() => {
        setNuevoNombre(usuario.nombre);
        setNuevoUsuario(usuario.usuario);
        setNuevaPassword(""); 
    }, [usuario]);

    const handleGuardar = (campo: string) => {
        let nuevoValor;
        if (campo === "nombre") {
            nuevoValor = nuevoNombre;
        } else if (campo === "usuario") {
            nuevoValor = nuevoUsuario;
        }

        setUsuario({ ...usuario, [campo]: nuevoValor });
        setEditableCampo({ ...editableCampo, [campo]: false });
    };

    const handleGuardarPassword = async () => {
        if (!nuevaPassword) {
            setMensaje("La contraseña no puede estar vacía.");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/password/cambiar-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    usuario: usuario.usuario, 
                    password: nuevaPassword, 
                }),
            });

            const data = await response.json();

            if (response.ok && data.msg === "") {
                setMensaje("¡Contraseña actualizada correctamente!");
                setEditableCampo({ ...editableCampo, password: false });
                setNuevaPassword(""); 
            } else {
                setMensaje(data.msg || "Error al cambiar la contraseña.");
            }
        } catch (error) {
            setMensaje("Error de conexión con el servidor.");
        }
    };

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
                            {mensaje && <div className="alert alert-info">{mensaje}</div>}
                            <form>
                                {/* NOMBRE */}
                                <div className="mb-3 d-flex align-items-center">
                                    <label htmlFor="nombre" className="form-label me-2">Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control flex-grow-1"
                                        id="nombre"
                                        value={nuevoNombre}
                                        readOnly={!editableCampo.nombre}
                                        onChange={(e) => setNuevoNombre(e.target.value)}
                                    />
                                    {!editableCampo.nombre ? (
                                        <button type="button" className="btn btn-warning ms-2" onClick={() => setEditableCampo({ ...editableCampo, nombre: true })}>✏️</button>
                                    ) : (
                                        <button type="button" className="btn btn-success ms-2" onClick={() => handleGuardar("nombre")}>✔</button>
                                    )}
                                </div>

                                {/* CORREO */}
                                <div className="mb-3 d-flex align-items-center">
                                    <label htmlFor="correo" className="form-label me-2">Correo</label>
                                    <input
                                        type="email"
                                        className="form-control flex-grow-1"
                                        id="correo"
                                        value={nuevoUsuario}
                                        readOnly={!editableCampo.usuario}
                                        onChange={(e) => setNuevoUsuario(e.target.value)}
                                    />
                                    {!editableCampo.usuario ? (
                                        <button type="button" className="btn btn-warning ms-2" onClick={() => setEditableCampo({ ...editableCampo, usuario: true })}>✏️</button>
                                    ) : (
                                        <button type="button" className="btn btn-success ms-2" onClick={() => handleGuardar("usuario")}>✔</button>
                                    )}
                                </div>

                                {/* CONTRASEÑA */}
                                <div className="mb-3 d-flex align-items-center">
                                    <label htmlFor="contraseña" className="form-label me-2">Contraseña</label>
                                    <input
                                        type="password"
                                        className="form-control flex-grow-1"
                                        id="contraseña"
                                        value={nuevaPassword}
                                        readOnly={!editableCampo.password}
                                        onChange={(e) => setNuevaPassword(e.target.value)}
                                    />
                                    {!editableCampo.password ? (
                                        <button type="button" className="btn btn-warning ms-2" onClick={() => setEditableCampo({ ...editableCampo, password: true })}>✏️</button>
                                    ) : (
                                        <button type="button" className="btn btn-success ms-2" onClick={handleGuardarPassword}>✔</button>
                                    )}
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalesPerfil;
