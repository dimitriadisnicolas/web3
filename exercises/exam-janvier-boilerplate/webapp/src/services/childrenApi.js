import axios from "axios";
const baseURL = "http://localhost:3001/api/children";

const retrieveAll = () => axios.get(baseURL).then((response) => response.data);

const ChildrenAPI = {
  retrieveAll,
};

export default ChildrenAPI;
