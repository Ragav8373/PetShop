import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";

function Adopt() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleConfirm = async () => {
    try {
      await api.post("/adoptions", {
        petId: id
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      alert("Adoption request sent!");
      navigate("/my-adoptions");
    } catch (err) {
      console.log(err);
      alert("Failed to adopt");
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Confirm Adoption</h2>
      <p>Are you sure you want to adopt this pet?</p>
      <button onClick={handleConfirm}>Confirm Adoption</button>
    </div>
  );
}

export default Adopt;
