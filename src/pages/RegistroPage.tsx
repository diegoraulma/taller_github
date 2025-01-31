import { useNavigate } from "react-router-dom";
import './styles.css'; // Importamos nuestro styles.css
import FormularioRegistro from '../componentes/FormularioRegistro';
//REGISTRAR NUEVO USUARIO
//AÑADIR QUE DAR CLICK EN REGISTRAR Y ME MANDE A CONFIRMAR CORREO
const RegistroPage = () => {
    const navigate = useNavigate(); // Hook para redirigir

    const isValidEmail = (email: string): boolean => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
    
    const handlerRegistro = (usuario: string, correo: string, password: string) => {
        if (!usuario || !password || !correo) {
            // Validación de campos vacíos
            alert("Campos vacíos");
        } else if (!isValidEmail(correo)) {
            // Validación de correo electrónico
            alert("Correo electrónico no válido");
        }else {
           // Redirige a la página de confirmación
            navigate("/ConfirmarCorreo"); 
        }
    };
    

    return (
        <div className="body">
            <div className="login-container">
                <h2 className="title">Registro</h2>
                {/* Se pasa la función de registro al formulario */}
                <FormularioRegistro onRegistro={handlerRegistro} />
            </div>
        </div>
    );
};

export default RegistroPage;