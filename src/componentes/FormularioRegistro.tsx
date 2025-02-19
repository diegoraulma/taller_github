import { useState } from "react";

interface FormularioRegistroProp {
    onRegistro: (usuario: string, correo: string, password: string) => void;
}

const FormularioRegistro = (props: FormularioRegistroProp) => {
    const [usuario, setUsuario] = useState<string>("");
    const [correo, setCorreo] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleUsuarioChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
        setUsuario(evento.currentTarget.value);
    };

    const handleCorreoChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
        setCorreo(evento.currentTarget.value);
    };

    const handlePasswordChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(evento.currentTarget.value);
    };

    return (
        <form>
            <div>
                <input
                    type="text"
                    value={usuario}
                    onChange={handleUsuarioChange}
                    placeholder="Crear Nombre de Usuario"
                    required
                />
            </div>
            <div>
                <input
                    type="email"
                    value={correo}
                    onChange={handleCorreoChange}
                    placeholder="Ingresar Correo"
                    required
                />
            </div>
            <div>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Crear Contraseña"
                    required
                />
            </div>
            <button
                className="btn btn-primary"
                type="button"
                onClick={() => props.onRegistro(usuario, correo, password)}
            >
                Registrar
            </button>
        </form>
    );
};

export default FormularioRegistro;