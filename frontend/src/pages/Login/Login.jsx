

import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import "./Login.css";
import apiAuth from "../../services/apiAuth";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // ✅ initialize navigate

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await apiAuth.post("/login", form);
      
      // ✅ Save JWT token to localStorage
      localStorage.setItem("token", res.data.token);

      alert("Login successful!");
      
      // ✅ Redirect to PetList page
      navigate("/pets");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/register">Register here</a></p>
    </div>
  );
}

export default Login;
