import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white shadow-md rounded-xl p-4">
            <h2 className="text-sm text-gray-500">Total Galpones</h2>
            <p className="text-2xl font-bold text-green-600">4</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-4">
            <h2 className="text-sm text-gray-500">Aves Registradas</h2>
            <p className="text-2xl font-bold text-blue-600">320</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-4">
            <h2 className="text-sm text-gray-500">Huevos Hoy</h2>
            <p className="text-2xl font-bold text-yellow-600">890</p>
          </div>
        </div>

        {/* Tabla simulada o lista */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Actividad reciente</h2>
          <ul className="divide-y divide-gray-200">
            <li className="py-2 flex justify-between text-sm">
              <span>Ingreso de 30 aves</span>
              <span className="text-gray-500">Hace 3 horas</span>
            </li>
            <li className="py-2 flex justify-between text-sm">
              <span>Recolección de huevos en Galpón 2</span>
              <span className="text-gray-500">Hoy</span>
            </li>
          </ul>
        </div>

        {/* Botón de agregar */}
        <div className="mt-6 flex justify-end">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            + Agregar Registro
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
