import { createRoot } from 'react-dom/client';
import './styles.css'; // Importamos nuestro styles.css

const RegistroPage = () => {
    return (
        <div className="body">
            <div className="login-container">
                <h2 className="title">Registro</h2>
                <input type="user" placeholder="Nombre de usuario" required/>
                <input type="email" placeholder="Correo de usuario" required/>
                <input type="password" placeholder="Contraseña" required/>
                <button className="btn btn-primary">Registrar</button>
            </div>
        </div>
    );
};

export default RegistroPage;