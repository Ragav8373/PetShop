
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
