// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import api from "../../services/api";
// import "./PetList.css";

// function PetList() {
//   const { type } = useParams(); // dog / cat / small
//   const [pets, setPets] = useState([]);

//   useEffect(() => {
//     api.get(`/pets/${type}`)
//       .then(res => setPets(res.data))
//       .catch(err => console.log(err));
//   }, [type]);

//   return (
//     <div className="pet-container">
//       <h2>{type.toUpperCase()} PETS</h2>

//       <div className="pet-grid">
//         {pets.map(pet => (
//           <div className="pet-card" key={pet._id}>
//             <img src={pet.image} alt={pet.name} />
//             <h3>{pet.name}</h3>
//             <p>{pet.breed}</p>
//             <p>{pet.age} years | {pet.gender}</p>
//             <p>{pet.description}</p>

//             {/* View Details */}
//             <Link to={`/pets/details/${pet._id}`}>
//               <button className="view-btn">View Details</button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PetList;
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../services/api";
import "./PetList.css";

function PetList() {
  const { type } = useParams(); // dog / cat / small
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api.get(`/pets/${type}`)
      .then(res => setPets(res.data))
      .catch(err => console.log(err));
  }, [type]);

  return (
    <div className="pet-container">
      <h2>{type.toUpperCase()} PETS</h2>

      <div className="pet-grid">
        {pets.map(pet => (
          <div className="pet-card" key={pet._id}>
            <img
              src={`http://localhost:5000/uploads/${pet.image}`}
              alt={pet.name}
            />

            <h3>{pet.name}</h3>
            <p>{pet.breed}</p>
            <p>{pet.age} years | {pet.gender}</p>

            <Link to={`/pets/details/${pet._id}`}>
              <button className="view-btn">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetList;
