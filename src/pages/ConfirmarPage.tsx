import { createRoot } from 'react-dom/client';
import './styles.css'; // Importamos nuestro styles.css
import { useNavigate } from 'react-router-dom';
//CONFIRMAR CORREO 
const ConfirmarPage = () => {
    const navigate = useNavigate()

    const mainHandler = () => {
        navigate("/Main"); // Redirige a la página de main
    };    
    return (
        <div className="body">
            <div className="login-container">
                <h2 className="title">Confirmación correo electrónico</h2>
                <p>Un correo electronico de confirmación, a sido enviado a la dirección de correo registrada en la aplicación.
                    Agradeceremos que confirme su dirección de autenticarce.</p>
                <p> Gracias </p>
                <button className="btn btn-primary" onClick={mainHandler}>Continuar</button>
            </div>
        </div>
    );
};

export default ConfirmarPage;