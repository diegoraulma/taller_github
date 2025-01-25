import { createRoot } from 'react-dom/client';
import { VscGraph } from "react-icons/vsc"; /* DASHBOARD*/
import { FaMoneyBills} from "react-icons/fa6"; /* GASTOS*/
import { RiMoneyDollarCircleFill } from "react-icons/ri"; /* PRESUPUESTOS*/
import {  FaGear } from "react-icons/fa6"; /* CONFIGURACION*/
import { IoExitOutline } from "react-icons/io5"; /* SALIR*/
import './styleperfil.css'; // Importamos nuestro styleperfil.css

const GastosPage = () => {
    return (
        <div className = "body">
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
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h1 className="fs-4">Mis gastos</h1>
                    <div className="d-flex gap-2">
                        <button className="btn btn-primary">Filtrar</button>
                        <button className="btn btn-secondary">Exportar</button>
                        <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#agregarGastoModal">Agregar</button>
                    </div>
                </header>

                {/* TABLA DE GASTOS*/}
                <table className="table table-hover align-middle">
                    <thead className="table-primary">
                        <tr>
                            <th scope="col">Fecha</th>
                            <th scope="col">Categoría</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Recurrente</th>
                            <th scope="col">Monto</th>
                            <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>12/12/2024</td>
                            <td>Ocio</td>
                            <td>La Niebla, libro de Steven King</td>
                            <td>No</td>
                            <td>S/. 29.99</td>
                            <td>
                                <button className="btn btn-sm btn-outline-primary">✏️</button>
                                <button className="btn btn-sm btn-outline-danger" data-bs-toggle="modal" data-bs-target="#borrarGastoModal">🗑️</button>
                            </td>
                        </tr>
                        <tr>
                            <td>02/12/2024</td>
                            <td>Servicios</td>
                            <td>Servicio de Luz</td>
                            <td>Sí</td>
                            <td>S/. 229.99</td>
                            <td>
                                <button className="btn btn-sm btn-outline-primary">✏️</button>
                                <button className="btn btn-sm btn-outline-danger" data-bs-toggle="modal" data-bs-target="#borrarGastoModal">🗑️</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* MODAL AGREGAR GASTO*/}
            <div className="modal fade" id="agregarGastoModal" tabIndex={-1} aria-labelledby="agregarGastoModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="agregarGastoModalLabel">Agregar Gasto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="fecha" className="form-label">Fecha</label>
                                    <input type="date" className="form-control" id="fecha" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="categoria" className="form-label">Categoría</label>
                                    <select className="form-select" id="categoria">
                                        <option value="Servicios">Servicios</option>
                                        <option value="Alimentación">Alimentación</option>
                                        <option value="Ocio">Ocio</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                                    <textarea className="form-control" id="descripcion" rows={3}></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="monto" className="form-label">Monto</label>
                                    <input type="number" className="form-control" id="monto" required/>
                                </div>
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" id="recurrente"/>
                                    <label className="form-check-label" htmlFor="recurrente">Recurrente</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Guardar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL AGREGAR GASTO*/}
            <div className="modal fade" id="borrarGastoModal" tabIndex={-1} aria-labelledby="borrarGastoModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="borrarGastoModalLabel">Confirmar Eliminación</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>¿Estás seguro de que deseas eliminar este gasto? Esta acción no se puede deshacer.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-danger">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    );
};

export default GastosPage;