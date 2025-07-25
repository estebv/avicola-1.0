// src/pages/Dashboard.jsx
import React from "react";

const Dashboard = () => {
  const stats = [
    { title: "Total Aves", value: 1200, color: "bg-blue-500" },
    { title: "Huevos Hoy", value: 350, color: "bg-yellow-500" },
    { title: "Mortalidad", value: 5, color: "bg-red-500" },
    { title: "Consumo Alimento (kg)", value: 75, color: "bg-green-500" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-lg text-white ${item.color}`}
          >
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-2xl font-bold mt-2">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Sección rápida de navegación */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Módulos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Galpones", "Aves", "Huevos", "Alimentos", "Vacunación"].map(
            (mod, idx) => (
              <div
                key={idx}
                className="p-5 border rounded-xl shadow hover:bg-gray-100 cursor-pointer transition"
              >
                <h3 className="text-lg font-semibold">{mod}</h3>
                <p className="text-sm text-gray-600">Ver detalles de {mod}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
