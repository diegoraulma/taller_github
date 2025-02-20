import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import "../pages/styleperfil.css"; // Importamos nuestro styleperfil.css
import LateralPageUsuario from "../componentes/LateralPageUsuario"; // Aquí está el menú lateral
import ListadoGastos, { ListadoGastosItem } from "../componentes/ListadoGastos";
import ModalesFiltrar from "../componentes/ModalesFiltrar";
import ModalModificar from "../componentes/ModalModificar";
import { useEffect, useState } from "react";
import ModalAgregarGasto, { Categoria } from "../componentes/ModalAgregarGasto";
import ModalBorrarGasto from "../componentes/ModalBorrarGasto";


const GastosPage = () => {
    const [gastos, setGastos] = useState<ListadoGastosItem[]>([]);
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [showModalGasto, setShowModalGasto] = useState<boolean>(false);
    const [showModalBorrar, setShowModalBorrar] = useState<boolean>(false);

    const httpObtenerGastos = async () => {
        const url = "http://localhost:5000/gastos/";
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            console.log(data)   //Comprobamos la data
            if (data.msg === "") {
                setGastos(data.gastos);
                console.log(data.gastos);   //Comprobamos la data
            } else {
                console.error(`Error al obtener gastos: ${data.msg}`);
            }
        } catch (error) {
            console.error("Error al conectar con el servidor:", error);
        }
    };

    const httpObtenerCategorias = async () => {
        const url = "http://localhost:5000/categorias"
        const resp = await fetch(url)
        const data = await resp.json()
        if(data.msg == ""){
            const listaCategorias = data.categorias
            setCategorias(listaCategorias)
        }
        else{
            console.error(`Error al obtener las categorias: ${data.msg}`)
        }
    }

    const httpGuardarGasto = async (nuevoGasto: ListadoGastosItem) => {
        const url = "http://localhost:5000/gastos"; // Asegurar que esta URL es correcta
        try {
            console.log("Intentando guardar gasto:", nuevoGasto);
            const resp = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(nuevoGasto),
            });
    
            if (!resp.ok) {
                throw new Error(`Error HTTP: ${resp.status}`);
            }
    
            const data = await resp.json();
            console.log("Respuesta del backend:", data);
    
            if (data.msg === "") {
                console.log("Gasto guardado con éxito");
                httpObtenerGastos(); // Recargar la lista de gastos
            } else {
                console.error(`Error al guardar gasto: ${data.msg}`);
            }
        } catch (error) {
            console.error("Error al conectar con el servidor:", error);
        }
    };
    
    useEffect(() => {
        httpObtenerGastos();
        httpObtenerCategorias()
    }, []);

    const openModalGasto = () => {
        setShowModalGasto(true)
    }

    const closeModalGasto = () => {
        setShowModalGasto(false)
    }

    const openModalBorrar = () => {
        setShowModalBorrar(true)
    }

    const closeModalBorrar = () => {
        setShowModalBorrar(false)
    }

    const exportarCSV = () => {
        let csv = "Fecha,Categoría,Descripción,Recurrente,Monto\n";
        gastos.forEach((gasto) => {
            csv += `${gasto.fecha},${gasto.categoriaId},${gasto.descripcion},${gasto.recurrente},${gasto.monto}\n`;
        });

        const blob = new Blob([csv], { type: "text/csv" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "gastos.csv";
        link.click();
    };

    const exportarPDF = () => {
        const doc = new jsPDF();
        doc.text("Mis Gastos", 14, 10);
        autoTable(doc, {
            head: [["Fecha", "Categoría", "Descripción", "Recurrente", "Monto"]],
            body: gastos.map((gasto) => [
                gasto.fecha,
                gasto.categoriaId,
                gasto.descripcion,
                gasto.recurrente,
                gasto.monto,
            ]),
        });
        doc.save("gastos.pdf");
    };

    return (
        <div className="body">
            {/* Menú lateral */}
            <LateralPageUsuario />

            {/* Contenido principal */}
            <div id="contenido">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h1 className="fs-4">Mis gastos</h1>
                    <div className="d-flex gap-2">
                    <button className="btn btn-primary">
                            Filtrar y Ordenar
                        </button>
                        <div className="btn-group">
                            <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
                                Exportar
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <button className="dropdown-item" onClick={exportarCSV}>
                                        Exportar a CSV
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-item" onClick={exportarPDF}>
                                        Exportar a PDF
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <button className="btn btn-success" onClick={openModalGasto}>
                            Agregar
                        </button>
                    </div>
                </header>

                {/* Tabla de gastos */}
                <ListadoGastos data={gastos} categorias={categorias} />
            </div>

            <ModalAgregarGasto 
                showModal={showModalGasto} 
                onCloseModal={closeModalGasto} 
                onGuardarGasto={async (nuevoGasto) => {
                    await httpGuardarGasto(nuevoGasto);
                    await httpObtenerGastos();
                    closeModalGasto();
                }} 
                categorias={categorias}
            />

            <ModalBorrarGasto 
                showModal={showModalBorrar} 
                onCloseModal={closeModalBorrar} 
                onBorrarGasto={() => console.log("Eliminar gasto")} 
            />
            <ModalesFiltrar />
            <ModalModificar />

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    );
};

export default GastosPage;