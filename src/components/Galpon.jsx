import React from "react";

export default function Galpon({ data }) {
  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">Listado de Galpones</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">ID Galpón</th>
            <th className="border border-gray-300 p-2">Número de Aves</th>
          </tr>
        </thead>
        <tbody>
          {data.map((g) => (
            <tr key={g.id_galpon}>
              <td className="border border-gray-300 p-2">{g.id_galpon}</td>
              <td className="border border-gray-300 p-2">{g.numero_aves}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
