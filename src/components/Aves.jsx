import React from "react";

export default function Aves({ data }) {
  return (
    <div className="p-4 border rounded shadow-md bg-white mt-4">
      <h2 className="text-xl font-bold mb-4">Listado de Aves</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Raza</th>
            <th className="border border-gray-300 p-2">Fecha Nacimiento</th>
            <th className="border border-gray-300 p-2">Fecha Llegada</th>
            <th className="border border-gray-300 p-2">Origen</th>
            <th className="border border-gray-300 p-2">Total Aves</th>
            <th className="border border-gray-300 p-2">ID Galpón</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ave) => (
            <tr key={ave.ave_id}>
              <td className="border border-gray-300 p-2">{ave.ave_id}</td>
              <td className="border border-gray-300 p-2">{ave.raza}</td>
              <td className="border border-gray-300 p-2">{ave.fecha_nacimiento}</td>
              <td className="border border-gray-300 p-2">{ave.fecha_llegada}</td>
              <td className="border border-gray-300 p-2">{ave.origen}</td>
              <td className="border border-gray-300 p-2">{ave.total_aves}</td>
              <td className="border border-gray-300 p-2">{ave.id_galpon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
