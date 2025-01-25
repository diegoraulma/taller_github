import { createRoot } from 'react-dom/client';
import { VscGraph } from "react-icons/vsc"; /* DASHBOARD*/
import { FaMoneyBills} from "react-icons/fa6"; /* GASTOS*/
import { RiMoneyDollarCircleFill } from "react-icons/ri"; /* PRESUPUESTOS*/
import {  FaGear } from "react-icons/fa6"; /* CONFIGURACION*/
import { IoExitOutline } from "react-icons/io5"; /* SALIR*/
import './styleperfil.css'; // Importamos nuestro styleperfil.css

const PerfilPage = () => {
    return (
        <div className='body'> 
           {/* MENU LATERAL*/} 
            <div id="cajamenu">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="Profile Picture"/>
                <h2>Jessica Straus</h2>
                <div id="menu">
                    <a href="#"><VscGraph className="me-2 fs-2" />Dashboard</a>
                    <a href="gastos.html"><FaMoneyBills className="me-2 fs-2" />Gastos</a>
                    <a href="#"><RiMoneyDollarCircleFill className="me-2 fs-2" />Presupuestos</a>
                    <a href="#" className="activo"><FaGear className="me-2 fs-2" />Configuración</a>
                    <a href="#"><IoExitOutline className="me-2 fs-2" />Salir</a>
                </div>
            </div>   

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

            <div className="modal fade" id="editarModal" tabIndex={-1} aria-labelledby="editarModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editarModalLabel">Editar Información de Usuario</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="nombre" value="Jessica Straus"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="correo" className="form-label">Correo</label>
                                    <input type="email" className="form-control" id="correo" value="jess@taxes.com"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contraseña" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="contraseña" value="12345"/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    );
};

export default PerfilPage;