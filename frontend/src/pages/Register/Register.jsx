
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import "./Register.css";
import apiAuth from "../../services/apiAuth";

function Register() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    gender: "",
    city: "",
    otp: ""
  });
  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);

  const navigate = useNavigate(); // ✅ initialize navigate

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const sendOtp = async () => {
    if (!form.mobile) return alert("Enter your mobile number");
    try {
      await apiAuth.post("/send-otp", { mobile: form.mobile });
      setOtpSent(true);
      alert("OTP sent to your mobile!");
    } catch (err) {
      console.error(err);
      alert("Failed to send OTP");
    }
  };

  const verifyOtp = async () => {
    try {
      await apiAuth.post("/verify-otp", { mobile: form.mobile, otp: form.otp });
      setVerified(true);
      alert("Mobile verified!");
    } catch (err) {
      console.error(err);
      alert("Invalid OTP");
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!verified) return alert("Verify your mobile first");

    try {
      await apiAuth.post("/register", form);
      alert("Account created successfully!");
      setForm({ name: "", mobile: "", email: "", password: "", gender: "", city: "", otp: "" });
      setOtpSent(false);
      setVerified(false);

      // ✅ Redirect to login page
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  return (
    <div className="register-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
        <input type="text" name="mobile" placeholder="Mobile Number" value={form.mobile} onChange={handleChange} required />
        {!otpSent && <button type="button" onClick={sendOtp}>Send OTP</button>}
        {otpSent && !verified && (
          <>
            <input type="text" name="otp" placeholder="Enter OTP" value={form.otp} onChange={handleChange} required />
            <button type="button" onClick={verifyOtp}>Verify OTP</button>
          </>
        )}
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Create Password" value={form.password} onChange={handleChange} required />
        <select name="gender" value={form.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input type="text" name="city" placeholder="City" value={form.city} onChange={handleChange} required />
        <button type="submit" disabled={!verified}>Create Account</button>
      </form>
    </div>
  );
}

export default Register;
