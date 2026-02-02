// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../../services/api";
// import "./PetDetails.css";

// function PetDetails() {
//   const { id } = useParams(); // pet id from URL
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
//       <img src={pet.image} alt={pet.name} />

//       <div className="pet-info">
//         <h2>{pet.name}</h2>
//         <p><strong>Breed:</strong> {pet.breed}</p>
//         <p><strong>Age:</strong> {pet.age} years</p>
//         <p><strong>Gender:</strong> {pet.gender}</p>
//         <p><strong>Description:</strong> {pet.description}</p>

//         <button className="adopt-btn">Adopt Now</button>
//       </div>
//     </div>
//   );
// }

// export default PetDetails;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import "./PetDetails.css";

function PetDetails() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/pets/details/${id}`)
      .then(res => {
        setPet(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h3>Loading pet details...</h3>;
  if (!pet) return <h3>Pet not found</h3>;

  return (
    <div className="pet-details-container">
      <img
        src={`http://localhost:5000/uploads/${pet.image}`}
        alt={pet.name}
      />

      <div className="pet-info">
        <h2>{pet.name}</h2>
        <p><strong>Breed:</strong> {pet.breed}</p>
        <p><strong>Age:</strong> {pet.age} years</p>
        <p><strong>Gender:</strong> {pet.gender}</p>
        <p><strong>Description:</strong> {pet.description}</p>

        <button className="adopt-btn">Adopt Now</button>
      </div>
    </div>
  );
}

export default PetDetails;
