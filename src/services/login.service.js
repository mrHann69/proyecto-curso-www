import axios from "axios";
import config from '../config.js';

const LoginService = async (userData) => {
  try {
    if (Object.keys(userData).length === 0) return {};
    const URI = (config.BACKEND_URI).concat('/login');
    return await axios.post(URI, userData)
      .then(response => response?.data)
      .catch(err => console.error("error en axios login", err));
  } catch (error) {
    console.error("error en el login jeje", error);
    throw new Error(error);
  }
}
export default LoginService;