import axios from "axios";
import config from '../config.js';

export async function GetInfoUser(token) {

  if (token === undefined || token === null || token === "") return {};

  const URI = (config.BACKEND_URI).concat('/usertoken');

  return await axios.get(URI, {
    headers: {
      'content-type': 'application/json',
      x_access_token: token
    }
  }).then(response => response.data)
    .catch(err => console.error("error en axios usertoken", err));
}

export async function UpdateInfoUser(id, data, token) {

  if (id===0 || id === undefined || data === null || token === "") return { status: false };

  const URI = (config.BACKEND_URI).concat(`/user?id=${id}`);

  return await axios.put(URI, data, {
    headers: {
      'content-type': 'application/json',
      x_access_token: token
    }
  }).then(response => response.data)
    .catch(err => console.error("error en axios userupdate", err));
}
