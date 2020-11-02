import axios from "axios";
import { baseApiUrl } from "../../config/index";

const clientAxios = axios.create({
  baseUrl: baseApiUrl,
});

export default clientAxios;
