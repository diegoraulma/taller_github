import React from "react";

interface TarjetaDashboardProps {
  titulo: string;
  valor: string | number;
}

const TarjetaDashboard: React.FC<TarjetaDashboardProps> = ({ titulo, valor }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text fs-2 text-center">{valor}</p>
      </div>
    </div>
  );
};

export default TarjetaDashboard;
