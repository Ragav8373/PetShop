import { useEffect, useState } from "react";
import PetCard from "../../components/PetCard/PetCard";
import api from "../../services/api";
import "./PetList.css";

function PetList() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api.get("/pets").then(res => setPets(res.data));
  }, []);

  return (
    <div>
      <h2>Available Pets</h2>
      {pets.map(pet => (
        <PetCard key={pet._id} pet={pet} />
      ))}
    </div>
  );
}

export default PetList;
