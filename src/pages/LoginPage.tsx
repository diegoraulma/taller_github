<<<<<<< HEAD
=======
import FormularioLogin from "../componentes/FormularioLogin"
>>>>>>> origin/main
import './styles.css'; // Importamos nuestro styles.css
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate()

    const loginHandler = (usuario: string, password: string) => {
        if (usuario === "20211532@aloe.ulima.edu.pe" && password === "123") {
            // Login correcto
            navigate("/main");
        } else {
            // Login incorrecto (puedes agregar un mensaje de error aquí)
            alert("Usuario o contraseña incorrectos");
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