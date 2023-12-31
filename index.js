// import the pets array from data.js
const pets = require("./data");

// init express app
const express = require("express");
const app = express();

const PORT = 8080;

app.use(express.static("public"));

// GET - / - returns homepage
app.get("/", (req, res) => {
  res.send("./index.html");
});

// hello world route
app.get("/api", (req, res) => {
  res.send("Hello World!");
});

// get all pets from the database
app.get("/api/v1/pets", (req, res) => {
  res.send(pets);
});

// get pet by owner with query string
app.get("/api/v1/pets/owner", (req, res) => {
  // get the owner from the request
  const { owner } = req.query;

  // find the pet in the pets array
  const petsByOwner = pets.filter((pet) => pet.owner === owner);

  // send the pet as a response
  console.log(petsByOwner);
  res.send(petsByOwner);
});

// get pet by name
app.get("/api/v1/pets/:petName", (req, res) => {
  // get the name from the request
  const { petName } = req.params;

  // find the pet in the pets array
  const pet = pets.find((pet) => pet.name === petName);
  if (pet) {
    res.json(pet); // Sending pet as JSON response
  } else {
    res.status(404).json({ message: "Pet not found" });
  }

  // send the pet as a response
  res.send(pet);
});

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});

module.exports = app;
