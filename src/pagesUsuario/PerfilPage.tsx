import '../pages/styleperfil.css'; // Importamos nuestro styleperfil.css
import LateralPageUsuario from "../componentes/LateralPageUsuario"; // Aqui esta el menu lateral
import ModalesPerfil from '../componentes/ModalesPerfil';
import { useEffect, useState } from "react";

const PerfilPage = () => {
    const [usuario, setUsuario] = useState({
        nombre: "Cargando...",
        usuario: "Cargando...",
        password: "*****"
    });

    const obtenerUsuario = async () => {
        const userData = JSON.parse(sessionStorage.getItem("usuario") || "{}");
        const userId = userData.id || 1; // Obtiene el ID del usuario logueado

        const resp = await fetch(`http://localhost:5000/usuarios/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
    
        const data = await resp.json();    
        console.log("Respuesta del backend:", data); // Imprime la respuesta en la consola
    
        if (data.msg === "") {
            console.log("Usuario obtenido:", data);
            setUsuario(data);
        } else {
            console.error("Error al obtener usuario:", data.msg);
        }
    }

    useEffect(() => {
        obtenerUsuario(); // Llamamos a la función al cargar el componente
    }, []);


    return (
        <div className='body'> 
           {/* MENU LATERAL*/} 
           <LateralPageUsuario /> 

            {/* CONTENIDO PRINCIPAL*/}
            <div id="contenido">
                <h3 className="fs-4">Mi perfil</h3>
                <div id="perfil">
                    <div className="encabezado-informacion">
                        <h5>Información personal</h5>
                        <button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#editarModal">Editar</button>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <p><strong>Nombre:</strong></p>
                            <p>{usuario.nombre}</p>
                        </div>
                        <div className="col-6">
                            <p><strong>Correo electrónico:</strong></p>
                            <p>{usuario.usuario}</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p><strong>Contraseña:</strong></p>
                        <p>{usuario.password}</p>
                    </div>
                </div>
            </div>
            {/*MODALES*/}
            <ModalesPerfil/>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    );
};

export default PerfilPage;