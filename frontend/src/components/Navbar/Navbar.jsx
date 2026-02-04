
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const navRef = useRef(null);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (loggedUser) setUser(loggedUser);
  }, []);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="nav-main nav-sticky" ref={navRef}>
      {/* Logo */}
      <h2 className="nav-logo" onClick={() => navigate("/")}>
        AI Pet Adoption
      </h2>

      {/* Hamburger */}
      <div className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Menu */}
      <div className={`nav-menu ${menuOpen ? "show" : ""}`}>
        <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        {/* Pets */}
        <div className="nav-dropdown">
          <button className="nav-link" onClick={() => toggleDropdown("pets")}>
            Pets
          </button>
          {openDropdown === "pets" && (
            <div className="nav-dropdown-box">
              <Link to="/pets/dog" onClick={() => setOpenDropdown(null)}>Dogs</Link>
              <Link to="/pets/cat" onClick={() => setOpenDropdown(null)}>Cats</Link>
              <Link to="/pets/small" onClick={() => setOpenDropdown(null)}>Small Pets</Link>
            </div>
          )}
        </div>

        {/* Services */}
        <div className="nav-dropdown">
          <button className="nav-link" onClick={() => toggleDropdown("services")}>
            Pet Services
          </button>
          {openDropdown === "services" && (
            <div className="nav-dropdown-box">
              <Link to="/services/grooming" onClick={() => setOpenDropdown(null)}>Grooming</Link>
              {/* <Link to="/services/hostel" onClick={() => setOpenDropdown(null)}>Hostel</Link>
              <Link to="/services/training" onClick={() => setOpenDropdown(null)}>Training</Link> */}
            </div>
          )}
        </div>

        {/* Breeds */}
        <div className="nav-dropdown">
          <button className="nav-link" onClick={() => toggleDropdown("breeds")}>
            Breeds
          </button>
          {openDropdown === "breeds" && (
            <div className="nav-dropdown-box">
              <Link to="/breeds/dog" onClick={() => setOpenDropdown(null)}>Dog Breeds</Link>
              <Link to="/breeds/cat" onClick={() => setOpenDropdown(null)}>Cat Breeds</Link>
              <Link to="/breeds/smal" onClick={() => setOpenDropdown(null)}>Small Pet Breeds</Link>
            </div>
          )}
        </div>

        <Link className="nav-link" to="/recommendations">
          AI Match
        </Link>

        {!user ? (
          <Link className="nav-action" to="/login">
            Login
          </Link>
        ) : (
          <div className="nav-dropdown">
            <button className="nav-action" onClick={() => toggleDropdown("user")}>
              {user.name}
            </button>
            {openDropdown === "user" && (
              <div className="nav-dropdown-box">
                <Link to="/profile" onClick={() => setOpenDropdown(null)}>Profile</Link>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
