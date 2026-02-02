import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api" // ✅ points to /api/pets
});

export default api;
