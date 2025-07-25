import React from "react";

export default function Vacunacion({ data }) {
  return (
    <div className="p-4 border rounded shadow-md bg-white mt-4">
      <h2 className="text-xl font-bold mb-4">Vacunación</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Fecha</th>
            <th className="border border-gray-300 p-2">Vacuna</th>
            <th className="border border-gray-300 p-2">Dosis</th>
            <th className="border border-gray-300 p-2">ID Galpón</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v) => (
            <tr key={v.vacunacion_id}>
              <td className="border border-gray-300 p-2">{v.vacunacion_id}</td>
              <td className="border border-gray-300 p-2">{v.fecha}</td>
              <td className="border border-gray-300 p-2">{v.vacuna}</td>
              <td className="border border-gray-300 p-2">{v.dosis}</td>
              <td className="border border-gray-300 p-2">{v.id_galpon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
