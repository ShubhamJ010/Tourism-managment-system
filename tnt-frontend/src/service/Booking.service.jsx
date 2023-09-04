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
  getCountOfBooking: (id) => {
    return myAxios
      .get(`/booking/count?id=${id}`)
      .then((rep) => {
        console.log("🎊🎊🎊🎊" + rep);
        return rep.data;
      })
      .catch((err) => {
        console.log("🐈‍⬛🐈‍⬛🐈‍⬛🐈‍⬛");
        throw err;
      });
  },
};
export default BookingService;
