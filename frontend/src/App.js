// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
// import Register from "./pages/Register/Register";
// import PetList from "./pages/PetList/PetList";
// import PetDetails from "./pages/PetDetails/PetDetails";
// import Recommendations from "./pages/Recommendations/Recommendations";
// import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/pets" element={<PetList />} />
//         <Route path="/pets/:id" element={<PetDetails />} />
//         <Route path="/recommendations" element={<Recommendations />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";

// import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
// import Register from "./pages/Register/Register";

// import PetList from "./pages/PetList/PetList";
// import PetDetails from "./pages/PetDetails/PetDetails";

// import Recommendations from "./pages/Recommendations/Recommendations";
// import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

// function App() {
//   return (
//     <Router>
//       <Navbar />

//       <Routes>
//         {/* Home */}
//         <Route path="/" element={<Home />} />

//         {/* Auth */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Pets */}
//         <Route path="/pets/:type" element={<PetList />} />
//         <Route path="/pets/details/:id" element={<PetDetails />} />

//         {/* AI */}
//         <Route path="/recommendations" element={<Recommendations />} />

//         {/* Admin */}
//         <Route path="/admin" element={<AdminDashboard />} />
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import PetList from "./pages/PetList/PetList";
import PetDetails from "./pages/PetDetails/PetDetails";
import Recommendations from "./pages/Recommendations/Recommendations";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/pets/:type" element={<PetList />} />
        <Route path="/pets/details/:id" element={<PetDetails />} />

        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
