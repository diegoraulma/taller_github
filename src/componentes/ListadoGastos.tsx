export interface ListadoGastosItem {
    fecha: string;
    categoriaId: number;
    descripcion: string;
    recurrente: string; 
    monto: number;
}

interface ListadoGastosProps {
    data: ListadoGastosItem[];
}

const ListadoGastos = (props: ListadoGastosProps) => {
    return (
        <>
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
                    {props.data.map((gasto, index) => (
                        <tr key={index}>
                            <td>
                                {gasto.fecha 
                                    ? new Date(gasto.fecha).toLocaleDateString("es-PE") 
                                    : "Fecha no disponible"}
                            </td>
                            <td>{gasto.categoriaId}</td>
                            <td>{gasto.descripcion}</td>
                            <td>{gasto.recurrente}</td>
                            <td>S/. {gasto.monto.toFixed(2)}</td>
                            <td>
                                <button className="btn btn-sm btn-outline-primary" data-bs-toggle="modal" data-bs-target="#modificarGastoModal">✏️</button>
                                <button className="btn btn-sm btn-outline-danger" data-bs-toggle="modal" data-bs-target="#borrarGastoModal">🗑️</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ListadoGastos;
