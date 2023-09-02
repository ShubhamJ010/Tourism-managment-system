import { myAxios } from "./helper";

const BookingService = {
  addbooking: (bookingData) => {
    return myAxios
      .post(`/booking/addbooking`, bookingData)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};
export default BookingService;
