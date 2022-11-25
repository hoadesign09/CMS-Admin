import axios from "axios";

export const client = axios.create({
  baseURL: "https://my-json-server.typicode.com/hoadesign09/ApiServer/login" 
});