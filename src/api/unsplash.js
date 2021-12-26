import axios from "axios";

const api = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID YOURKEY",
  },
});

export default api;
