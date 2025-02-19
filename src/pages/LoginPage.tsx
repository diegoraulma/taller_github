import FormularioLogin from "../componentes/FormularioLogin"
import './styles.css'; // Importamos nuestro styles.css
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate()

    const loginHandler = async (usuario: string, password: string) => {
        const url = "http://localhost:5000/usuarios/login"
        const resp = await fetch(url, {
            method: "POST",
            body : JSON.stringify({usuario, password}),
            headers: {  //SOLUCIONA EL ERROR AL LOGIN
                "Content-Type": "application/json" }
        })

        const data = await resp.json()
        console.log("Respuesta del backend al login:", data); //verificamos qué devuelve el backend
        
        if(data.msg == ""){
            console.log("Datos recibidos del backend:", data); //verificamos qué recibimos del backend
            // Login correcto
            sessionStorage.setItem("usuario", JSON.stringify({
                id: data.id, 
                nombre: data.nombre, 
                usuario: usuario
            }));
        
            console.log("Usuario guardado en sessionStorage:", sessionStorage.getItem("usuario")); //verificamos que se guardó todo bien
            navigate("/Main");
        }
        else{
            // Error en el login
            alert("Usuario o contraseña incorrectos");
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