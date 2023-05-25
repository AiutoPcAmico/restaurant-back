var bookings = [
  {
    username: "andrea@andreafelappi.it",
    name: "Andrea",
    surname: "Felappi",
    restaurantId: 2,
    dateTime: "20230526T08:20",
  },
  {
    username: "pippo@andreafelappi.it",
    name: "pippo",
    surname: "plut1",
    restaurantId: 2,
    dateTime: "20230526T08:20",
  },
  {
    username: "asso@andreafelappi.it",
    name: "Asso",
    surname: "Nella Manica",
    restaurantId: 2,
    dateTime: "20230526T08:20",
  },
];

//execute at startup runtime
var bookingArray = [];
bookingArray = JSON.parse(JSON.stringify(bookings));

async function addBooking(newBooking) {
  //connessione al db con richiesta

  console.log({ newBooking });
  //verifico se è completa
  if (
    newBooking?.name &&
    newBooking?.surname &&
    newBooking?.restaurantId &&
    newBooking?.dateTime
  ) {
    bookingArray.push(newBooking);
    return {
      error: false,
      value: "booking Added",
    };
  } else {
    return {
      error: true,
      errorMsg: "Booking information not complete!",
    };
  }
}

function getListBooking() {
  return bookingArray;
}

module.exports = {
  addBooking,
  getListBooking,
};
