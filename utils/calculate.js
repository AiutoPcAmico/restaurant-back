const calendar = require("../controllers/calendar");
const machines = require("../controllers/machines");

function calculateCost(machineType, dateTime) {
  const machineCost = machines.getCostOfMachine(machineType);
  const coefficient = calendar.getCoefficientDate(dateTime);

  if (!machineCost.error && !coefficient.error) {
    const totalCost = machineCost.value * coefficient.value;

    return {
      error: false,
      value: totalCost,
    };
  } else {
    var errore = "";
    if (machineCost.error) errore = machineCost.errorMsg;
    if (coefficient.error) errore = coefficient.errorMsg;

    return {
      error: true,
      value: errore,
    };
  }
}

module.exports = {
  calculateCost,
};
