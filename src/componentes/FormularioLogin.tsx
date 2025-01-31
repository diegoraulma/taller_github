import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormularioLoginProp {
    onLogin: (correo: string, password: string) => void;
}

const FormularioLogin = (props: FormularioLoginProp) => {
    const navigate = useNavigate()

    const [correo, setCorreo] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleCorreoChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
        setCorreo(evento.currentTarget.value);
    };

    const handlePasswordChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(evento.currentTarget.value);
    };

    const RecuperarContraHandler = () => {
        navigate("/RecuperarContra"); // Redirige a la página de RecuperarContra
    };
    
    return (
        <form>
            <div>
                <input
                    type="email"
                    value={correo}
                    onChange={handleCorreoChange}
                    placeholder="Ingresar correo"
                    required
                />
            </div>
            <div>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Ingresar contraseña"
                    required
                />
            </div>
            <a className="forgot-password" onClick={RecuperarContraHandler}>
                ¿Olvidaste tu contraseña?
            </a>
            <button
                className="btn btn-primary"
                type="button"
                onClick={() => props.onLogin(correo, password)}
            >
                Ingresar
            </button>
        </form>
    );
};

export default FormularioLogin;