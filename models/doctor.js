// models/doctor.js
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    static associate(models) {
      Doctor.hasMany(models.Patient, { foreignKey: 'doctorId' });
    }
  }
  Doctor.init(
    {
      name: DataTypes.STRING,
      specialization: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Doctor',
    }
  );
  return Doctor;
};
