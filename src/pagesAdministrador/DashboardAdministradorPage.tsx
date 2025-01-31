import React from "react";
import "../styles/styleperfil.css';
import LateralPageAdministrador from "../componentes/LateralPageAdministrador"; // Aquí está el menú lateral
import TarjetaDashboard from "../componentes/TarjetaDashboard"; // Componente de tarjeta reutilizable
import GraficoBarras from "../componentes/GraficoBarras"; // Componente de gráfico reutilizable
import { DatosGrafico, OpcionesGrafico } from "../types";

const DashboardAdministradorPage: React.FC = () => {
  const totalUsuarios = 12; // Total de usuarios registrados

  // Datos para el gráfico
  const datosUsuariosMes: DatosGrafico = {
    labels: [
      "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
    ],
    datasets: [
      {
        label: "Usuarios nuevos por mes",
        data: [200, 150, 300, 500, 250, 400, 600, 700, 850, 1000, 750, 500],
        backgroundColor: "#007bff",
        borderRadius: 5,
      },
    ],
  };

  // Opciones para el gráfico
  const opcionesGrafico: OpcionesGrafico = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Usuarios nuevos por mes",
      },
    },
  };

  return (
    <div className="body">
      {/* Menú Lateral */}
      <LateralPageAdministrador />

      {/* Contenido Principal */}
      <div id="contenido">
        <header className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="fs-4">Dashboards</h1>
        </header>

        {/* Tarjeta de Usuarios Totales */}
        <TarjetaDashboard titulo="Usuarios Totales" valor={totalUsuarios} />

        {/* Gráfico de Usuarios Nuevos */}
        <div className="card">
          <div className="card-body">
            <GraficoBarras datos={datosUsuariosMes} opciones={opcionesGrafico} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdministradorPage;
