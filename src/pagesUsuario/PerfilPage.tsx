import '../pages/styleperfil.css'; // Importamos nuestro styleperfil.css
import LateralPageUsuario from "../componentes/LateralPageUsuario"; // Aquí está el menú lateral
import ModalesPerfil from '../componentes/ModalesPerfil';
import { useEffect, useState } from "react";

const PerfilPage = () => {
    const [usuario, setUsuario] = useState({
        id: null,  // Agregamos el ID
        nombre: "Cargando...",
        usuario: "Cargando...",
        password: "*****"
    });
    
    const obtenerUsuario = async () => {
        const userData = sessionStorage.getItem("usuario");
    
        if (!userData) {
            console.error("No hay usuario en sesión");
            return;
        }
    
        const usuarioSesion = JSON.parse(userData);
    
        if (!usuarioSesion.id) {
            console.error("🚨 No hay ID de usuario en sesión");
            return;
        }
    
        const userId = usuarioSesion.id;
    
        try {
            const resp = await fetch(`http://localhost:5000/usuarios/${userId}`);
            const data = await resp.json();
    
            if (data.id) {
                setUsuario({
                    id: data.id,  // Guardamos el ID
                    nombre: data.nombre,
                    usuario: data.username,  
                    password: "*****"  
                });
            } else {
                console.error("Error al obtener usuario:", data.msg);
            }
        } catch (error) {
            console.error("Error de conexión con el backend:", error);
        }
    };
    
    useEffect(() => {
        obtenerUsuario();
    }, []);
    
    return (
        <div className='body'> 
           {/* MENU LATERAL */} 
           <LateralPageUsuario /> 

            {/* CONTENIDO PRINCIPAL */}
            <div id="contenido" className="d-flex justify-content-center align-items-center" style={{ width: "100%", height: "100vh" }}>
                <div id="perfil" className="card shadow-sm p-4" style={{ width: "80%", height: "80%" }}>
                    <h3 className="card-title">Mi perfil</h3>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5>Información personal</h5>
                        <button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#editarModal">
                            Editar
                        </button>
                    </div>
                    <div className="mb-3">
                        <p className="fw-bold mb-1">Nombre:</p>
                        <p>{usuario.nombre}</p>
                    </div>
                    <div className="mb-3">
                        <p className="fw-bold mb-1">Correo electrónico:</p>
                        <p>{usuario.usuario}</p>
                    </div>
                    <div className="mb-3">
                        <p className="fw-bold mb-1">Contraseña:</p>
                        <p>{usuario.password}</p>
                    </div>
                </div>
            </div>

            {/* MODAL DE EDICIÓN */}
            <ModalesPerfil usuario={usuario} setUsuario={setUsuario} />

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    );
};

export default PerfilPage;
