import { useState, useEffect } from "react";
import axios from "axios";


interface FiltrarGastosProps {
    showModal: boolean;
    onCloseModal: () => void;
    onAplicarFiltro: (filtro: { tipo: string; valor: string }) => void;
    filtroRecurrente: string;
    filtroMonto: string;
    filtroFecha: string;
    filtroCategoria: string;
}


const ModalFiltrarGastos = ({ 
    showModal, 
    onCloseModal, 
    onAplicarFiltro, 
    filtroRecurrente, 
    filtroMonto, 
    filtroFecha, 
    filtroCategoria 
}: FiltrarGastosProps) => {
    const [valorFiltro, setValorFiltro] = useState(filtroFecha);
    const [tipoFiltro, setTipoFiltro] = useState("fecha");
    const [categorias, setCategorias] = useState<{ id: number; nombre: string }[]>([]);

    const URL_BACKEND = import.meta.env.VITE_URL_BACKEND || "http://localhost:5000"

    useEffect(() => {
        if (tipoFiltro === "recurrente") {
            setValorFiltro(filtroRecurrente);
        } else if (tipoFiltro === "monto") {
            setValorFiltro(filtroMonto);
        } else if (tipoFiltro === "fecha") {
            setValorFiltro(filtroFecha);
        } else if (tipoFiltro === "categoria") {
            setValorFiltro(filtroCategoria);
        }
    }, [tipoFiltro, filtroRecurrente, filtroMonto, filtroFecha, filtroCategoria]);

    useEffect(() => {
        if (tipoFiltro === "categoria") {
            axios.get(URL_BACKEND + "/categorias")
                .then(response => {
                    setCategorias(response.data.categorias);
                })
                .catch(error => console.error("Error al obtener categorías:", error));
        }
    }, [tipoFiltro]);

    if (!showModal) return null;

    const aplicarFiltro = () => {
        if (!tipoFiltro || !valorFiltro) {
            console.error("Debe seleccionarse un tipo de filtro y un valor.");
            return;
        }
    
        onAplicarFiltro({ tipo: tipoFiltro, valor: valorFiltro });
        onCloseModal();
    };
    

    return (
        <>
        {showModal && <div className="modal-backdrop show"></div>}
        <div className="modal fade show d-block" tabIndex={-1} aria-hidden={!showModal}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Filtrar Gastos</h5>
                        <button type="button" className="btn-close" onClick={onCloseModal}></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label className="form-label">Filtrar por:</label>
                            <select className="form-select" value={tipoFiltro} onChange={(e) => setTipoFiltro(e.target.value)}>
                                <option value="sin filtro">Sin filtro</option> 
                                <option value="fecha">Fecha</option>
                                <option value="categoria">Categoría</option>
                                <option value="monto">Monto</option>
                                <option value="recurrente">Recurrente</option>
                            </select>

                        </div>

                        <div className="mb-3">
                            <label className="form-label">Valor:</label>
                            {tipoFiltro === "fecha" ? (
                                <input type="date" className="form-control" value={valorFiltro} onChange={(e) => setValorFiltro(e.target.value)} />
                            ) : tipoFiltro === "categoria" ? (
                                <select className="form-select" value={valorFiltro} onChange={(e) => setValorFiltro(e.target.value)}>
                                    <option value="">Seleccione una categoría</option>
                                    {categorias.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.nombre}</option>
                                    ))}
                                </select>
                            ) : tipoFiltro === "recurrente" ? (
                                <select className="form-select" value={valorFiltro} onChange={(e) => setValorFiltro(e.target.value)}>
                                    <option value="">Seleccione</option>
                                    <option value="Sí">Sí</option>
                                    <option value="No">No</option>
                                </select>
                            ) : (
                                <input type="number" className="form-control" value={valorFiltro} onChange={(e) => setValorFiltro(e.target.value)} />
                            )}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onCloseModal}>
                            Cancelar
                        </button>
                        <button type="button" className="btn btn-primary" onClick={aplicarFiltro}>
                            Aplicar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ModalFiltrarGastos;
