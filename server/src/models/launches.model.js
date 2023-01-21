const launches = new Map();

let latestFlightNumber = 100;


const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date(""),
  target: "Kepler-422 b",
  customers: ["ASTRO🚀", "NASA", "SPACE-X"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  latestFlightNumber++;
  return Array.from(launches.values())
}

function addNewLaunch(launch) {
  launches.set(latestFlightNumber, Object.assign(launch, {
    success: false,
    upcoming: true,
    customers: ['Astro🚀', 'SPACE-X🌍'],
    flightNumber: latestFlightNumber
  })
  );
}



module.exports = {
  getAllLaunches,
  addNewLaunch
}
