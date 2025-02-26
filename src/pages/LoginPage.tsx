import FormularioLogin from "../componentes/FormularioLogin"
import './styles.css'; // Importamos nuestro styles.css
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const LoginPage = () => {
    const navigate = useNavigate()
    const [mensajeModal, setMensajeModal] = useState<string | null>(null);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [redireccionar, setRedireccionar] = useState(false);

    const URL_BACKEND = import.meta.env.VITE_URL_BACKEND || "http://localhost:5000"

    const loginHandler = async (usuario: string, password: string) => {
        const url = URL_BACKEND + "/usuarios/login";
        try {
            const resp = await fetch(url, {
                method: "POST",
                body: JSON.stringify({ usuario, password }),
                headers: { "Content-Type": "application/json" }
            });
    
            const data = await resp.json();
            console.log("Respuesta del backend al login:", data);
    
            if (resp.ok && data.msg === "") {
                sessionStorage.setItem("usuario", JSON.stringify({
                    id: data.id,
                    nombre: data.nombre,
                    username: data.username,
                    estado: data.estado,
                    rol: data.rol
                }));
                setMensajeModal("Inicio de sesión exitoso ;)");
                setRedireccionar(true);
                
            } else {
                setMensajeModal("Correo o contraseña incorrectos.");
            }
        } catch (error) {
            console.error("Error en login:", error);
            setMensajeModal("Error al conectar con el servidor.");
        }

        setMostrarModal(true);
    };

    const handleCloseModal = () => {
        setMostrarModal(false);
        if (redireccionar) {
            const storedUsuario = sessionStorage.getItem("usuario");
            const usuarioData = storedUsuario ? JSON.parse(storedUsuario) : null;

            if (usuarioData?.rol === "Admin") {
                navigate("/usuarios");
            } else {
                navigate("/Main");
            }
        }
    };

    const ButtonRegistrarseHandler = () => {
        navigate("/Registro"); 
    };

    return (
        <div className="body"> 
            <div className="login-container">
                <h2 className="title">Log In</h2>
                {/*se pasa la función de login al formulario*/}
                <FormularioLogin onLogin={loginHandler} />
                
                <div>O</div>
                <a>
                    <button className="btn btn-secondary" onClick={ButtonRegistrarseHandler}>Registrarse</button>
                </a>
            </div>

            {/* Modal */}
            {mostrarModal && (
                <div className="modal fade show" style={{ display: "block" }} tabIndex={-1} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Mensaje</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <p>{mensajeModal}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={handleCloseModal}>Aceptar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoginPage;