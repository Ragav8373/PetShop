
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./PetList.css";

function PetList() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api.get(`/pets/${type}`)
      .then(res => setPets(res.data))
      .catch(err => console.log(err));
  }, [type]);

  const handleAction = (petId) => {
    const token = localStorage.getItem("token");

    console.log("Token:", token); // 👈 debug

    if (!token) {
      navigate("/login", {
        state: { redirectTo: `/pets/details/${petId}` }
      });
    } else {
      navigate(`/pets/details/${petId}`);
    }
  };

  return (
    <div className="pet-list-container">
      <div className="pet-grid">
        {pets.map(pet => (
          <div className="pet-card-ui" key={pet._id}>

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
              <p><strong>Gender :</strong> {pet.gender} &nbsp;
                 <strong>Age :</strong> {pet.age} Weeks</p>
          
              <div className="pet-actions">
                <button className="outline-btn" onClick={() => handleAction(pet._id)}>
                  Call
                </button>
                <button className="outline-btn" onClick={() => handleAction(pet._id)}>
                  Whatsapp
                </button>
                <button className="outline-btn" onClick={() => handleAction(pet._id)}>
                  Details
                </button>
              </div>

              <button className="book-btn" onClick={() => handleAction(pet._id)}>
                Book Now
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default PetList;
