// app.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const Patient = require("./models/patient.model.js");

const app = express();
//const port = 3000;

// set up middleware to use JSON
app.use(bodyParser.json());


// POST
app.post("/api/patient", async (req, res) => {
  const { name, age } = req.body;
  try {
    const newPatient = await Patient.create({ name, age });
    res.status(201).json(newPatient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Define API endpoints for healthcare data
app.get("/api/patient/:patientId", async (req, res) => {
  const patientId = req.params.patientId;
  try {
    const patient = await Patient.findByPk(patientId);
    if (patient) {
      res.json(patient);
    } else {
      res.status(404).json({ error: "Patient not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

mongoose
  .connect(
    "mongodb+srv://celestino127:C0mpa$$i0n127@cluster0.5qsdpkx.mongodb.net/Simple-Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to the database!");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed!");
  });