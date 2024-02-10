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
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gender: {
    type: DataTypes.CHAR // F - Female; M - Male
  },
  phoneNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nextOfKin: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  inpatient: {
    type: DataTypes.BOOLEAN,
  },
  symptoms: {
    type: DataTypes.STRING,
  },
  diagnosis: {
    type: DataTypes.STRING,
  },
  prescription: {
    type: DataTypes.STRING,
  }
  // Add more fields as needed
});

Patient.hasMany(MedicalRecord, { foreignKey: 'patientId'})

module.exports = Patient;
