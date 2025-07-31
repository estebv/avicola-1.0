import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
        Bienvenido a La Reina 🐔
      </h1>
      <p className="text-gray-600 text-lg mb-6 max-w-md">
        Administra tus galpones, aves y producción de huevos de forma fácil y rápida.
      </p>
      <Link to="/dashboard">
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition">
          Ir al Dashboard
        </button>
      </Link>
    </div>
  );
};

export default Home;
