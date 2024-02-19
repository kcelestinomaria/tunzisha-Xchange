// app.js
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database"); // https://sequelize.org/
const Patient = require("./models/patient.model.js");

const app = express();
const port = 3000;

// set up middleware to use JSON
app.use(bodyParser.json());

// first page, simple text
app.get("/", async (req, res) => {
  console.log("Hello World!");
});

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

// Sync Sequelize models with the database
sequelize.sync().then(() => {
  console.log("Database and tables created!");
  app.listen(port, () => {
    console.log(`Tunzisha Xchange API is running at http://localhost:${port}`);
  });
});
