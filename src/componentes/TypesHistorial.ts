export interface ListadoHistorialItem {
  id: string;
  nombre: string;
  correo: string;
  fecha: string;
  hora: string;
  accion: string;
}

export interface ListadoHistorialProps {
  data: ListadoHistorialItem[];
}
