import axios from "axios";

const connexion = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    // withCredentials: true,
});
  
export default connexion;