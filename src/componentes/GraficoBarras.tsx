import React from "react";
import { Bar } from "react-chartjs-2";
import { DatosGrafico, OpcionesGrafico } from "../types";

interface GraficoBarrasProps {
  datos: DatosGrafico;
  opciones: OpcionesGrafico;
}

const GraficoBarras: React.FC<GraficoBarrasProps> = ({ datos, opciones }) => {
  return <Bar data={datos} options={opciones} />;
};

export default GraficoBarras;
