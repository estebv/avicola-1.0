// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">La Reina Huevo</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/galpones">Galpones</Link></li>
        <li><Link to="/aves">Aves</Link></li>
        <li><Link to="/huevos">Huevos</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
