import { useState } from "react";
import api from "../../services/api";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [pet, setPet] = useState({
    name: "",
    type: "",
    breed: "",
    age: "",
    gender: "",
    description: "",
    image: null
  });

  const handleChange = (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setPet({ ...pet, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(pet).forEach(key => {
      formData.append(key, pet[key]);
    });

    try {
      await api.post("/pets", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      alert("Pet added successfully 🐾");
    } catch (err) {
      alert("Error adding pet");
    }
  };

  return (
    <div className="admin-container">
      <h2>Add Pet</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Pet Name" onChange={handleChange} required />
        <select name="type" onChange={handleChange} required>
          <option value="">Select Type</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="small">Small Pet</option>
        </select>
        <input name="breed" placeholder="Breed" onChange={handleChange} />
        <input name="age" type="number" placeholder="Age" onChange={handleChange} />
        <select name="gender" onChange={handleChange}>
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <input type="file" accept="image/*" onChange={handleFileChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
        <button>Add Pet</button>
      </form>
    </div>
  );
}

export default AdminDashboard;
