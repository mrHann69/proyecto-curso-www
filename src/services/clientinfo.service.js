import axios from "axios";
import config from '../config.js';

const GetInfoCustomer = async (token) => {
  try {
    if (token === undefined || token === null || token === "") return {};
    const URI = (config.BACKEND_URI).concat('/usertoken');

    return (await axios.get(URI, {
      headers: { x_access_token: token }
    }).then(response => response?.data)
      .catch(err => console.error("error en axios usertoken", err)));
  } catch (error) {
    console.error("error en el usertoken jeje", error);
    throw new Error(error);
  }
}
export default GetInfoCustomer;