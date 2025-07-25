
// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Galpon from "./components/Galpon";
import Aves from "./components/Aves";
import Huevos from "./components/Huevos";
// ... importa los demás componentes

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/galpones" element={<Galpon />} />
        <Route path="/aves" element={<Aves />} />
        <Route path="/huevos" element={<Huevos />} />
        {/* ... las demás rutas */}
      </Routes>
    </Router>
  );
}

export default App;
