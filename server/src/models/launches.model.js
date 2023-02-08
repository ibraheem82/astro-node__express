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


// launchId -> flightNumber // is the flight number
function existsLaunchWithId(launchId) {
  return launches.has(launchId);
}

function getAllLaunches() {
  latestFlightNumber++;
  return Array.from(launches.values())
}

function addNewLaunch(launch) {
  launches.set(latestFlightNumber, Object.assign(launch, {
    success: true,
    upcoming: true,
    customers: ['Astro🚀', 'SPACE-X🌍'],
    flightNumber: latestFlightNumber
  })
  );
}

function abortLaunchById(launchId) {
  // will completely remove our launch from our model.
  // Checking the launches collection.
  // [aborted] will be undefined if the launch with that {id} does not exist
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}


module.exports = {
  existsLaunchWithId,
  getAllLaunches,
  addNewLaunch,
  abortLaunchById,

}
