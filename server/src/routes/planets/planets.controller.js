/** @format */
const planets = require("../../models/plantes.model");
function getAllPlanets(req, res) {
  res.status(200).json(planets);
}

module.exports = {
  getAllPlanets,
};
