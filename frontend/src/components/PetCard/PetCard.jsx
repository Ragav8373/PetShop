// import React from "react";
// import "./PetCard.css";

// function PetCard({ pet }) {
//   return (
//     <div className="pet-card">
//       <img
//         src={
//           pet.image
//             ? `http://localhost:5000/uploads/${pet.image}`
//             : "/default-pet.png" // fallback image if none
//         }
//         alt={pet.name}
//         className="pet-image"
//       />
//       <div className="pet-info">
//         <h3>{pet.name}</h3>
//         <p>Type: {pet.type}</p>
//         <p>Breed: {pet.breed}</p>
//         <p>Age: {pet.age} weeks</p>
//         <p>Gender: {pet.gender}</p>
//         <p>{pet.description}</p>
//       </div>
//     </div>
//   );
// }

// export default PetCard;
import { useNavigate } from "react-router-dom";
import "./PetCard.css";

function PetCard({ pet }) {
  const navigate = useNavigate();

  const handleAction = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login", {
        state: { redirectTo: `/pets/details/${pet._id}` }
      });
    } else {
      navigate(`/pets/details/${pet._id}`);
    }
  };

  return (
    <div className="pet-card-ui">
      <div className="pet-image-box">
        <img
          src={`http://localhost:5000/uploads/${pet.image}`}
          alt={pet.name}
        />
        <span className="pet-badge">Pet Quality</span>
        <span className="pet-price">View Price</span>
      </div>

      <div className="pet-content">
        <h3 className="pet-name">{pet.name}</h3>

        <p><strong>Breed :</strong> {pet.breed}</p>
        <p>
          <strong>Gender :</strong> {pet.gender} &nbsp;
          <strong>Age :</strong> {pet.age} Weeks
        </p>

        <div className="pet-actions">
          <button className="outline-btn" onClick={handleAction}>Call</button>
          <button className="outline-btn" onClick={handleAction}>Whatsapp</button>
          <button className="outline-btn" onClick={handleAction}>Details</button>
        </div>

        <button className="book-btn" onClick={handleAction}>
          Book Now
        </button>
      </div>
    </div>
  );
}

export default PetCard;
