import { useNavigate } from "react-router-dom";
import './styles.css'; // Importamos nuestro styles.css
import FormularioRegistro from '../componentes/FormularioRegistro';
//REGISTRAR NUEVO USUARIO
//AÑADIR QUE DAR CLICK EN REGISTRAR Y ME MANDE A CONFIRMAR CORREO
const RegistroPage = () => {
    const navigate = useNavigate(); // Hook para redirigir

    const isValidEmail = (email: string): boolean => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);

    const URL_BACKEND = import.meta.env.VITE_URL_BACKEND || "http://localhost:5000"

    const httpRegistrarUsuario = async (nombreUsuario : string, passwordUsuario : string, correoUsuario : string) => {
        const url = URL_BACKEND + "/usuarios/register";
        const resp = await fetch(url, {
            method : "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                nombre: nombreUsuario,
                username: correoUsuario, //recordar que el Backend espera "usuario" como correo
                password: passwordUsuario
            })
        })

        const data = await resp.json();
        console.log("Respuesta del backend al registro:", data); //verificamos la respuesta

        if (data.msg === "") {
            alert("Registro exitoso");

            sessionStorage.setItem("usuario", JSON.stringify({
                id: data.id, 
                nombre: nombreUsuario,
                usuario: correoUsuario
            }));
            console.log("Usuario guardado en sessionStorage:", sessionStorage.getItem("usuario"));
            navigate("/ConfirmarCorreo"); 
        } else {
            alert(data.msg); //mostramos error en caso haya
        }
    }
    
    const handlerRegistro = (usuario: string, correo: string, password: string) => {
        if (!usuario || !password || !correo) {
            // Validación de campos vacíos
            alert("Campos vacíos");
        } else if (!isValidEmail(correo)) {
            // Validación de correo electrónico
            alert("Correo electrónico no válido");
        }else {
           // Redirige a la página de confirmación
           httpRegistrarUsuario(usuario, password, correo); 
        }
    };
    

    return (
        <div className="body">
            <div className="login-container">
                <h2 className="title">Registro</h2>
                {/*se pasa la función de registro al formulario*/}
                <FormularioRegistro onRegistro={handlerRegistro} />
            </div>
        </div>
    );
};

export default RegistroPage;