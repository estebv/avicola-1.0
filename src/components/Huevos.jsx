import React from "react";

export default function Huevos({ data }) {
  return (
    <div className="p-4 border rounded shadow-md bg-white mt-4">
      <h2 className="text-xl font-bold mb-4">Producción de Huevos</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Fecha</th>
            <th className="border border-gray-300 p-2">Cantidad</th>
            <th className="border border-gray-300 p-2">ID Galpón</th>
          </tr>
        </thead>
        <tbody>
          {data.map((h) => (
            <tr key={h.huevo_id}>
              <td className="border border-gray-300 p-2">{h.huevo_id}</td>
              <td className="border border-gray-300 p-2">{h.fecha}</td>
              <td className="border border-gray-300 p-2">{h.cantidad}</td>
              <td className="border border-gray-300 p-2">{h.id_galpon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
