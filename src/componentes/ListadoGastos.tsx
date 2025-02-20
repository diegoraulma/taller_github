import { Categoria } from "./ModalesGasto"; // Ajusta la ruta si es necesario

export interface ListadoGastosItem {
    fecha: string;
    categoriaId: number;
    descripcion: string;
    recurrente: string; 
    monto: number;
}

interface ListadoGastosProps {
    data: ListadoGastosItem[];
    categorias: Categoria[];
}

const ListadoGastos = ({ data, categorias }: ListadoGastosProps) => {
    return (
        <table className="table table-hover align-middle">
            <thead className="table-primary">
                <tr>
                    <th className="text-center">Fecha</th>
                    <th className="text-center">Categoría</th>
                    <th className="text-center">Descripción</th>
                    <th className="text-center">Recurrente</th>
                    <th className="text-center">Monto</th>
                    <th className="text-center">Acción</th>
                </tr>
            </thead>
            <tbody>
                {data.map((gasto, index) => (
                    <tr key={index}>
                        <td>{new Date(gasto.fecha).toLocaleDateString("es-PE")}</td>
                        <td>{categorias.find((c) => c.id === gasto.categoriaId)?.nombre || "Desconocido"}</td>
                        <td>{gasto.descripcion}</td>
                        <td>{gasto.recurrente}</td>
                        <td>S/. {gasto.monto.toFixed(2)}</td>
                        <td>
                            <button className="btn btn-sm btn-outline-primary">✏️</button>
                            <button className="btn btn-sm btn-outline-danger">🗑️</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListadoGastos;