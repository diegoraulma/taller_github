import FormularioLogin from "../componentes/FormularioLogin"
import './styles.css'; // Importamos nuestro styles.css
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate()

    const loginHandler = async (usuario: string, password: string) => {
        const url = "http://localhost:5000/usuarios/login";
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
                    usuario
                }));
                alert("Inicio de sesión exitoso. Se ha enviado un correo de confirmación.");
                navigate("/Main");
            } else {
                alert("Correo o contraseña incorrectos.");
            }
        } catch (error) {
            console.error("Error en login:", error);
            alert("Error al conectar con el servidor.");
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
        </div>
    );
};

export default LoginPage;