import { useEffect, useState } from "react";
import '../pages/styleperfil.css';
import LateralPageAdministrador from "../componentes/LateralPageAdministrador";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardAdministradorPage = () => {
  const totalUsuarios = 12; // Total de usuarios registrados

  const dataUsuariosMes = {
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

  const options = {
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
      <div id="cajamenu">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile Picture"
          className="profile-img"
        />
        <h2>Jessica Straus</h2>
        <div id="menu">
          <a href="#" className="activo">
            Dashboard
          </a>
          <a href="#">
            Usuarios
          </a>
          <a href="#">
            Historial
          </a>
          <a href="#">
            Configuración
          </a>
          <a href="#">
            Salir
          </a>
        </div>
      </div>

      {/* Contenido Principal */}
      <div id="contenido">
        <header className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="fs-4">Dashboards</h1>
        </header>

        {/* Tarjeta de Usuarios Totales */}
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Usuarios Totales</h5>
            <p className="card-text fs-2 text-center">{totalUsuarios}</p>
          </div>
        </div>

        {/* Gráfico de Usuarios Nuevos */}
        <div className="card">
          <div className="card-body">
            <Bar data={dataUsuariosMes} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdministradorPage;
