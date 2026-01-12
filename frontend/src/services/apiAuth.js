import axios from "axios";

const apiAuth = axios.create({
  baseURL: "http://localhost:5000/api/auth"
});

export default apiAuth;
