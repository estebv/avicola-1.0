import React from "react";

export default function Alimentos({ data }) {
  return (
    <div className="p-4 border rounded shadow-md bg-white mt-4">
      <h2 className="text-xl font-bold mb-4">Control de Alimentos</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Fecha</th>
            <th className="border border-gray-300 p-2">Cantidad</th>
            <th className="border border-gray-300 p-2">Tipo Alimento</th>
            <th className="border border-gray-300 p-2">ID Galpón</th>
          </tr>
        </thead>
        <tbody>
          {data.map((a) => (
            <tr key={a.alimento_id}>
              <td className="border border-gray-300 p-2">{a.alimento_id}</td>
              <td className="border border-gray-300 p-2">{a.fecha}</td>
              <td className="border border-gray-300 p-2">{a.cantidad}</td>
              <td className="border border-gray-300 p-2">{a.tipo_alimento}</td>
              <td className="border border-gray-300 p-2">{a.id_galpon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
