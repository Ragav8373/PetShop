
import { useNavigate } from "react-router-dom";
import api from "../../services/api"; // your axios instance
import "./PetDetailsCard.css";

function PetDetailsCard({ pet }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // JWT token

  if (!pet) return null;

  const handleAdoptClick = async () => {
    // ✅ Check if user is logged in
    if (!token) {
      alert("You must be logged in to adopt a pet 🐾");
      return;
    }

    // ✅ Check if pet._id exists
    if (!pet._id) {
      alert("Pet details not loaded properly. Please try again.");
      return;
    }

    try {
      // 🔹 Send adoption request to backend
      const res = await api.post(
        "/adoptions",
        { petId: pet._id }, // backend expects petId
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("Adoption request created:", res.data);

      // 🔹 Show success alert
      alert("Your adoption request has been received! Our team will contact you soon 🐾");

      // 🔹 Redirect to home page
      navigate("/");
    } catch (error) {
      console.error("Failed to send adoption request:", error);

      // Show backend error if available
      const message = error.response?.data?.message || "Failed to send request. Please try again.";
      alert(message);
    }
  };

  return (
    <div className="pet-details-card">
      <div className="pet-details-image">
        <img src={`http://localhost:5000/uploads/${pet.image}`} alt={pet.name} />
      </div>

      <div className="pet-details-info">
        <h2>{pet.name}</h2>
        <p><strong>Breed:</strong> {pet.breed}</p>
        <p><strong>Age:</strong> {pet.age} weeks</p>
        <p><strong>Gender:</strong> {pet.gender}</p>
        <p><strong>Life Expectancy:</strong> {pet.lifeExpectancy}</p>
        <p><strong>Trainability:</strong> {pet.trainability}</p>
        <p><strong>Size:</strong> {pet.size}</p>
        <p><strong>Good With:</strong> {pet.goodwith}</p>
        <p><strong>Grooming Needs:</strong> {pet.grooming}</p>
        <p className="pet-desc">{pet.owerview}</p>
        

        <button className="adopt-btn" onClick={handleAdoptClick}>
          Adopt Now
        </button>
      </div>
    </div>
  );
}

export default PetDetailsCard;
