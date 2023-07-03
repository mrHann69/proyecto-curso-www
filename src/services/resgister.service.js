import axios from "axios";
import config from '../config.js';

const RegisterService = async (userData) => {
  try {
    if (Object.keys(userData).length === 0) return {};
    const URI = (config.BACKEND_URI).concat('/register');
    return await axios.post(URI, userData)
      .then(response => response?.data)
      .catch(err => console.error("error en axios Register", err));
  } catch (error) {
    console.error("error en el Register jeje", error);
    throw new Error(error);
  }
}
export default RegisterService;