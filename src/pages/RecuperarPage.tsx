import './styles.css'; // Importamos nuestro styles.css
import { useNavigate } from 'react-router-dom';
//NUEVA CONTRASEÑA
const RecuperarPage = () => {
    const navigate = useNavigate()

    const registroHandler = () => {
        navigate("/ConfirmarCorreo"); // Redirige a la página de confirmación
    };

    return (
        <div className="body">
            <div className="login-container">
                <h2 className="title">Nueva contraseña</h2>
                <input type="new_password" placeholder="Nueva contraseña" required/>
                <input type="new_password" placeholder="Rescribir nueva contraseña" required/>
                
                <button className="btn btn-primary" onClick={registroHandler}>Aceptar</button>
            </div>
        </div>
    );
};

export default RecuperarPage;