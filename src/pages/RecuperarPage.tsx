import './styles.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecuperarPage = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState('');
    const [nuevaPassword, setNuevaPassword] = useState('');
    const [confirmarPassword, setConfirmarPassword] = useState('');

    const URL_BACKEND = import.meta.env.VITE_URL_BACKEND || "http://localhost:5000"

    const handlePasswordChange = async () => {
        if (!usuario || !nuevaPassword || !confirmarPassword) {
            return;
        }

        if (nuevaPassword !== confirmarPassword) {
            return;
        }

        try {
            const response = await fetch(URL_BACKEND + "/password/cambiar-password", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ usuario, nuevaPassword, confirmarPassword }),
            });

            const data = await response.json();
            if (data.msg === "Contraseña actualizada correctamente") {
                navigate("/");
            } else {
            }
        } catch (error) {
            console.error("Error al cambiar la contraseña:", error);
        }
    };

    return (
        <div className="body">
            <div className="login-container">
                <h2 className="title">Nueva contraseña</h2>
                <input type="text" placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} required />
                <input type="password" placeholder="Nueva contraseña" value={nuevaPassword} onChange={(e) => setNuevaPassword(e.target.value)} required />
                <input type="password" placeholder="Rescribir nueva contraseña" value={confirmarPassword} onChange={(e) => setConfirmarPassword(e.target.value)} required />
                <button className="btn btn-primary" onClick={handlePasswordChange}>Aceptar</button>
            </div>
        </div>
    );
};

export default RecuperarPage;
