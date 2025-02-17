import FormularioLogin from "../componentes/FormularioLogin"
import './styles.css'; // Importamos nuestro styles.css
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate()

    const loginHandler = async (usuario: string, password: string) => {
        const userData = {
            usuario : usuario,
            password : password
        }
        const resp = await fetch("http://localhost:5000/usuarios/login", {
            method: "POST",
            body : JSON.stringify(userData),
            headers: {  //SOLUCIONA EL ERROR AL LOGIN
                "Content-Type": "application/json",
            }
        })
        const data = await resp.json()
        if(data.msg == ""){
            // Login correcto
            const userJSON = JSON.stringify({id: data.id, usuario:usuario, password:password})
            console.log(userJSON)
            sessionStorage.setItem("usuario", userJSON)
            navigate("/Main");
        }
        else{
            // Error en el login
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