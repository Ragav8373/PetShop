import "./PetCard.css";
import { Link } from "react-router-dom";

function PetCard({ pet }) {
  return (
    <div className="pet-card">
      <h3>{pet.name}</h3>
      <p>Breed: {pet.breed}</p>
      <p>Age: {pet.age}</p>
      <Link to={`/pets/${pet._id}`}>View</Link>
    </div>
  );
}

export default PetCard;
