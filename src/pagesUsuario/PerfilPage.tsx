import '../pages/styleperfil.css'; // Importamos nuestro styleperfil.css
import LateralPageUsuario from "../componentes/LateralPageUsuario"; // Aquí está el menú lateral
import ModalesPerfil from '../componentes/ModalesPerfil';
import { useEffect, useState } from "react";

const PerfilPage = () => {
    const [usuario, setUsuario] = useState({
        nombre: "Cargando...",
        usuario: "Cargando...",
        password: "*****"
    });

    const obtenerUsuario = async () => {
        const userData = sessionStorage.getItem("usuario");
        console.log("Datos en sessionStorage:", userData);  // Vemos qué datos tiene sessionStorage

        if (!userData) {
            console.error("No hay usuario en sesión");
            return;
        }

        const usuarioSesion = JSON.parse(userData);
        console.log("Datos parseados de sessionStorage:", usuarioSesion);

        if (!usuarioSesion.id) {
            console.error("🚨 No hay usuario en sesión (ID vacío)");
            return;
        }

        const userId = usuarioSesion.id;

        const resp = await fetch(`http://localhost:5000/usuarios/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
    
        const data = await resp.json();    
        console.log("Respuesta del backend:", data); // Imprimimos la respuesta en la consola
    
        if (data.id) {
            console.log("Usuario obtenido:", data);
            setUsuario({
                nombre: data.nombre,
                usuario: data.username,  
                password: "*****"  // No mostramos la contraseña real
            });
        } else {
            console.error("Error al obtener usuario:", data.msg);
        }
    };

    useEffect(() => {
        obtenerUsuario(); // Llamamos a la función al cargar el componente
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
