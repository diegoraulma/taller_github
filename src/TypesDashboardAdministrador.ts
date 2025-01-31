// src/types.ts
export interface DatosGrafico {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderRadius: number;
  }[];
}

export interface OpcionesGrafico {
  responsive: boolean;
  plugins: {
    legend: {
      display: boolean;
      position: string;
    };
    title: {
      display: boolean;
      text: string;
    };
  };
}
