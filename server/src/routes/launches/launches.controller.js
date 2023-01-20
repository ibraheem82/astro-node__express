// const {launches} = require('../../models/launches.model');
// const launchesModel = require('../../models/launches.model');
const { getAllLaunches, addNewLaunch, } = require('../../models/launches.model');


function httpGetAllLaunches(req, res) {
  // return res.status(200).json(Array.from(launches.values()));
  // return res.status(200).json(Array.from(launchesModel.getAllLaunches()));
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;

  launch.launchdate = new Date(launch.launchdate);
  addNewLaunch(launch);
  res.status(201).json(launch);
}


module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
}