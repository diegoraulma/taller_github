import { useState } from "react";
import { Categoria } from "./ModalAgregarGasto";
import axios from "axios";
import ModalBorrarGasto from "./ModalBorrarGasto"; // 🔹 Importamos el modal

export interface ListadoGastosItem {
    id: number;
    fecha: string;
    categoriaId: number;
    descripcion: string;
    recurrente: string;
    monto: number;
}

interface ListadoGastosProps {
    data: ListadoGastosItem[];
    categorias: Categoria[];
    onDelete: (id: number) => void;
}

const ListadoGastos = ({ data, categorias, onDelete }: ListadoGastosProps) => {
    const [gastoSeleccionado, setGastoSeleccionado] = useState<number | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);

    // 🔹 Abrir modal y guardar el gasto a eliminar
    const abrirModalEliminar = (id: number) => {
        setGastoSeleccionado(id);
        setShowModal(true);
    };

    // 🔹 Cerrar modal sin eliminar
    const cerrarModalEliminar = () => {
        setGastoSeleccionado(null);
        setShowModal(false);
    };

    // 🔹 Eliminar gasto después de confirmar en el modal
    const eliminarGasto = async () => {
        if (gastoSeleccionado === null) return;

        try {
            await axios.post("http://localhost:5000/gastos/eliminar", { id: gastoSeleccionado });

            alert("Gasto eliminado correctamente");
            onDelete(gastoSeleccionado); // 🔹 Actualiza la tabla en `GastosPage.tsx`
            cerrarModalEliminar(); // 🔹 Cierra el modal
        } catch (error) {
            console.error("Error al eliminar gasto:", error);
            alert("No se pudo eliminar el gasto");
        }
    };

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
                    {data.map((gasto) => (
                        <tr key={gasto.id}>
                            <td>{new Date(gasto.fecha).toLocaleDateString("es-PE")}</td>
                            <td>{categorias.find((c) => c.id === gasto.categoriaId)?.nombre || "Desconocido"}</td>
                            <td>{gasto.descripcion}</td>
                            <td>{gasto.recurrente}</td>
                            <td>S/. {gasto.monto.toFixed(2)}</td>
                            <td>
                                <button className="btn btn-sm btn-outline-primary">✏️</button>
                                <button
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => abrirModalEliminar(gasto.id)}
                                >
                                    🗑️
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* 🔹 Modal de Confirmación de Eliminación */}
            <ModalBorrarGasto
                showModal={showModal}
                onCloseModal={cerrarModalEliminar}
                onBorrarGasto={eliminarGasto}
            />
        </>
    );
};

export default ListadoGastos;
