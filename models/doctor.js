// models/doctor.js
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    static associate(models) {
      Doctor.hasMany(models.Patient, { foreignKey: 'doctorId' });
      Doctor.belongsToMany(models.Patient, {through: 'DoctorPatient' });
    }
  }
  Doctor.init(
    {
      doctorId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      specialization: DataTypes.STRING,
      allowNull: false,
    },
    {
      sequelize,
      modelName: 'Doctor',
    }
  );
  return Doctor;
};

