import FormularioLogin from "../componentes/FormularioLogin"
import './styles.css'; // Importamos nuestro styles.css
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate()

    const loginHandler = async (usuario: string, password: string) => {
        console.log("🔹 Datos enviados:", { usuario, password });
    
        try {
            const response = await fetch("http://localhost:5000/usuarios/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ usuario, password })
            });
    
            const data = await response.json();
            console.log("🔹 Respuesta del backend:", data);
    
            if (data.id) {
                // Login correcto, redirigir al usuario
                navigate("/main");
            } else {
                // Login incorrecto
                alert("Usuario o contraseña incorrectos");
            }
        } catch (error) {
            console.error("🔹 Error en la petición:", error);
            alert("Hubo un problema con el servidor.");
        }
    };

    return (
        <div className="body"> 
            <div className="login-container">
                <h2 className="title">Log In</h2>
                {/* Se pasa la función de login al formulario */}
                <FormularioLogin onLogin={loginHandler} />
                
                <div>O</div>
                <a href="registro.html">
                    <button className="btn btn-secondary">Registrarse</button>
                </a>
            </div>
        </div>
    );
};

export default LoginPage;