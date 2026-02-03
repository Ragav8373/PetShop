
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../../services/api";
// import "./PetDetails.css";

// function PetDetails() {
//   const { id } = useParams();
//   const [pet, setPet] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     api.get(`/pets/details/${id}`)
//       .then(res => {
//         setPet(res.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.log(err);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return <h3>Loading pet details...</h3>;
//   if (!pet) return <h3>Pet not found</h3>;

//   return (
//     <div className="pet-details-container">
//       <img
//         src={`http://localhost:5000/uploads/${pet.image}`}
//         alt={pet.name}
//       />

//       <div className="pet-info">
//         <h2>{pet.name}</h2>
//         <p><strong>Breed:</strong> {pet.breed}</p>
//         <p><strong>Age:</strong> {pet.age} weeks</p>
//         <p><strong>Gender:</strong> {pet.gender}</p>
//         <p><strong>Description:</strong> {pet.description}</p>

//         <button className="adopt-btn">Adopt Now</button>
//       </div>
//     </div>
//   );
// }

// export default PetDetails;


// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import api from "../../services/api";
// import PetDetailsCard from "../../components/PetDetailsCard/PetDetailsCard";

// function PetDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [pet, setPet] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     api.get(`/pets/details/${id}`)
//       .then(res => {
//         setPet(res.data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, [id]);

//   const handleAdopt = () => {
//     if (!token) {
//       navigate("/login", {
//         state: { redirectTo: `/pets/details/${id}` }
//       });
//     } else {
//       navigate(`/adopt/${id}`);
//     }
//   };

//   if (loading) return <h3 align="center">Loading...</h3>;
//   if (!pet) return <h3 align="center">Pet not found</h3>;

//   return <PetDetailsCard pet={pet} onAdopt={handleAdopt} />;
// }

// export default PetDetails;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../../services/api";
// import PetDetailsCard from "../../components/PetDetailsCard/PetDetailsCard";

// function PetDetails() {
//   const { id } = useParams();
//   const [pet, setPet] = useState(null);

//   useEffect(() => {
//     api.get(`/pets/details/${id}`)
//       .then(res => setPet(res.data))
//       .catch(err => console.log(err));
//   }, [id]);

//   return (
//     <div>
//       <PetDetailsCard pet={pet} />
//     </div>
//   );
// }

// export default PetDetails;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import PetDetailsCard from "../../components/PetDetailsCard/PetDetailsCard";

function PetDetails() {
  const { id } = useParams(); // pet ID from URL
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch pet details from backend
  useEffect(() => {
    const fetchPet = async () => {
      try {
        const res = await api.get(`/pets/details/${id}`);
        setPet(res.data);
      } catch (err) {
        console.error("Error fetching pet details:", err);
        setPet(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPet();
  }, [id]);

  if (loading) return <h3>Loading pet details...</h3>;
  if (!pet) return <h3>Pet not found</h3>;

  return (
    <div className="pet-details-page">
      {/* Reusable card component */}
      <PetDetailsCard pet={pet} />
    </div>
  );
}

export default PetDetails;
