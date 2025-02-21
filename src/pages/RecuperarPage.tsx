import './styles.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecuperarPage = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState('');
    const [nuevaPassword, setNuevaPassword] = useState('');
    const [confirmarPassword, setConfirmarPassword] = useState('');

    const handlePasswordChange = async () => {
        if (!usuario || !nuevaPassword || !confirmarPassword) {
            alert("Todos los campos son obligatorios");
            return;
        }

        if (nuevaPassword !== confirmarPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/password/cambiar-password", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ usuario, nuevaPassword, confirmarPassword }),
            });

            const data = await response.json();
            if (data.msg === "Contraseña actualizada correctamente") {
                alert("¡Contraseña cambiada exitosamente!");
                navigate("/login");
            } else {
                alert(data.msg);
            }
        } catch (error) {
            console.error("Error al cambiar la contraseña:", error);
            alert("Error en el servidor. Inténtalo de nuevo.");
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
