const express = require('express');

// const { getAllLaunches } = require('./launches.controller');
const { httpGetAllLaunches, httpAddNewLaunch } = require('./launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);

module.exports = launchesRouter
