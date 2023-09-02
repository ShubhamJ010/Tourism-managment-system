import { myAxios } from "./helper";

const API_BASE_URL = "http://localhost:8083";
const BookingService = {
  addbooking: (bookingData) => {
    return myAxios
      .post(`http://localhost:8083/booking/addbooking`, bookingData)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};
export default BookingService;
