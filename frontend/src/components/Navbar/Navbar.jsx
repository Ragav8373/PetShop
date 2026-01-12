import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>AI Pet Adoption</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/pets">Pets</Link>
        <Link to="/recommendations">AI Match</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
