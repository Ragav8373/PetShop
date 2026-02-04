
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./components/Hero/Hero";


import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import PetList from "./pages/PetList/PetList";
import PetDetails from "./pages/PetDetails/PetDetails";
import Recommendations from "./pages/Recommendations/Recommendations";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import DogBreed from "./pages/Breed/DogBreed";
import CatBreed from "./pages/Breed/CatBreed";
import SmalBreed from "./pages/Breed/SmalBreed";
import BreedOverview from "./pages/Breed/BreedOverview/BreedOverview";
import PetService from "./pages/PetServices/PetService";

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


        <Route path="/breeds/dog" element={<DogBreed />} />
        <Route path="/breeds/cat" element={<CatBreed />} />
        <Route path="/breeds/smal" element={<SmalBreed />} />

        <Route path="/" element={<DogBreed />} /> 
        <Route path="/breed-overview" element={<BreedOverview />} />

        <Route path="/services/grooming" element={<PetService />} />
        
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
