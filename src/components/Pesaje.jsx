import React from "react";

export default function Pesaje({ data }) {
  return (
    <div className="p-4 border rounded shadow-md bg-white mt-4">
      <h2 className="text-xl font-bold mb-4">Pesaje</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Fecha</th>
            <th className="border border-gray-300 p-2">Peso Promedio</th>
            <th className="border border-gray-300 p-2">ID Galpón</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p) => (
            <tr key={p.pesaje_id}>
              <td className="border border-gray-300 p-2">{p.pesaje_id}</td>
              <td className="border border-gray-300 p-2">{p.fecha}</td>
              <td className="border border-gray-300 p-2">{p.peso_promedio}</td>
              <td className="border border-gray-300 p-2">{p.id_galpon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
