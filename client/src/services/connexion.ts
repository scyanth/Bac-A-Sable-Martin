// import axios from "axios";
import {
    ApolloClient,
    InMemoryCache
} from "@apollo/client";

// const connexion = axios.create({
//     baseURL: import.meta.env.VITE_API_URL,
//     // withCredentials: true,
// });
  
const connexion = new ApolloClient({
    uri: import.meta.env.VITE_API_URL,
    cache: new InMemoryCache()
});

export default connexion;