
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiAuth from "../../services/apiAuth";
import "./Register.css";

function Register() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    city: "",
    gender: "",
    experience: "",
    purpose: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiAuth.post("/register", form);
      alert("Registration successful");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <input name="name" placeholder="Full Name" onChange={handleChange} required />
      
      <div className="mobile-input">
        {/* <select disabled defaultValue="+91">
          <option value="+91">+91</option>
        </select> */}
        <input name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
      </div>

      <input name="email" placeholder="Email Address" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Create Password" onChange={handleChange} required />
      <input name="city" placeholder="Location" onChange={handleChange} />

      <select name="gender" onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <select name="experience" onChange={handleChange} required>
        <option value="">Pet Parenting Experience</option>
        {[...Array(10)].map((_, i) => (
          <option key={i} value={i + 1}>{i + 1}</option>
        ))}
      </select>

      <select name="purpose" onChange={handleChange} required>
        <option value="">I'm here for</option>
        <option value="pet">Pet</option>
        <option value="service">Service</option>
        <option value="guidance">Guidance</option>
        <option value="adoption">Adoption</option>
        <option value="other">Other</option>
      </select>

      <button type="submit">Create an Account</button>
    </form>
  );
}

export default Register;
