/** @format */

const http = require("http");

const app = require("./app");

// using the function from our model.
const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

await loadPlanetsData();
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
