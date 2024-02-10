// models/patient.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Patient = sequelize.define('Patient', {
  patientId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  secondName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dateOfBirth: {
    type: DataTypes.STRING,
    allowNull: false,
  }
  // Add more fields as needed
});

Patient.hasMany(MedicalRecord, { foreignKey: 'patientId'})

module.exports = Patient;
