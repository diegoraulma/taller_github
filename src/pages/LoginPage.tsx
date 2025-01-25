import { createRoot } from 'react-dom/client';
import './styles.css'; // Importamos nuestro styles.css

const LoginPage = () => {
    return (
        <div className="body"> 
            <div className="login-container">
                <h2 className="title">Log In</h2>
                <input type="email" placeholder="Ingresar correo" required />
                <input type="password" placeholder="Ingresar contraseña" required />
                <a href="recuperarcontra.html" className="forgot-password">
                    ¿Olvidaste tu contraseña?
                </a>
                <button className="btn btn-primary">Ingresar</button>
                <div>O</div>
                <a href="registro.html">
                    <button className="btn btn-secondary">Registrarse</button>
                </a>
            </div>
        </div>
    );
};

export default LoginPage;