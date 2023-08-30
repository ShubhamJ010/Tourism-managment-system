import axios from "axios";

const API_BASE_URL = "http://localhost:8083"; 

const DestinationService = {
  addDestination: (destinationData) => {
    return axios
      .post(`${API_BASE_URL}/destination/adddestination`, destinationData)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },

  getAllDestinations: () => {
    return axios
      .get(`${API_BASE_URL}/destination`)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },

  getDestinationById: (id) => {
    return axios
      .get(`${API_BASE_URL}/destination/${id}`)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },

  updateDestination: (destinationData) => {
    return axios
      .put(`${API_BASE_URL}/destination/updatedestination`, destinationData)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};

export default DestinationService;
