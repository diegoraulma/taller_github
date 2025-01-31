import '../pages/styleperfil.css'; // Importamos nuestro styleperfil.css
import LateralPageUsuario from "../componentes/LateralPageUsuario"; // Aqui esta el menu lateral
import ModalesPerfil from '../componentes/ModalesPerfil';

const PerfilPage = () => {
    return (
        <div className='body'> 
           {/* MENU LATERAL*/} 
           <LateralPageUsuario /> 

            {/* CONTENIDO PRINCIPAL*/}
            <div id="contenido">
                <h3 className="fs-4">Mi perfil</h3>
                <div id="perfil">
                    <div className="encabezado-informacion">
                        <h5>Información personal</h5>
                        <button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#editarModal">Editar</button>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <p><strong>Nombre:</strong></p>
                            <p>Jessica Straus</p>
                        </div>
                        <div className="col-6">
                            <p><strong>Correo electrónico:</strong></p>
                            <p>jess@taxes.com</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p><strong>Contraseña:</strong></p>
                        <p>12345</p>
                    </div>
                </div>
            </div>
            {/*MODALES*/}
            <ModalesPerfil/>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    );
};

export default PerfilPage;