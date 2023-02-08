const path = require('path');
const express = require("express");
const cors = require("cors");
const morgan = require('morgan')

const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");

const app = express();

// returns the cors middleware
app.use(
  cors({
    origin: "http://127.0.0.1:3000",


  //  allowedHeaders: ["authorization", "Content-Type"], // you can change the headers
  //   exposedHeaders: ["authorization"], // you can change the headers
    origin: "*",
  //   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  //   preflightContinue: false
  })
);


 app.use(morgan('combined'));


app.use(express.json());
// will serve all of our public files.
app.use(express.static(path.join(__dirname, '..', 'public')))
// app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(__dirname + '/public'));
// app.use(express.static('public'));
// app.use('/static', express.static(path.join(__dirname, 'public')))



app.use('/planets', planetsRouter);
app.use('/launches', launchesRouter);

app.get('/*', (req, res) => {
  // res.sendFile(path.join(__dirname, '..', 'public'))
  // res.sendFile(path.resolve('public', 'index.html'))
  // console.log(path.resolve('public', 'index.html'))
  // res.sendFile(path.resolve('public', 'index.html'))
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  // console.log(res.sendFile('./index.html'))
  // res.sendFile('index.html', { root: __dirname });
  // res.sendFile("public/index.html", { root: __dirname });
  // res.sendFile(__dirname + '/index.html');
  // res.sendFile('index.html');
  //  res.sendFile('./index.html', {root: 'public'});

});





module.exports = app;
