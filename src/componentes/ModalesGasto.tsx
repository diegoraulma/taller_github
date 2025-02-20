import { useState } from "react";
import { ListadoGastosItem } from "./ListadoGastos";

export interface Categoria {
  id: number;
  nombre: string;
}

interface AgregarGastoProps {
  showModal: boolean;
  onCloseModal: () => void;
  onGuardarGasto: (gasto: ListadoGastosItem) => void; //se acepta un objeto completo
  categorias: Categoria[];
}

const ModalesGasto = (props: AgregarGastoProps) => {
  const [fecha, setFecha] = useState<string>("");
  const [categoriaId, setCategoriaId] = useState<number>(0);
  const [descripcion, setDescripcion] = useState<string>("");
  const [recurrente, setRecurrente] = useState<boolean>(false);
  const [monto, setMonto] = useState<number>(0);

  const fechaChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFecha(e.target.value);
  };

  const categoriaIdChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoriaId(parseInt(e.target.value));
  };

  const descripcionChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescripcion(e.target.value);
  };

  const recurrenteChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecurrente(e.target.checked); // `checked` devuelve true o false
  };

  const montoChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonto(parseFloat(e.target.value));
  };

  const handleGuardarGasto = () => {
    const nuevoGasto: ListadoGastosItem = {
      fecha,
      categoriaId,
      descripcion,
      recurrente: recurrente ? "Sí" : "No", // Convierte booleano en texto
      monto: isNaN(monto) ? 0 : monto // Evitar NaN
    };
  
    console.log("Enviando gasto al backend:", nuevoGasto);
    props.onGuardarGasto(nuevoGasto);
    props.onCloseModal();
  };

  return (
    <>
      {/* Modal Agregar Gasto */}
      <div className={`modal fade ${props.showModal ? "show d-block" : ""}`} 
           id="agregarGastoModal"
           tabIndex={-1} 
           aria-labelledby="agregarGastoModalLabel" 
           aria-hidden={!props.showModal}>

        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="agregarGastoModalLabel">Agregar Gasto</h5>
              <button type="button" className="btn-close" onClick={props.onCloseModal} />
            </div>
            <div className="modal-body">
              <form>
                {/* Fecha */}
                <div className="mb-3">
                  <label htmlFor="fecha" className="form-label">Fecha</label>
                  <input type="date" className="form-control" id="fecha" value={fecha} onChange={fechaChangeHandler} required />
                </div>

                {/* Categoría */}
                <div className="mb-3">
                  <label htmlFor="categoria" className="form-label">Categoría</label>
                  <select className="form-select" id="categoria" value={categoriaId} onChange={categoriaIdChangeHandler} required>
                    <option value={0}>Seleccionar...</option>
                    {props.categorias.map((cat: Categoria) => (
                      <option key={cat.id} value={cat.id}>{cat.nombre}</option>
                    ))}
                  </select>
                </div>

                {/* Recurrente */}
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="recurrente" checked={recurrente} onChange={recurrenteChangeHandler} />
                  <label htmlFor="recurrente" className="form-check-label">Recurrente</label>
                </div>

                {/* Descripción */}
                <div className="mb-3">
                  <label htmlFor="descripcion" className="form-label">Descripción</label>
                  <textarea className="form-control" id="descripcion" rows={3} placeholder="Escriba aquí el detalle" value={descripcion} onChange={descripcionChangeHandler}></textarea>
                </div>

                {/* Monto */}
                <div className="mb-3">
                  <label htmlFor="monto" className="form-label">Monto</label>
                  <input type="number" className="form-control" id="monto" placeholder="Ingrese el monto" value={monto} onChange={montoChangeHandler} required />
                </div>
              </form>
            </div>

            {/* Botones */}
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={props.onCloseModal}>Cancelar</button>
              <button type="submit" className="btn btn-primary" onClick={handleGuardarGasto}>Aceptar</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Borrar Gasto */}
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
    </>
  );
};

export default ModalesGasto;