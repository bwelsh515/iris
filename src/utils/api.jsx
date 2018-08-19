// api.jsx

import axios from "axios";

const BASE_URL = "http://localhost:8080";

function getUserEntryData() {
  const url = `${BASE_URL}/api/user/entry`;
  return axios.get(url).then(response => response.data);
}

export { getUserEntryData };
