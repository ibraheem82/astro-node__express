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


  if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
    return res.status(400).json({
      error: 'Missing required launch property',
    });
  }

  launch.launchdate = new Date(launch.launchDate);
  if (isNaN(launch.launchdate)) {
    return res.status(400).json({
      error: 'Invalid launch date'
    })
  }
  addNewLaunch(launch);
    res.status(201).json(launch);
}
    


module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
}