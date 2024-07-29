import axios from "axios";

const API_URL = "https://flight-status-mock.core.travelopia.cloud/flights";

export const fetchFlights = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
