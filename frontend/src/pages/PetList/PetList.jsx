
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import PetCard from "../../components/PetCard/PetCard";
import "./PetList.css";

function PetList() {
  const { type } = useParams();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api.get(`/pets/${type}`)
      .then(res => setPets(res.data))
      .catch(err => console.log(err));
  }, [type]);

  return (
    <div className="pet-list-container">
      <div className="pet-grid">
        {pets.map(pet => (
          <PetCard key={pet._id} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default PetList;
