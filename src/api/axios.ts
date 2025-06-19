import axios from "axios";

const API_KEY:string = "YXBpS2V5U2VjcmV0"

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1/resource",
  headers: {
    "Content-Type": "application/json",
    "x-bypass-token": `${API_KEY}`,
    // or: "x-api-key": API_KEY
  }
});

export default api;
