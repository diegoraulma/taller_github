import jsPDF from "jspdf"; // PARTE DE RODRIGO
import "jspdf-autotable";  // PARTE DE RODRIGO

import '../pages/styleperfil.css'; // Importamos nuestro styleperfil.css
import LateralPageUsuario from "../componentes/LateralPageUsuario"; // Aqui esta el menu lateral
import ModalesGasto from "../componentes/ModalesGasto";
import ModalesFiltrar from "../componentes/ModalesFiltrar";

const GastosPage = () => {
    const exportarCSV = () => {             // PARTE DE RODRIGO
        let csv = "Fecha,Categoría,Descripción,Recurrente,Monto\n";
        document.querySelectorAll("tbody tr").forEach(row => {
            const columns = row.querySelectorAll("td");
            csv += `${columns[0].innerText},${columns[1].innerText},${columns[2].innerText},${columns[3].innerText},${columns[4].innerText}\n`;
        });

        const blob = new Blob([csv], { type: "text/csv" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "gastos.csv";
        link.click();
    };

    const exportarPDF = () => {  //PARTE DE RODRIGO
        const doc = new jsPDF();
        doc.text("Mis Gastos", 14, 10);
        <html lang="en" className="autoTable">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body>
            
        </body>
        </html>;({
            head: [["Fecha", "Categoría", "Descripción", "Recurrente", "Monto"]],
            body: Array.from(document.querySelectorAll("tbody tr")).map(row =>
                Array.from(row.querySelectorAll("td")).map(cell => cell.innerText)
            ),
        });
        doc.save("gastos.pdf");
    };

    return (
        <div className = "body">
            {/* MENU LATERAL*/} 
            <LateralPageUsuario />

            {/* CONTENIDO PRINCIPAL*/}
            <div id="contenido">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h1 className="fs-4">Mis gastos</h1>
                    <div className="d-flex gap-2">
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#agregarFiltrarModal">Filtrar y Ordenar</button>
                        <div className="btn-group">
                            <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
                                Exportar
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" onClick={exportarCSV}>Exportar a CSV</button></li>
                                <li><button className="dropdown-item" onClick={exportarPDF}>Exportar a PDF</button></li>
                            </ul>
                        </div>
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

            {/*MODALES*/}
            <ModalesGasto/>
            <ModalesFiltrar/>
            
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    );
};

export default GastosPage;