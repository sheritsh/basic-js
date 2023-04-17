/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  if (!Date.parse(date)) {
    throw new Error("Invalid date!");
  }

  try {
    date.getUTCSeconds();
  } catch {
    throw new Error("Invalid date!");
  }

  let month = date.getUTCMonth();
  let currentQuarter = parseInt((month + 1) / 3);
  let season = "";

  switch (currentQuarter) {
    case 0:
      season = "winter";
      break;
    case 1:
      season = "spring";
      break;
    case 2:
      season = "summer";
      break;
    case 3:
      season = "autumn";
      break;
    default:
      season = "winter";
  }

  return season;
}

module.exports = {
  getSeason,
};
