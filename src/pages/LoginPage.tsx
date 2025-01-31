import FormularioLogin from "../componentes/FormularioLogin"
import './styles.css'; // Importamos nuestro styles.css
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate()

    const loginHandler = (usuario: string, password: string) => {
        if (usuario === "user" && password === "123") {
            // Login correcto usuario
            navigate("/Main");
        }
        else if(usuario === "admin" && password === "123"){
            // Login correcto usuario
            navigate("/usuariosadmin")
        }
        else {
            // Login incorrecto (puedes agregar un mensaje de error aquí)
            alert("Usuario o contraseña incorrectos");
        }
    };
    const ButtonRegistrarseHandler = () => {
        navigate("/Registro"); // Redirige a la página de confirmación
    };
    return (
        <div className="body"> 
            <div className="login-container">
                <h2 className="title">Log In</h2>
                {/* Se pasa la función de login al formulario */}
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