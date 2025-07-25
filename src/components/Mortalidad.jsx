import React from "react";

export default function Mortalidad({ data }) {
  return (
    <div className="p-4 border rounded shadow-md bg-white mt-4">
      <h2 className="text-xl font-bold mb-4">Mortalidad</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Estado Salud</th>
            <th className="border border-gray-300 p-2">Fecha Muerte</th>
            <th className="border border-gray-300 p-2">Causa Muerte</th>
            <th className="border border-gray-300 p-2">Número Aves</th>
            <th className="border border-gray-300 p-2">ID Galpón</th>
          </tr>
        </thead>
        <tbody>
          {data.map((m) => (
            <tr key={m.mortalidad_id}>
              <td className="border border-gray-300 p-2">{m.mortalidad_id}</td>
              <td className="border border-gray-300 p-2">{m.estado_salud}</td>
              <td className="border border-gray-300 p-2">{m.fecha_muerte}</td>
              <td className="border border-gray-300 p-2">{m.causa_muerte}</td>
              <td className="border border-gray-300 p-2">{m.numero_aves}</td>
              <td className="border border-gray-300 p-2">{m.id_galpon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
