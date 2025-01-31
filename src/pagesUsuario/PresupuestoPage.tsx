import { useState } from "react";
import LateralPageUsuario from "../componentes/LateralPageUsuario"
import ModalesPresupuesto from "../componentes/ModalesPresupuesto";
import '../pages/styleperfil.css';

const PresupuestosPage = ()=>{
    const [showModalAgregar,setShowModalAgregar] = useState<boolean>(false)
    const [showModalEditar,setShowModalEditar] = useState<boolean>(false)
    const [showModalEliminar,setShowModalEliminar] = useState<boolean>(false)

    const handleOpenModalAgregar = () => setShowModalAgregar(true)
    const handleCloseModalAgregar = () => setShowModalAgregar(false)

    const handleOpenModalEditar = () => setShowModalEditar(true)
    const handleCloseModalEditar = () => setShowModalEditar(false)

    const handleOpenModalEliminar = () => setShowModalEliminar(true)
    const handleCloseModalEliminar = () => setShowModalEliminar(false)
    
    return <div className="row body">
        <LateralPageUsuario/>
        {/* CONTENIDO PRINCIPAL*/}
        <div className="col contenido">
            <header className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="fs-4">Mis presupuestos</h1>
                <div className="d-flex gap-2">
                    <button className="btn btn-primary btn-sm" onClick={handleOpenModalAgregar}>Agregar</button> 
                </div>
            </header>

            {/* TABLA DE GASTOS*/}
            <table className="table table-hover align-middle">
                <thead className="table-primary">
                    <tr>
                        <th scope="col">Categoría</th>
                        <th scope="col">Monto</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ocio</td>
                        <td>S/. 129.99</td>
                        <td>
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-sm btn-outline-primary me-2"
                                    onClick={handleOpenModalEditar}>✏️</button>
                                <button className="btn btn-sm btn-outline-danger"
                                    onClick={handleOpenModalEliminar}>🗑️</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Servicios</td>
                        <td>S/. 1229.99</td>
                        <td>
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-sm btn-outline-primary me-2"
                                    onClick={handleOpenModalEditar}>✏️</button>
                                <button className="btn btn-sm btn-outline-danger"
                                    onClick={handleOpenModalEliminar}>🗑️</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Alimentación</td>
                        <td>S/. 779.99</td>
                        <td>
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-sm btn-outline-primary me-2"
                                    onClick={handleOpenModalEditar}>✏️</button>
                                <button className="btn btn-sm btn-outline-danger"
                                    onClick={handleOpenModalEliminar}>🗑️</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        {/*MODALES*/}
        <ModalesPresupuesto showModalAgregar={showModalAgregar}
            closeModalAgregar={handleCloseModalAgregar}
            showModalEditar = {showModalEditar}
            closeModalEditar={handleCloseModalEditar}
            showModalEliminar = {showModalEliminar}
            closeModalEliminar={handleCloseModalEliminar}/>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </div>
}

export default PresupuestosPage