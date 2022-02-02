import axios from "axios";
import { URL_BASE } from "../utils/constantes";

const api = axios.create({
  baseURL: URL_BASE,
});

export default api;
