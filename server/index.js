require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();

// Todo insert app-wide middleware here when needed
// app.use(express.static(path.join(__dirname, '')));
// app.use(express.json());

// todo: Define routes here

app.listen(process.env.PORT);
console.log(`Server listening at http://localhost:${process.env.PORT}`)