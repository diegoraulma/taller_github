import React, { useEffect, useState } from "react";
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
  const [stats, setStats] = useState({
    totalUsuarios: 0,
    monthlyData: Array(12).fill(0)
  });
  const [loading, setLoading] = useState(true);

  const monthLabels = [
    "Ene", "Feb", "Mar", "Abr", "May", "Jun", 
    "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Usando Fetch API
        const response = await fetch("http://localhost:3000/dashboard/users-stats");
        
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        
        const monthlyCounts = Array(12).fill(0);
        data.monthlySignups.forEach(item => {
          const month = new Date(item.month).getMonth();
          monthlyCounts[month] = parseInt(item.count);
        });

        setStats({
          totalUsuarios: data.totalUsers,
          monthlyData: monthlyCounts
        });

      } catch (error) {
        console.error("Error obteniendo datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Resto del componente se mantiene igual...
  // (Mismo código de dataUsuariosMes, options y return)
  
  return (
    <div className="body">
      <LateralPageAdministrador/>

      <div id="contenido">
        {/* Mismo JSX del componente */}
      </div>
    </div>
  );
};

export default DashboardAdministradorPage;
