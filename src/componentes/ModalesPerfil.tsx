import { useState, useEffect } from "react";

interface Usuario {
    id: number | null;
    nombre: string;
    usuario: string;
    password: string;
}

interface ModalesPerfilProps {
    usuario: Usuario;
    setUsuario: (usuario: Usuario) => void;
}

// { usuario, setUsuario }

const ModalesPerfil = (props: ModalesPerfilProps) => {
    const [nuevoNombre, setNuevoNombre] = useState(props.usuario.nombre);
    const [nuevoUsuario, setNuevoUsuario] = useState(props.usuario.usuario);
    const [nuevaPassword, setNuevaPassword] = useState("");
    const [mensaje, setMensaje] = useState("");

    const URL_BACKEND = import.meta.env.VITE_URL_BACKEND || "http://localhost:5000"

    useEffect(() => {
        setNuevoNombre(props.usuario.nombre);
        setNuevoUsuario(props.usuario.usuario);
        setNuevaPassword(""); 
    }, [props.usuario]);

    const handleGuardarPassword = async () => {
        if (!nuevaPassword) {
            setMensaje("La contraseña no puede estar vacía.");
            return;
        }

        try {
            const response = await fetch(URL_BACKEND + "/password/cambiar-password", {
                method: "PUT", 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    usuario: props.usuario.usuario, 
                    nuevaPassword: nuevaPassword,
                    confirmarPassword: nuevaPassword, 
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setMensaje("¡Contraseña actualizada correctamente!");
                setNuevaPassword(""); 
            } else {
                setMensaje(data.msg || "Error al cambiar la contraseña.");
            }
        } catch (error) {
            setMensaje("Error de conexión con el servidor.");
        }
    };

    return (
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
                            {/* NOMBRE (Solo lectura) */}
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    value={nuevoNombre}
                                    readOnly
                                />
                            </div>

                            {/* CORREO (Solo lectura) */}
                            <div className="mb-3">
                                <label htmlFor="correo" className="form-label">Correo</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="correo"
                                    value={nuevoUsuario}
                                    readOnly
                                />
                            </div>

                            {/* CONTRASEÑA - EDITABLE */}
                            <div className="mb-3 d-flex align-items-center">
                                <label htmlFor="contraseña" className="form-label me-2">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control flex-grow-1"
                                    id="contraseña"
                                    value={nuevaPassword}
                                    onChange={(e) => setNuevaPassword(e.target.value)}
                                    placeholder="Nueva contraseña"
                                />
                                <button type="button" className="btn btn-success ms-2" onClick={handleGuardarPassword}>
                                    ✔
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalesPerfil;
