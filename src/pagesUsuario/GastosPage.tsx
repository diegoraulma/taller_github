import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "../pages/styleperfil.css"; // Importamos nuestro styleperfil.css
import LateralPageUsuario from "../componentes/LateralPageUsuario"; // Menú lateral
import ListadoGastos, { ListadoGastosItem } from "../componentes/ListadoGastos";
import ModalFiltrarGastos from "../componentes/ModalFiltrar";
import ModalOrdenarGastos from "../componentes/ModalOrdenarGastos";
import ModalModificar from "../componentes/ModalModificar";
import { useEffect, useState } from "react";
import ModalAgregarGasto, { Categoria } from "../componentes/ModalAgregarGasto";
import ModalBorrarGasto from "../componentes/ModalBorrarGasto";
import axios from "axios"; // 🔹 Importamos axios

const GastosPage = () => {
    const [gastos, setGastos] = useState<ListadoGastosItem[]>([]);
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [showModalGasto, setShowModalGasto] = useState<boolean>(false);
    const [showModalBorrar, setShowModalBorrar] = useState<boolean>(false);
    const [gastoSeleccionado, setGastoSeleccionado] = useState<number | null>(null); // 🔹 Guardar el ID del gasto a eliminar
    const [showModalOrdenar, setShowModalOrdenar] = useState<boolean>(false);
    const [showModalFiltrar, setShowModalFiltrar] = useState<boolean>(false);

    const httpObtenerGastos = async () => {
        const url = "http://localhost:5000/gastos/";
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            if (data.msg === "") {
                setGastos(data.gastos);
            } else {
                console.error(`Error al obtener gastos: ${data.msg}`);
            }
        } catch (error) {
            console.error("Error al conectar con el servidor:", error);
        }
    };

    useEffect(() => {
        obtenerGastos();
    }, []);

    useEffect(() => {
        obtenerGastosFiltro({ tipo: "fecha", valor: "2024-05-19" }); // Valor de prueba
    }, []);
    

    const obtenerGastos = async (orden = "fecha") => {
        try {
            const resp = await axios.get(`http://localhost:5000/gastos?orden=${orden}`);
            setGastos(resp.data.gastos);
        } catch (error) {
            console.error("Error al obtener gastos:", error);
        }
    };

    const obtenerGastosFiltro = async ({ tipo, valor }: { tipo: string; valor: string }) => {
        if (!tipo) {
            console.error("Error: Falta el tipo de filtro.");
            return;
        }
    
        const url = valor
            ? `http://localhost:5000/gastos?filtro=${tipo}&valor=${valor}`
            : `http://localhost:5000/gastos?filtro=${tipo}`;
    
        console.log(`Consultando API con filtro: Tipo=${tipo}, Valor=${valor || "Todos"}`);
    
        try {
            const resp = await axios.get(url);
            console.log("Respuesta del servidor:", resp.data);
            setGastos(resp.data.gastos);
        } catch (error) {
            console.error("Error al obtener gastos:", error);
        }
    };

    const httpObtenerCategorias = async () => {
        const url = "http://localhost:5000/categorias";
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            if (data.msg === "") {
                setCategorias(data.categorias);
            } else {
                console.error(`Error al obtener las categorías: ${data.msg}`);
            }
        } catch (error) {
            console.error("Error al conectar con el servidor:", error);
        }
    };

    const httpGuardarGasto = async (nuevoGasto: ListadoGastosItem) => {
        const url = "http://localhost:5000/gastos";
        try {
            const resp = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(nuevoGasto),
            });

            if (!resp.ok) throw new Error(`Error HTTP: ${resp.status}`);

            const data = await resp.json();
            if (data.msg === "") {
                httpObtenerGastos(); // 🔹 Recargar la lista de gastos
            } else {
                console.error(`Error al guardar gasto: ${data.msg}`);
            }
        } catch (error) {
            console.error("Error al conectar con el servidor:", error);
        }
    };

    // 🔹 Eliminar un gasto y actualizar la tabla
    const httpEliminarGasto = async () => {
        if (gastoSeleccionado === null) return;

        try {
            await axios.post("http://localhost:5000/gastos/eliminar", { id: gastoSeleccionado });

            alert("Gasto eliminado correctamente");
            setGastos((prevGastos) => prevGastos.filter((gasto) => gasto.id !== gastoSeleccionado));
            closeModalBorrar();
        } catch (error) {
            console.error("Error al eliminar gasto:", error);
            alert("No se pudo eliminar el gasto");
        }
    };

    useEffect(() => {
        httpObtenerGastos();
        httpObtenerCategorias();
    }, []);

    const openModalGasto = () => setShowModalGasto(true);
    const closeModalGasto = () => setShowModalGasto(false);

    const openModalBorrar = (id: number) => {
        setGastoSeleccionado(id);
        setShowModalBorrar(true);
    };

    const closeModalBorrar = () => {
        setGastoSeleccionado(null);
        setShowModalBorrar(false);
    };

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
                    <button className="btn btn-primary" onClick={() => setShowModalOrdenar(true)}>
                    Ordenar
                    </button>
                    <button className="btn btn-primary" onClick={() => setShowModalFiltrar(true)}>
                    Filtrar
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
                <ListadoGastos data={gastos} categorias={categorias} onDelete={openModalBorrar} />
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

            <ModalFiltrarGastos
                showModal={showModalFiltrar}
                onCloseModal={() => setShowModalFiltrar(false)}
                onAplicarFiltro={obtenerGastosFiltro}
            />

            <ModalOrdenarGastos
                showModal={showModalOrdenar}
                onCloseModal={() => setShowModalOrdenar(false)}
                onAplicarOrden={obtenerGastos}
            />

            <ModalBorrarGasto
                showModal={showModalBorrar}
                onCloseModal={closeModalBorrar}
                onBorrarGasto={httpEliminarGasto}
            />

            <ModalModificar />

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    );
};

export default GastosPage;
