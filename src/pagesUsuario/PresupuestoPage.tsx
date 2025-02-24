import { useEffect, useState } from "react";
import LateralPageUsuario from "../componentes/LateralPageUsuario"
import ModalesPresupuesto from "../componentes/ModalesPresupuesto";
import '../pages/styleperfil.css';

interface Categoria {
    id?: number;
    nombre: string;
    presupuestoTotal?: number;
};

interface Presupuesto {
    id?: number;
    categoriaId: number;
    monto: number;
    Categoria?: Categoria;
};

const PresupuestosPage = ()=>{
    const [presupuestos, setPresupuestos] = useState<Presupuesto[]> ([])
    const [presupuestoSeleccionado, setPresupuestoSeleccionado] = useState<Presupuesto | null>(null);
    const [showModalAgregar,setShowModalAgregar] = useState<boolean>(false)
    const [showModalEditar,setShowModalEditar] = useState<boolean>(false)
    const [showModalEliminar,setShowModalEliminar] = useState<boolean>(false)

    const httpObtenerPresupuestos = async () => {
        const url = "http://localhost:5000/presupuesto/";
            try {
                const resp = await fetch(url);
                const data = await resp.json();
                if (data.msg === "") {
                    setPresupuestos(data.presupuestos || []);
                } else {
                    console.error(`Error al obtener usuarios: ${data.msg}`);
                }
            } catch (error) {
                console.error("Error al conectar con el servidor:", error);
            }
    }

    const httpGuardarPresupuesto = async (nuevoPpto: Presupuesto) => {
        const url = "http://localhost:5000/presupuesto/";
        try {
            console.log("Intentando guardar presupuesto:", nuevoPpto);
            const resp = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(nuevoPpto),
            });
    
            if (!resp.ok) {
                throw new Error(`Error HTTP: ${resp.status}`);
            }
    
            const data = await resp.json();
            console.log("Respuesta del backend:", data);
    
            if (data.msg === "") {
                console.log("Presupuesto registrado con éxito");
                httpObtenerPresupuestos();
                setShowModalAgregar(false);
            } else {
                console.error(`Error al registrar presupuesto: ${data.msg}`);
            }
        } catch (error) {
            console.error("Error al conectar con el servidor:", error);
        }
    };

    const httpEditarPresupuesto = async(id:number, pptoActualizado:Presupuesto) =>{
        const url = `http://localhost:5000/presupuesto/${id}`;
        try{
          console.log("Intentando actualizar presupuesto:", pptoActualizado);
    
          const resp = await fetch(url,{
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(pptoActualizado),
          });
    
          if(!resp.ok){
            throw new Error(`Error HTTP: ${resp.status}`);
          }
    
          const data = await resp.json();
          console.log("Respuesta del backend:", data);
    
          if(data.msg === ""){
            console.log("Presupuesto actualizado con éxito");
            httpObtenerPresupuestos(); // Recargar la lista de gastos
            setShowModalEditar(false);
          } else{
            console.error(`Error al actualizar presupuesto: ${data.msg}`);
          }
        } catch(error){
          console.error("Error al conectar con el servidor:", error);
          return { msg: "Error al actualizar presupuesto" };
        }
    }

    const httpEliminarPresupuesto = async(id:number) =>{
        const url = `http://localhost:5000/presupuesto/${id}`;
        try{
          console.log("Intentando eliminar presupuesto con ID:", id);
    
          const resp = await fetch(url,{
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          if(!resp.ok){
            throw new Error(`Error HTTP: ${resp.status}`);
          }
    
          const data = await resp.json();
          console.log("Respuesta del backend:", data);
    
          if(data.msg === ""){
            console.log("Presupuesto eliminado con éxito");
            httpObtenerPresupuestos();
            setShowModalEliminar(false);
          } else{
            console.error(`Error al eliminar usuario: ${data.msg}`);
          }
        } catch(error){
          console.error("Error al conectar con el servidor:", error);
          return { msg: "Error al eliminar usuario" };
        }
      }

    const handleCloseModalAgregar = () => setShowModalAgregar(false)

    const handleCloseModalEditar = () => {
        setPresupuestoSeleccionado(null);
        setShowModalEditar(false);
    };

    const handleCloseModalEliminar = () => {
        setPresupuestoSeleccionado(null);
        setShowModalEliminar(false);
    };

    useEffect(()=>{
        httpObtenerPresupuestos()
    },[])
    
    return <div className="row body">
        <LateralPageUsuario/>
        {/* CONTENIDO PRINCIPAL*/}
        <div className="col contenido">
            <header className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="fs-4">Mis presupuestos</h1>
                <div className="d-flex gap-2">
                    <button className="btn btn-primary btn-sm" onClick={() => setShowModalAgregar(true)}>Agregar</button> 
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
                    {presupuestos.map(ppto => (
                        <tr key={ppto.id}>
                            <td>{ppto.Categoria?.nombre}</td>
                            <td>S/. {ppto.monto}</td>
                            <td>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-sm btn-outline-primary me-2"
                                        onClick={()=>{setPresupuestoSeleccionado(ppto); setShowModalEditar(true)}}>✏️</button>
                                    <button className="btn btn-sm btn-outline-danger"
                                        onClick={()=>{setPresupuestoSeleccionado(ppto); setShowModalEliminar(true)}}>🗑️</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/*MODALES*/}
        <ModalesPresupuesto
            presupuestoSeleccionado={presupuestoSeleccionado}
            showModalAgregar={showModalAgregar}
            closeModalAgregar={handleCloseModalAgregar}
            showModalEditar={showModalEditar}
            closeModalEditar={handleCloseModalEditar}
            showModalEliminar={showModalEliminar}
            closeModalEliminar={handleCloseModalEliminar}
            httpGuardarPresupuesto={httpGuardarPresupuesto}
            httpEditarPresupuesto={httpEditarPresupuesto}
            httpEliminarPresupuesto={httpEliminarPresupuesto}
        />

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </div>
}

export default PresupuestosPage