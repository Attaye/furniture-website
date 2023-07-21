const express = require("express");
const cors = require("cors");
const connection = require("./connection.js");

const app = express();
app.use(express.json());

app.use(cors()); // Enable CORS for all routes

app.listen(3001);