import axios from "axios";
const baseURL = "http://localhost:3001/api/events";

const retrieveAll = () => axios.get(baseURL).then((response) => response.data);

const create = (eventBody) =>
  axios.post(baseURL, eventBody).then((response) => response.data);

const removeEvent = (eventId) =>
  axios.delete(baseURL + "/" + eventId).then((response) => response.data);

const EventAPI = {
  retrieveAll,
  removeEvent,
  create,
};

export default EventAPI;
