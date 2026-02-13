
import { useState, useEffect } from "react";
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
  const [types, setTypes] = useState([]);
  const [breeds, setBreeds] = useState([]);

  /* Load pet types */
  useEffect(() => {
    api.get("/meta/types").then(res => setTypes(res.data));
  }, []);

  /* Load breeds when type changes */
  useEffect(() => {
    if (form.type) {
      api.get(`/meta/breeds/${form.type}`).then(res => setBreeds(res.data));
    } else {
      setBreeds([]);
    }
  }, [form.type]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post("/recommendations", form);
    setPets(res.data);
  };

  return (
    <div className="recommendations">
      <h2>AI Pet Recommendation</h2>

      <form className="recommendation-form" onSubmit={handleSubmit}>
        {/* Type */}
        <select name="type" value={form.type} onChange={handleChange}>
          <option value="">Select Pet Type</option>
          {types.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        {/* Breed */}
        <select name="breed" value={form.breed} onChange={handleChange}>
          <option value="">Select Breed</option>
          {breeds.map(b => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>

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
        {pets.length ? pets.map(p => (
          <PetCard key={p._id} pet={p} />
        )) : <p>No pets found</p>}
      </div>
    </div>
  );
}

export default Recommendations;
