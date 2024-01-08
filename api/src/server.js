const router = require("./routes");
const cors = require("cors");
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const server = express();

server.use(cors())
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*', 'http://localhost:5173/');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', "apprend,delete,entries,foreach,get,has,keys,set,values,Authorization");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('HTTP/1.1 200 OK')
  next();
});
server.use(router);

module.exports = server;
