// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Bienvenido a La Reina Huevo</h1>
      <p className="mb-6 text-gray-600">
        Sistema de gestión avícola: galpones, aves, producción y más.
      </p>
      <Link
        to="/dashboard"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Ir al Dashboard
      </Link>
    </div>
  );
};

export default Home;
