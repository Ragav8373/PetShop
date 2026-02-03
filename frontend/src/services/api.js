// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api" // ✅ points to /api/pets
// });

// export default api;
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // ✅ backend base URL
});

export default api;
