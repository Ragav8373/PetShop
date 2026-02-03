import { useState } from "react";
import api from "../../services/api";
import PetCard from "../../components/PetCard/PetCard";
import "./Recommendations.css";

function Recommendations() {
  const [form, setForm] = useState({
    type: "",
    breed: "",
    maxAge: "",
    gender: ""
  });
  const [pets, setPets] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/recommendations", form);
      setPets(res.data);
    } catch (err) {
      console.error("Recommendation API error:", err);
    }
  };

  return (
    <div className="recommendations">
      <h2>Find Your Perfect Pet</h2>
      <form className="recommendation-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="type"
          placeholder="Type (Dog, Cat)"
          value={form.type}
          onChange={handleChange}
        />
        <input
          type="text"
          name="breed"
          placeholder="Breed"
          value={form.breed}
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxAge"
          placeholder="Max Age (weeks)"
          value={form.maxAge}
          onChange={handleChange}
        />
        <select name="gender" value={form.gender} onChange={handleChange}>
          <option value="">Any Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <button type="submit">Find Pets</button>
      </form>

      <div className="pet-cards-container">
        {pets.length > 0 ? (
          pets.map((pet) => <PetCard key={pet._id} pet={pet} />)
        ) : (
          <p>No pets found. Try changing your filters.</p>
        )}
      </div>
    </div>
  );
}

export default Recommendations;
