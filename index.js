const express = require("express");
const cors = require("cors");
const booking = require("./controllers/bookings");
const { getListRestaurant } = require("./controllers/restaurants");

const app = express();
const port = 8080;

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

/*----------------------RESTAURANT API---------------------- */
app.get("/restaurants", (request, response) => {
  return response.status(200).send({
    error: false,
    value: getListRestaurant(),
  });
});

/*-----------------------BOOKINGS API------------------------*/

app.get("/bookings", (request, response) => {
  return response.status(200).send({
    error: false,
    value: booking.getListBooking(),
  });
});

app.post("/bookings/new", (request, response) => {
  console.log(request.body);

  const res = booking.addBooking(request.body).then((data) => {
    console.log({ data });

    if (data.error) {
      return response.status(400).send({
        //se non ha funzionato
        error: false,
        value: data.errorMsg,
      });
    } else {
      //se è corretto
      return response.status(200).send({
        error: false,
        value: data.value,
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
