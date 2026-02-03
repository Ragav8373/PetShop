// import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <h2>AI Pet Adoption</h2>
//       <div>
//         <Link to="/">Home</Link>
//         <Link to="/pets">Pets</Link>
//         <Link to="/recommendations">AI Match</Link>
//         <Link to="/login">Login</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <h2>AI Pet Adoption</h2>
//       <div className="nav-links">
//         {/* Home */}
//         <Link to="/">Home</Link>

//         {/* Pet Dropdown */}
//         <div className="dropdown">
//           <button className="dropbtn">Pet</button>
//           <div className="dropdown-content">
//             <Link to="/pets/dog">Dog</Link>
//             <Link to="/pets/cat">Cat</Link>
//             <Link to="/pets/small">Small Pet</Link>
//           </div>
//         </div>

//         {/* Pet Services Dropdown */}
//         <div className="dropdown">
//           <button className="dropbtn">Pet Services</button>
//           <div className="dropdown-content">
//             <Link to="/services/grooming">Pet Grooming</Link>
//             <Link to="/services/hostel">Pet Hostel</Link>
//             <Link to="/services/training">Pet Training</Link>
//           </div>
//         </div>

//         {/* Breeds Dropdown */}
//         <div className="dropdown">
//           <button className="dropbtn">Breeds</button>
//           <div className="dropdown-content">
//             <Link to="/breeds/dog">Dog Breed</Link>
//             <Link to="/breeds/cat">Cat Breed</Link>
//             <Link to="/breeds/small">Small Pet Breed</Link>
//           </div>
//         </div>
//         {/* AI Match */}
//         <Link to="/recommendations">AI Match</Link>

//         {/* Login */}
//         <Link to="/login">Login</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   const [user, setUser] = useState(null);
//   const [menuOpen, setMenuOpen] = useState(false); // mobile toggle

//   useEffect(() => {
//     const loggedUser = JSON.parse(localStorage.getItem("user"));
//     if (loggedUser) setUser(loggedUser);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return (
//     <nav className="navbar">
//       <h2>AI Pet Adoption</h2>

//       {/* Hamburger menu for mobile */}
//       <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//         &#9776;
//       </div>

//       <div className={`nav-links ${menuOpen ? "open" : ""}`}>
//         <Link to="/">Home</Link>

//         {/* Pet Dropdown */}
//         <div className="dropdown">
//           <button className="dropbtn">Pet</button>
//           <div className="dropdown-content">
//             <Link to="/pets/dog">Dog</Link>
//             <Link to="/pets/cat">Cat</Link>
//             <Link to="/pets/small">Small Pet</Link>
//           </div>
//         </div>

//         {/* Pet Services Dropdown */}
//         <div className="dropdown">
//           <button className="dropbtn">Pet Services</button>
//           <div className="dropdown-content">
//             <Link to="/services/grooming">Grooming</Link>
//             <Link to="/services/hostel">Hostel</Link>
//             <Link to="/services/training">Training</Link>
//           </div>
//         </div>

//         {/* Breeds Dropdown */}
//         <div className="dropdown">
//           <button className="dropbtn">Breeds</button>
//           <div className="dropdown-content">
//             <Link to="/breeds/dog">Dog Breed</Link>
//             <Link to="/breeds/cat">Cat Breed</Link>
//             <Link to="/breeds/small">Small Pet Breed</Link>
//           </div>
//         </div>

//         <Link to="/recommendations">AI Match</Link>

//         {!user ? (
//           <Link to="/login">Login</Link>
//         ) : (
//           <>
//             <Link to="/profile">{user.name}</Link>
//             <button className="logout-btn" onClick={handleLogout}>
//               Logout
//             </button>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (loggedUser) setUser(loggedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <h2 className="logo" onClick={() => navigate("/")}>
        AI Pet Adoption
      </h2>

      {/* Mobile Menu Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>

        {/* Pets Dropdown */}
        <div className="dropdown">
          <button className="dropbtn">Pets</button>
          <div className="dropdown-content">
            <Link to="/pets/dog">Dogs</Link>
            <Link to="/pets/cat">Cats</Link>
            <Link to="/pets/small">Small Pets</Link>
          </div>
        </div>

        {/* Services Dropdown */}
        <div className="dropdown">
          <button className="dropbtn">Pet Services</button>
          <div className="dropdown-content">
            <Link to="/services/grooming">Grooming</Link>
            <Link to="/services/hostel">Hostel</Link>
            <Link to="/services/training">Training</Link>
          </div>
        </div>

        {/* Breeds Dropdown */}
        <div className="dropdown">
          <button className="dropbtn">Breeds</button>
          <div className="dropdown-content">
            <Link to="/breeds/dog">Dog Breeds</Link>
            <Link to="/breeds/cat">Cat Breeds</Link>
            <Link to="/breeds/small">Small Pet Breeds</Link>
          </div>
        </div>

        <Link to="/recommendations">AI Match</Link>

        {/* Auth Section */}
        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <div className="dropdown">
            <button className="dropbtn">{user.name}</button>
            <div className="dropdown-content">
              <Link to="/profile">Profile</Link>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
