/** @format */

// const parse = require("csv-parse");
// * help us to use key and values
const { parse } = require("csv-parse");
const fs = require("fs");
// const { resourceLimits } = require("worker_threads");

// const results = [];
const habitablePlanets = [];

function isHabitablePlanet(planet) {
  // ! All the planets supports life.
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

// * The parse() is design to be use with a stream
function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream("kepler_data.csv")
      // * the pipe() function is meant to connect a  readable stream source to a writeable stream destination
      // * this will conect the two stream together
      .pipe(
        parse({
          // * these will return each rows in our ccv file, as a javascript object.
          comment: "#",
          columns: true,
        })
      )
      // * data from the stream which is an event emitter.
      .on("data", data => {
        if (isHabitablePlanet(data)) {
          habitablePlanets.push(data);
          // results.push(data);
        }
      })
      .on("error", err => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        console.log(`${habitablePlanets.length} habitable planets found!`);
        console.log(`${habitablePlanets}`);
        resolve();
      });
  });
}

module.exports = {
  loadPlanetsData,
  planets: habitablePlanets,
};
