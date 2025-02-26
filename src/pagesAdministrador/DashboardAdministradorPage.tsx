// import { useEffect, useState } from "react";
// import '../pages/styleperfil.css';
// import LateralPageAdministrador from "../componentes/LateralPageAdministrador";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const DashboardAdministradorPage = () => {
//   const [stats, setStats] = useState({
//     totalUsuarios: 0,
//     monthlyData: Array(12).fill(0)
//   });
//   const [loading, setLoading] = useState(true);

//   const monthLabels = [
//     "Ene", "Feb", "Mar", "Abr", "May", "Jun", 
//     "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
//   ];

//   const URL_BACKEND = import.meta.env.VITE_URL_BACKEND || "http://localhost:5000"

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Usando Fetch API
//         const response = await fetch(URL_BACKEND + "/dashboard/users-stats");
        
//         if (!response.ok) {
//           throw new Error(`Error HTTP: ${response.status}`);
//         }
        
//         const data = await response.json();
        
//         const monthlyCounts = Array(12).fill(0);
//         data.monthlySignups.forEach(item => {
//           const month = new Date(item.month).getMonth();
//           monthlyCounts[month] = parseInt(item.count);
//         });

//         setStats({
//           totalUsuarios: data.totalUsers,
//           monthlyData: monthlyCounts
//         });

//       } catch (error) {
//         console.error("Error obteniendo datos:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Resto del componente se mantiene igual...
//   // (Mismo código de dataUsuariosMes, options y return)
  
//   return (
//     <div className="body">
//       <LateralPageAdministrador/>

//       <div id="contenido">
//         {/* Mismo JSX del componente */}
//       </div>
//     </div>
//   );
// };

// export default DashboardAdministradorPage;
