
import { useEffect, useState } from "react";
import PetCard from "../../components/PetCard/PetCard";
import apiPets from "../../services/apiPets";
import "./PetList.css";

function PetList() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    apiPets.get("/")
      .then(res => setPets(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Available Pets</h2>
      {pets.length === 0 ? (
        <p>No pets available</p>
      ) : (
        pets.map(pet => <PetCard key={pet._id} pet={pet} />)
      )}
    </div>
  );
}

export default PetList;
