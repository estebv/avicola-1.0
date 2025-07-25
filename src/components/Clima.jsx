import React from "react";

export default function Clima({ data }) {
  return (
    <div className="p-4 border rounded shadow-md bg-white mt-4">
      <h2 className="text-xl font-bold mb-4">Clima</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Fecha</th>
            <th className="border border-gray-300 p-2">Temperatura</th>
            <th className="border border-gray-300 p-2">Humedad</th>
            <th className="border border-gray-300 p-2">ID Galpón</th>
          </tr>
        </thead>
        <tbody>
          {data.map((c) => (
            <tr key={c.clima_id}>
              <td className="border border-gray-300 p-2">{c.clima_id}</td>
              <td className="border border-gray-300 p-2">{c.fecha}</td>
              <td className="border border-gray-300 p-2">{c.temperatura}</td>
              <td className="border border-gray-300 p-2">{c.humedad}</td>
              <td className="border border-gray-300 p-2">{c.id_galpon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
