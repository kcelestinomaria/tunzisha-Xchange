// models/doctorPatient.js
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DoctorPatient extends Model {
  }
  DoctorPatient.init(
    {
        sequelize,
        modelName: 'DoctorPatient',
    }
  );
  return DoctorPatient;
}