import axios from "axios";
import config from '../config.js';

async function RegisterService(userData) {
  try {
    if (Object.keys(userData).length === 0) return {};
    const URI = (config.BACKEND_URI).concat('/register');
    return await axios.post(URI, userData, {
      headers:{
        "Content-Type":"application/json"
      }
    })
      .then(response => response?.data)
      .catch(err => console.error("error en axios Register", err));
  } catch (error) {
    console.error("error en el Register jeje", error);
    throw new Error(error);
  }
}
export default RegisterService;