/*==================================================
/database/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

//Define the student model
const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://www.seekpng.com/png/small/17-176376_person-free-download-and-person-icon-png.png"
  },

  gpa: {
    type: Sequelize.FLOAT(4.0,1),
    min: 0.0
  }
});

// Export the student model
module.exports = Student;