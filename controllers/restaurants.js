var restaurant = [
  {
    id: 1,
    name: "Ristorante di Andrea",
    location: "Cividate Camuno (BS)",
    avgPrice: 19.2,
    speciality: "carne alla brace",
    maxAllowed: 73,
  },
  {
    id: 2,
    name: "Ristorante da Fuoco",
    location: "Malegno (BS)",
    avgPrice: 12.2,
    speciality: "pizza",
    maxAllowed: 23,
  },
  {
    id: 3,
    name: "Trattoria al Lago",
    location: "Lovere (BG)",
    avgPrice: 30.2,
    speciality: "fish",
    maxAllowed: 40,
  },
  {
    id: 4,
    name: "Ristorante alla braciola",
    location: "Bergamo (BG)",
    avgPrice: 27.2,
    speciality: "affumicato",
    maxAllowed: 160,
  },
  {
    id: 5,
    name: "Rifugio al Monte",
    location: "In Montagna (??)",
    avgPrice: 23.75,
    speciality: "cipo tipico montano",
    maxAllowed: 30,
  },
];

//execute at startup runtime
var restaurantArray = [];
restaurantArray = JSON.parse(JSON.stringify(restaurant));

function getListRestaurant() {
  return restaurantArray;
}

module.exports = {
  getListRestaurant,
};
