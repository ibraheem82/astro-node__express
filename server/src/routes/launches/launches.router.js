const express = require('express');

// const { getAllLaunches } = require('./launches.controller');
const { httpGetAllLaunches } = require('./launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/launches', httpGetAllLaunches);

module.exports = launchesRouter
