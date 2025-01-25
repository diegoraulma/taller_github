import { createRoot } from 'react-dom/client';
import './styles.css'; // Importamos nuestro styles.css

const RecuperarPage = () => {
    return (
        <div className="body">
            <div className="login-container">
                <h2 className="title">Nueva contraseña</h2>
                <input type="new_password" placeholder="Nueva contraseña" required/>
                <input type="new_password" placeholder="Rescribir nueva contraseña" required/>
                
                <a href="confircorreo.html" ><button className="btn btn-primary">Aceptar</button></a>
            </div>
        </div>
    );
};

export default RecuperarPage;