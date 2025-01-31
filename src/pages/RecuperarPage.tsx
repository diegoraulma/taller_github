import { createRoot } from 'react-dom/client';
import './styles.css'; // Importamos nuestro styles.css
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
//NUEVA CONTRASEÑA
const RecuperarPage = () => {
    const navigate = useNavigate()

    // Estados para las contraseñas
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const registroHandler = () => {
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
        } else if(!password || !confirmPassword){
            alert("llenar los campos");
        }
        else {
            setError('');
            navigate("/ConfirmarCorreo"); // Redirige a la página de confirmación
        }
    };

    

    return (
        <div className="body">
            <div className="login-container">
                <h2 className="title">Nueva contraseña</h2>
                <input 
                    type="password" placeholder="Nueva contraseña" value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <input 
                    type="password" placeholder="Reescribir nueva contraseña" value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    required 
                />
                
                {error && <p className="error-message">{error}</p>}

                <button className="btn btn-primary" onClick={registroHandler}>Aceptar</button>
            </div>
        </div>
    );
};

export default RecuperarPage;