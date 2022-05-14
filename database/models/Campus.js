/*==================================================
/database/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/853250/college-building-clipart-md.png"
  },

  description: {
    type: Sequelize.STRING(10000)
  }
});

// Export the campus model
module.exports = Campus;